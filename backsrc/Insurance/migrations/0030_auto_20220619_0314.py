# Generated by Django 3.2.12 on 2022-06-19 03:14

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0029_auto_20220619_0248'),
    ]

    operations = [
        migrations.AlterField(
            model_name='policy',
            name='bindDate',
            field=models.DateField(blank=True, default=datetime.datetime(2022, 6, 19, 3, 14, 8, 863821), null=True),
        ),
        migrations.AlterField(
            model_name='policy',
            name='effectiveDate',
            field=models.DateField(blank=True, default=datetime.datetime(2022, 6, 19, 3, 14, 8, 863831), null=True),
        ),
    ]