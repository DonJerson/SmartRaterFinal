# Generated by Django 3.2.12 on 2022-06-19 02:25

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0027_auto_20220619_0208'),
    ]

    operations = [
        migrations.AlterField(
            model_name='policy',
            name='bindDate',
            field=models.DateField(blank=True, default=datetime.datetime(2022, 6, 19, 2, 25, 30, 457134), null=True),
        ),
        migrations.AlterField(
            model_name='policy',
            name='effectiveDate',
            field=models.DateField(blank=True, default=datetime.datetime(2022, 6, 19, 2, 25, 30, 457147), null=True),
        ),
    ]
