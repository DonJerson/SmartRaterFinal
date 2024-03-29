# Generated by Django 3.2.12 on 2023-02-05 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0014_auto_20230205_1653'),
    ]

    operations = [
        migrations.AddField(
            model_name='prospect',
            name='hurricane',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='inspectionCompany',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='inspectionDate',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='inspectorName',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='inspectorPhone',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='lossAssessment',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='prospect',
            name='roofCovering',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
