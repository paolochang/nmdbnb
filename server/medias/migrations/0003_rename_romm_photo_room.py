# Generated by Django 4.1.5 on 2023-02-15 07:19

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("medias", "0002_alter_photo_experience_alter_photo_romm_and_more"),
    ]

    operations = [
        migrations.RenameField(
            model_name="photo",
            old_name="romm",
            new_name="room",
        ),
    ]
