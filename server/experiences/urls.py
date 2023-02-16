from django.urls import path
from .views import Experiences, ExperienceDetail, ExperienceBookings, Perks, PerkDetail

urlpatterns = [
    path("", Experiences.as_view()),
    path("<int:pk>", ExperienceDetail.as_view()),
    path("<int:pk>/bookings", ExperienceBookings.as_view()),
    path("perks/", Perks.as_view()),
    path("perks/<int:pk>", PerkDetail.as_view()),
]
