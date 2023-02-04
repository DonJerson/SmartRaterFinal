# Generated by Django 2.2 on 2022-01-16 16:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Insurance', '0010_auto_20220116_1432'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='commercialautoquoteelements',
            name='additionalInsureds',
        ),
        migrations.AddField(
            model_name='healthquoteelements',
            name='additionalInsureds',
            field=models.ManyToManyField(blank=True, related_name='additionalHealthInsureds', to='Insurance.NamedInsured'),
        ),
        migrations.AddField(
            model_name='lifequoteelements',
            name='additionalInsureds',
            field=models.ManyToManyField(blank=True, related_name='additionalLifeInsureds', to='Insurance.NamedInsured'),
        ),
        migrations.AlterField(
            model_name='commercialautoquoteelements',
            name='mainInsured',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='mainCAInsured', to='Insurance.Company'),
        ),
    ]