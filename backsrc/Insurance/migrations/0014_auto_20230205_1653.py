# Generated by Django 3.2.12 on 2023-02-05 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0013_prospect_floor'),
    ]

    operations = [
        migrations.AddField(
            model_name='prospect',
            name='aop',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='coverageB',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='coverageC',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='coverageD',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='coverageE',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='coverageF',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='medical',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='structureType',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='swr',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
