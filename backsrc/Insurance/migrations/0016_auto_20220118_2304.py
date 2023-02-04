# Generated by Django 2.2 on 2022-01-18 23:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0015_agency_agencyname'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='businessquoteelements',
            name='quote',
        ),
        migrations.RemoveField(
            model_name='commercialautoquoteelements',
            name='quote',
        ),
        migrations.RemoveField(
            model_name='healthquoteelements',
            name='quote',
        ),
        migrations.RemoveField(
            model_name='homequoteelements',
            name='quote',
        ),
        migrations.RemoveField(
            model_name='lifequoteelements',
            name='quote',
        ),
        migrations.RemoveField(
            model_name='personalautoquoteelements',
            name='quote',
        ),
        migrations.AddField(
            model_name='quote',
            name='BusinessQuoteElements',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='BusinessQuoteElements', to='Insurance.BusinessQuoteElements'),
        ),
        migrations.AddField(
            model_name='quote',
            name='CAQuoteElements',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='CAQuoteElements', to='Insurance.CommercialAutoQuoteElements'),
        ),
        migrations.AddField(
            model_name='quote',
            name='HOQuoteElements',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='HOQuoteElements', to='Insurance.HealthQuoteElements'),
        ),
        migrations.AddField(
            model_name='quote',
            name='HealthQuoteElements',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='HealthQuoteElements', to='Insurance.HealthQuoteElements'),
        ),
        migrations.AddField(
            model_name='quote',
            name='LifeQuoteElements',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='LifeQuoteElements', to='Insurance.LifeQuoteElements'),
        ),
        migrations.AddField(
            model_name='quote',
            name='PAQuoteElements',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='PAQuoteElements', to='Insurance.PersonalAutoQuoteElements'),
        ),
    ]