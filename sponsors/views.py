from django.shortcuts import render

# Create your views here.

def sponsors(request):
    return render(request,'sponsors/sponsors.html',{})