# Generated by Django 4.1 on 2022-09-02 18:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('preSent', '0007_creator_profile_pic'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='profile_pic',
            field=models.FileField(default='no profile picture', upload_to='creator/'),
        ),
    ]