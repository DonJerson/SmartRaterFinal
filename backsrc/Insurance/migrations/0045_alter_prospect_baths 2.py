# Generated by Django 3.2.12 on 2022-12-07 05:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0044_alter_prospect_beds'),
    ]

    operations = [
        migrations.AlterField(
            model_name='prospect',
            name='baths',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True),
        ),
    ]