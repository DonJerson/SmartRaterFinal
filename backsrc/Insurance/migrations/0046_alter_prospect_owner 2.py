# Generated by Django 3.2.12 on 2022-12-07 05:23

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0045_alter_prospect_baths'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prospect',
            name='owner',
            field=models.ForeignKey(blank=True, default=1, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]