from django.urls import path
from . import views
urlpatterns =[
    path('',views.testfn, name='index'),
    
]
