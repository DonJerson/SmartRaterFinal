# Generated by Django 3.2.12 on 2022-06-25 15:45

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0031_auto_20220625_1528'),
    ]

    operations = [
        migrations.AddField(
            model_name='quote',
            name='businessQuoteElements',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Insurance.businessquoteelements'),
        ),
        migrations.AddField(
            model_name='quote',
            name='commercialAutoQuoteElements',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Insurance.commercialautoquoteelements'),
        ),
        migrations.AddField(
            model_name='quote',
            name='healthQuoteElements',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Insurance.healthquoteelements'),
        ),
        migrations.AddField(
            model_name='quote',
            name='lifeQuoteElements',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Insurance.lifequoteelements'),
        ),
        migrations.AlterField(
            model_name='policy',
            name='bindDate',
            field=models.DateField(blank=True, default=datetime.datetime(2022, 6, 25, 15, 45, 16, 224246), null=True),
        ),
        migrations.AlterField(
            model_name='policy',
            name='effectiveDate',
            field=models.DateField(blank=True, default=datetime.datetime(2022, 6, 25, 15, 45, 16, 224257), null=True),
        ),
    ]
