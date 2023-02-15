from django.urls import path
from .views import Me, Users, PublicUser, UserChangePassword

urlpatterns = [
    path("", Users.as_view()),
    path("me", Me.as_view()),
    path("change-password", UserChangePassword.as_view()),
    path("@<str:username>", PublicUser.as_view()),
]
