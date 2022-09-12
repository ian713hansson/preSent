
from django.db import models


class Creator(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    about = models.TextField()
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    profile_pic = models.CharField(max_length=100, default='no pic')

    def __str__(self):
        return self.name



class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Post(models.Model):
    # creator = models.ForeignKey(Creator, on_delete=models.CASCADE, related_name='posts')
    title = models.CharField(max_length=100, null=True)
    description = models.TextField(null=True)
    image = models.TextField(null=True)
    file = models.TextField(null=True)
    om = models.IntegerField(default=0, null=True)
    
    

    def __str__(self):
        return self.title

class Comment(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comment')
    # post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comment', default=42)
    title = models.CharField(max_length=100)
    body = models.TextField()

    def __str__(self):
        return self.title

class DailyWords(models.Model):
    creator = models.ForeignKey(Creator, on_delete=models.CASCADE, related_name='daily_words', default=1)
    name = models.CharField(max_length=100, default='no name')
    body = models.TextField()

    def __str__(self):
        return self.name
# Create your models here.
