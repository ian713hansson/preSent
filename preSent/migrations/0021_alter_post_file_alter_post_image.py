# Generated by Django 4.1 on 2022-09-09 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('preSent', '0020_remove_post_creator'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='file',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.TextField(null=True),
        ),
    ]