from django.shortcuts import render
from .serializers import CommentSerializer, CreatorSerializer, DailyWordsSerializer, PostSerializer, UserSerializer
from .models import Creator, User, Post, Comment, DailyWords
from rest_framework import generics
# trying post
from rest_framework.decorators import api_view
from rest_framework.response import Response




# List views...
class CreatorList(generics.ListCreateAPIView):
    queryset = Creator.objects.all()
    serializer_class = CreatorSerializer

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class DailyWordsList(generics.ListCreateAPIView):
    queryset = DailyWords.objects.all()
    serializer_class = DailyWordsSerializer


# Detail views ...

class CreatorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Creator.objects.all()
    serializer_class = CreatorSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class DailyWordsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = DailyWords.objects.all()
    serializer_class = DailyWordsSerializer

# Create your views here.
@api_view(['POST'])
def createPost(request):
    
    data = request.data
    
    post = Post.objects.create(
        title=data['title']
    )
    
    serializer = PostSerializer(post, many=False)
    return Response(serializer.data)