# Generated by Django 3.2.12 on 2022-05-23 01:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0019_carsdb'),
    ]

    operations = [
        migrations.RenameField(
            model_name='quote',
            old_name='customer',
            new_name='owner',
        ),
    ]