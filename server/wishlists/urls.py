from django.urls import path
from .views import Wishlists, WishlistDetail, WishlistManager

urlpatterns = [
    path("", Wishlists.as_view()),
    path("<int:pk>", WishlistDetail.as_view()),
    path("<int:pk>/manage", WishlistManager.as_view()),
]
