from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import Perk, Experience
from wishlists.models import Wishlist


class PerkSerializer(ModelSerializer):
    class Meta:
        model = Perk
        fields = "__all__"


class ExperienceListSerializer(ModelSerializer):
    class Meta:
        model = Experience
        fields = (
            "pk",
            "name",
            "description",
        )


class ExperienceDetailSerializer(ModelSerializer):
    in_wishlist = SerializerMethodField()

    class Meta:
        model = Experience
        fields = (
            "pk",
            "name",
            "description",
            "in_wishlist",
        )

    def get_in_wishlist(self, experience):
        request = self.context["request"]
        return Wishlist.objects.filter(
            user=request.user,
            experiences__pk=experience.pk,
        ).exists()
