from django.contrib import admin
from .models import Room, Amenity


@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "owner",
        "address",
        "city",
        "country",
        "rooms",
        "total_amenities",
        "kind",
        "price",
    )

    list_filter = (
        "country",
        "city",
        "rooms",
        "toilets",
        "pet_friendly",
        "kind",
        "price",
        "amenities",
    )


@admin.register(Amenity)
class AmenityAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "description",
        "created_at",
        "updated_at",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )
