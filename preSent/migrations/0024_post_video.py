# Generated by Django 4.1 on 2022-09-09 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('preSent', '0023_alter_post_file'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='video',
            field=models.TextField(null=True),
        ),
    ]