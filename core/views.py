from django.shortcuts import render
from django.core import serializers
from django.http import JsonResponse
from .models import Member
import json
app_name = "core"

# Create your views here.

def jsonitems(request):
    coreinfo = serializers.serialize("json",Member.objects.all().filter().order_by('posnum','position','name'))
    coreinfo = json.loads(coreinfo)
    return JsonResponse(coreinfo,safe=False)

def core(request):
    return render(request, 'core/core.html')
