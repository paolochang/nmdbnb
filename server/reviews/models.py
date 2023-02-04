from django.db import models
from common.models import CommonModel


class Review(CommonModel):

    """Review Model Definition"""

    user = models.ForeignKey(
        "users.User",
        on_delete=models.DO_NOTHING,
    )
    room = models.ForeignKey(
        "rooms.Room",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
    )
    experience = models.ForeignKey(
        "experiences.Experience",
        blank=True,
        null=True,
        on_delete=models.CASCADE,
    )
    payload = models.TextField()
    rating = models.PositiveIntegerField()

    def __str__(self) -> str:
        return f"{self.user}, {self.rating}"
