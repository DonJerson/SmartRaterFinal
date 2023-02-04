# Generated by Django 2.2 on 2022-01-18 15:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0012_auto_20220118_0250'),
    ]

    operations = [
        migrations.CreateModel(
            name='CalendarMonth',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=50, null=True)),
                ('short', models.CharField(blank=True, max_length=50, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='unoccupiedmonth',
            name='name',
        ),
        migrations.RemoveField(
            model_name='unoccupiedmonth',
            name='short',
        ),
        migrations.AddField(
            model_name='car',
            name='brand',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Insurance.Brand'),
        ),
        migrations.AddField(
            model_name='car',
            name='model',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Insurance.Model'),
        ),
        migrations.AddField(
            model_name='car',
            name='year',
            field=models.CharField(blank=True, max_length=4, null=True),
        ),
        migrations.AddField(
            model_name='unoccupiedmonth',
            name='unoccupiedMonths',
            field=models.ManyToManyField(blank=True, null=True, to='Insurance.CalendarMonth'),
        ),
    ]