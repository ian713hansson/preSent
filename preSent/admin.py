from django.contrib import admin
from .models import Creator, User, Post, Comment, DailyWords
admin.site.register(Creator)
admin.site.register(User)
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(DailyWords)


# Register your models here.
