# Generated by Django 3.2.12 on 2023-02-05 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0011_prospect_foundationshape'),
    ]

    operations = [
        migrations.AddField(
            model_name='prospect',
            name='plumbingType',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]