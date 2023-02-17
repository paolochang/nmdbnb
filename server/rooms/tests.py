from rest_framework.test import APITestCase
from .models import Amenity, Room
from users.models import User


class TestAmenities(APITestCase):
    NAME = "Amenity Test"
    DESC = "Amenity Description"
    URL = "/api/v1/rooms/amenities/"

    def setUp(self) -> None:
        Amenity.objects.create(
            name=self.NAME,
            description=self.DESC,
        )

    def test_all_amenities(self):
        response = self.client.get(self.URL)
        data = response.json()

        self.assertEqual(
            response.status_code,
            200,
            "Status Code should return HTTP_200_OK",
        )
        self.assertIsInstance(data, list)
        self.assertEqual(len(data), 1)
        self.assertEqual(data[0]["name"], self.NAME)
        self.assertEqual(data[0]["description"], self.DESC)

    def test_create_amenity(self):
        new_amenity_name = "New amenity"
        new_amenity_description = "New amenity description"
        response = self.client.post(
            self.URL,
            data={
                "name": new_amenity_name,
                "description": new_amenity_description,
            },
        )
        data = response.json()

        self.assertEqual(
            response.status_code,
            201,
            "Status Code should return HTTP_201_CREATED",
        )

        self.assertEqual(data["name"], new_amenity_name)
        self.assertEqual(data["description"], new_amenity_description)

        response = self.client.post(self.URL)
        data = response.json()

        self.assertEqual(
            response.status_code,
            400,
            "Status Code should return HTTP_400_BAD_REQUEST",
        )
        self.assertIn("name", data)


class TestAmenity(APITestCase):
    NAME = "Amenity Test"
    DESC = "Amenity Description"

    def setUp(self) -> None:
        Amenity.objects.create(
            name=self.NAME,
            description=self.DESC,
        )

    def test_amenity_not_found(self):
        response = self.client.get("/api/v1/rooms/amenities/2")
        self.assertEqual(response.status_code, 404)

    def test_get_amenity(self):
        response = self.client.get("/api/v1/rooms/amenities/1")
        data = response.json()

        self.assertEqual(response.status_code, 200)
        self.assertEqual(data["name"], self.NAME)
        self.assertEqual(data["description"], self.DESC)

    def test_put_amenity_validation_fail(self):
        invalid_name = ""
        response = self.client.put(
            "/api/v1/rooms/amenities/1",
            data={
                "name": invalid_name,
            },
        )
        data = response.json()
        self.assertEqual(
            response.status_code,
            400,
            "Status Code should return HTTP_400_BAD_REQUEST",
        )

    def test_put_amenity(self):
        updated_name = "updated amenity"
        updated_description = "updated amenity description"
        response = self.client.put(
            "/api/v1/rooms/amenities/1",
            data={
                "name": updated_name,
                "description": updated_description,
            },
        )
        data = response.json()
        self.assertEqual(response.status_code, 200)
        self.assertEqual(data["name"], updated_name)
        self.assertEqual(data["description"], updated_description)

    def test_delete_amenity(self):
        response = self.client.delete("/api/v1/rooms/amenities/1")
        self.assertEqual(response.status_code, 204)


class TestRoom(APITestCase):
    USERNAME = "tester"
    PASSWORD = "password"

    def setUp(self):
        user = User.objects.create(username="tester")
        user.set_password("password")
        user.save()

        self.client.login(
            username=self.USERNAME,
            password=self.PASSWORD,
        )
        self.user = user

    def test_create_room_without_authentication(self):
        self.client.logout()
        response = self.client.post("/api/v1/rooms/")
        self.assertEqual(
            response.status_code,
            403,
            "Status Code should return HTTP_403_FORBIDDEN",
        )

    def test_create_room(self):
        self.client.force_login(self.user)
        response = self.client.post(
            "/api/v1/rooms/",
            data={
                "price": 150,
                "rooms": 2,
                "toilets": 1,
                "address": "1 test",
                "description": "test creation of room",
                "kind": Room.RoomKindChoices.ENTIRE_PLACE,
            },
        )
        self.assertEqual(response.status_code, 200)
