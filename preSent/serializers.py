from rest_framework import serializers
from .models import Creator, DailyWords, Post, User, Comment 

class CreatorSerializer(serializers.HyperlinkedModelSerializer):
    posts = serializers.HyperlinkedRelatedField(
        view_name='post_detail',
        many=True,
        read_only=True
    )
    daily_words = serializers.HyperlinkedRelatedField(
        view_name='daily_words_detail',
        many=True,
        read_only=True
    )    
    class Meta:
        model = Creator
        fields = ('id', 'name', 'location', 'about', 'email','password', 'profile_pic', 'posts', 'daily_words')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    comment = serializers.HyperlinkedRelatedField(
        view_name='comment_detail',
        many=True,
        read_only=True
    )
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password', 'profile_pic', 'comment')

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.SlugRelatedField(
        read_only=True,
        slug_field='name'
    )
    post = serializers.SlugRelatedField(
        read_only=True,
        slug_field='title'
    )
    class Meta:
        model = Comment
        fields = ('id', 'title', 'body', 'user', 'post')

class PostSerializer(serializers.HyperlinkedModelSerializer):
    creator = serializers.SlugRelatedField(
        read_only=True,
        slug_field='name'
    )
    comment = CommentSerializer(many=True, read_only=True)
    
    class Meta:
        model = Post
        fields = ('id', 'title', 'description', 'file', 'creator', 'comment')


class DailyWordsSerializer(serializers.HyperlinkedModelSerializer):
        creator = serializers.HyperlinkedRelatedField(
            view_name='creator_detail',
            read_only=True
        )
        class Meta:
            model = DailyWords
            fields = ('id', 'name', 'body', 'creator')
