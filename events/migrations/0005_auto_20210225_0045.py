# Generated by Django 3.1.3 on 2021-02-24 19:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0004_auto_20210225_0044'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='contact',
            field=models.CharField(blank=True, default='9820050976', max_length=10),
        ),
    ]
