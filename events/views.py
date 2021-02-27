from django.shortcuts import render
from django.core import serializers
from django.http import JsonResponse
from .models import Event
import json

# Create your views here.

def jsonitems(request,dept):
    eventinfo = serializers.serialize("json",Event.objects.all().filter(deptName__icontains=dept).order_by('name'))
    eventinfo = json.loads(eventinfo)
    return JsonResponse(eventinfo,safe=False)

def ourevents(request):
    return render(request,'events/events.html',{})


def eachevent(request,dept):
    e = Event.objects.all().filter(deptName__icontains=dept).order_by('name')
    return render(request,'events/event-content.html',{'events':e, 'dept': e[0].deptName})

def liveupdates(request):
    e = Event.objects.all().filter(ongoing=True).order_by('name')
    return render(request,'events/liveupdate.html',{'events':e})


def pingo(request):
    return render(request,'events/bingo.html')