from django.urls import path, include
from . import views


urlpatterns = [
    # path('', views.getRoutes, name="routes"),
    path('asdata/', views.getAsdata, name="asdata"),
    path('asdata/<str:pk>/', views.getOneAsdata, name="oneasdata"),
    path('ingvoldata/', views.getIngVoldata, name="ingvoldata"),
    path('ingvoldata/<str:pk>/', views.getOneIngVoldata, name="oneingvoldata")
    # add another path to the url patterns
    # when you visit the localhost:8000/api
    # you should be routed to the django Rest framework
    ]