from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import NotFound, ParseError
from rest_framework.status import HTTP_200_OK, HTTP_204_NO_CONTENT
from rooms.models import Room
from experiences.models import Experience
from .models import Wishlist
from .serializers import WishlistSerializer


class Wishlists(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        all_wishlists = Wishlist.objects.filter(user=request.user)
        serializer = WishlistSerializer(
            all_wishlists,
            many=True,
            context={"request": request},
        )
        return Response(serializer.data)

    def post(self, request):
        serializer = WishlistSerializer(data=request.data)
        if serializer.is_valid():
            new_wishlist = serializer.save(
                user=request.user,
            )
            serializer = WishlistSerializer(new_wishlist)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class WishlistDetail(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self, pk, user):
        try:
            return Wishlist.objects.get(pk=pk, user=user)
        except Wishlist.DoesNotExist:
            raise NotFound

    def get(self, request, pk):
        wishlist = self.get_object(pk, request.user)
        serializer = WishlistSerializer(
            wishlist,
            context={"request": request},
        )
        return Response(serializer.data)

    def put(self, request, pk):
        wishlist = self.get_object(pk, request.user)
        serializer = WishlistSerializer(
            wishlist,
            data=request.data,
            partial=True,
        )
        if serializer.is_valid():
            updated_wishlist = serializer.save()
            serializer = WishlistSerializer(updated_wishlist)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

    def delete(self, request, pk):
        wishlist = self.get_object(pk, request.user)
        wishlist.delete()
        return Response(status=HTTP_204_NO_CONTENT)


class WishlistManager(APIView):
    def get_wishlist(self, pk, user):
        try:
            return Wishlist.objects.get(pk=pk, user=user)
        except Wishlist.DoesNotExist:
            raise NotFound

    def put(self, request, pk):
        wishlist = self.get_wishlist(pk, request.user)

        room_pk = request.data.get("room_pk")
        experience_pk = request.data.get("experience_pk")

        if not room_pk and not experience_pk:
            raise ParseError("room_pk or experience_pk is needed")

        if room_pk:
            try:
                room = Room.objects.get(pk=room_pk)
            except Room.DoesNotExist:
                raise NotFound(f"Room with pk {room_pk} is not found")
        else:
            try:
                experience = Experience.objects.get(pk=experience_pk)
            except Experience.DoesNotExist:
                raise NotFound(f"Experience with pk {room_pk} is not found")

        if room_pk:
            if wishlist.rooms.filter(pk=room.pk).exists():
                wishlist.rooms.remove(room)
            else:
                wishlist.rooms.add(room)
        else:
            if wishlist.experiences.filter(pk=experience.pk).exists():
                wishlist.experiences.remove(experience)
            else:
                wishlist.experiences.add(experience)

        return Response(status=HTTP_200_OK)
