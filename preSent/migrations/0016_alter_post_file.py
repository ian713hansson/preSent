# Generated by Django 4.1 on 2022-09-07 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('preSent', '0015_post_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='file',
            field=models.CharField(default='no file available', max_length=200),
        ),
    ]