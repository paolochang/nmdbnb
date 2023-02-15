from rest_framework.serializers import ModelSerializer
from rooms.serializers import RoomListSerializer
from experiences.serializers import ExperienceSerializer
from .models import Wishlist


class WishlistSerializer(ModelSerializer):
    rooms = RoomListSerializer(
        read_only=True,
        many=True,
    )
    experiences = ExperienceSerializer(
        read_only=True,
        many=True,
    )

    class Meta:
        model = Wishlist
        fields = (
            "name",
            "rooms",
            "experiences",
        )
