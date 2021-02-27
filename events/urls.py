from django.contrib import admin
from django.urls import path,include
from . import views

app_name = "events"

urlpatterns = [
    path('',views.ourevents,name='ourevents'),
    path('liveupdates/',views.liveupdates,name='liveupdates'),
    path('pingo/',views.pingo,name='pingo'),
    path('<str:dept>/',views.eachevent,name="event-view")
]