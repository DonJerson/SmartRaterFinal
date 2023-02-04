# Generated by Django 3.2.12 on 2022-05-27 00:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0020_rename_customer_quote_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='agency',
            name='agencyOwner',
        ),
        migrations.RemoveField(
            model_name='uwfile',
            name='customer',
        ),
        migrations.AddField(
            model_name='customer',
            name='agency',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Insurance.agency'),
        ),
    ]