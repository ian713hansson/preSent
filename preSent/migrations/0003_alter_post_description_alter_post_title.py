# Generated by Django 4.1 on 2022-09-11 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('preSent', '0002_post_om'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='title',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
