# Generated by Django 3.2.12 on 2022-06-25 16:26

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0033_auto_20220625_1624'),
    ]

    operations = [
        migrations.AlterField(
            model_name='policy',
            name='bindDate',
            field=models.DateField(blank=True, default=datetime.datetime(2022, 6, 25, 16, 26, 41, 941452), null=True),
        ),
        migrations.AlterField(
            model_name='policy',
            name='effectiveDate',
            field=models.DateField(blank=True, default=datetime.datetime(2022, 6, 25, 16, 26, 41, 941464), null=True),
        ),
    ]
