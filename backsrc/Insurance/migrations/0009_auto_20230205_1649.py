# Generated by Django 3.2.12 on 2023-02-05 16:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0008_prospect_wallmaterial'),
    ]

    operations = [
        migrations.AddField(
            model_name='prospect',
            name='roofShape',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='wallFrame',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='wallMasonry',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
