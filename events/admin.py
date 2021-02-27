from django.contrib import admin
from .models import Event
from import_export.admin import ImportExportModelAdmin

# Register your models here.

@admin.register(Event)

class ViewAdmin(ImportExportModelAdmin):
    pass