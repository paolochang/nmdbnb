from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ParseError
from rest_framework import status
from rest_framework.response import Response
from .serializers import AuthenticatedUserSerializer


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
