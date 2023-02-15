from django.conf import settings
from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ParseError, NotFound
from rest_framework import status
from rest_framework.response import Response
from .models import User
from .serializers import AuthenticatedUserSerializer, PublicUserSerializer
from reviews.serializers import ReviewSerializer


class Me(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        serializer = AuthenticatedUserSerializer(user)
        return Response(serializer.data)

    def put(self, request):
        user = request.user
        serializer = AuthenticatedUserSerializer(
            user,
            data=request.data,
            partial=True,
        )
        if serializer.is_valid():
            updated_user = serializer.save()
            serializer = AuthenticatedUserSerializer(updated_user)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class Users(APIView):
    def post(self, request):
        password = request.data.get("password")
        if not password:
            raise ParseError("Password is missing")
        serializer = AuthenticatedUserSerializer(data=request.data)
        if serializer.is_valid():
            new_user = serializer.save()
            new_user.set_password(password)
            new_user.save()
            serializer = AuthenticatedUserSerializer(new_user)
            return Response(serializer.data)
        else:
            return Response(serializer.errors)


class UserChangePassword(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request):
        user = request.user
        old_password = request.data.get("old_password")
        new_password = request.data.get("new_password")

        if not old_password or not new_password:
            raise ParseError("old_password and new_password are needed")

        if user.check_password(old_password):
            user.set_password(new_password)
            user.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserLogIn(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        if not username or not password:
            raise ParseError("username and password are needed")

        user = authenticate(
            request,
            username=username,
            password=password,
        )

        if user:
            login(request, user)
            return Response({"message": "login success"})
        else:
            return Response({"error": "wrong password"})


class UserLogOut(APIView):
    def post(self, request):
        logout(request)
        return Response({"message": "logout success"})


class PublicUser(APIView):
    def get(self, request, username):
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            raise NotFound
        serializer = PublicUserSerializer(user)
        return Response(serializer.data)


class PublicUserReveiws(APIView):
    def get(self, request, username):
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            raise NotFound

        try:
            page = request.query_params.get("page", 1)
            page = int(page)
        except ValueError:
            page = 1

        page_size = settings.PAGE_SIZE
        pagination_start = (page - 1) * page_size
        pagination_end = pagination_start + page_size

        serializer = ReviewSerializer(
            user.reviews.all()[pagination_start:pagination_end],
            many=True,
        )
        return Response(serializer.data)
