# Generated by Django 4.1 on 2022-09-03 14:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('preSent', '0009_post_file_alter_user_profile_pic'),
    ]

    operations = [
        migrations.AddField(
            model_name='dailywords',
            name='name',
            field=models.CharField(default='no name', max_length=100),
        ),
    ]
