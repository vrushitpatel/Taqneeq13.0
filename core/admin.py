from django.contrib import admin
from .models import Member
from import_export.admin import ImportExportModelAdmin
# Register your models here.

@admin.register(Member)

class ViewAdmin(ImportExportModelAdmin):
    pass