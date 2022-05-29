# Generated by Django 3.2.12 on 2022-05-29 19:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Country',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50, null=True)),
                ('short', models.CharField(blank=True, max_length=2, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='State',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50, null=True)),
                ('short', models.CharField(blank=True, max_length=2, null=True)),
                ('country', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Maps.country')),
            ],
        ),
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50, null=True)),
                ('zipcode', models.CharField(blank=True, max_length=10, null=True)),
                ('short', models.CharField(blank=True, max_length=2, null=True)),
                ('state', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Maps.state')),
            ],
        ),
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address1', models.CharField(blank=True, max_length=50, null=True)),
                ('address2', models.CharField(blank=True, default='', max_length=50, null=True)),
                ('city', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Maps.city')),
            ],
        ),
    ]
