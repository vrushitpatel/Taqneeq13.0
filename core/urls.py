from django.contrib import admin
from django.urls import path
from . import views

app_name = "core"

urlpatterns = [
    path('',views.core, name="teams-page"),
    path('all/',views.jsonitems,name="core-info"),
]