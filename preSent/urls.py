from django.urls import path
from . import views

urlpatterns = [

    # list urls
    path('creator/', views.CreatorList.as_view(), name='creator_list'),
    path('user/', views.UserList.as_view(), name='user_list'),
    path('post/', views.PostList.as_view(), name='post_list'),
    path('comment/', views.CommentList.as_view(), name='comment_list'),
    path('daily_words/', views.DailyWordsList.as_view(), name='daily_words_list'),
    
    # detail urls
    path('creator/<int:pk>', views.CreatorDetail.as_view(), name='creator_detail'),
    path('user/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('post/<int:pk>', views.PostDetail.as_view(), name='post_detail'),
    path('comment/<int:pk>', views.CommentDetail.as_view(), name='comment_detail'),
    path('daily_words/<int:pk>', views.DailyWordsDetail.as_view(), name='daily_words_detail')
]