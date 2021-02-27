from django.db import models

# Create your models here.

class Event(models.Model):
    name = models.CharField(max_length=200, blank=True)
    deptName = models.CharField(max_length=200, blank=True)
    desc = models.TextField(max_length=10000000, blank=True)
    formurl = models.URLField(max_length=100000000000, blank=True)
    ongoingurl = models.URLField(max_length=100000000000, blank=True)
    ongoing = models.BooleanField(null=True, default= False)
    contact = models.CharField(max_length=10,default='9820050976', blank=True)

    def __str__(self):
        return self.name + f' ({self.deptName}) -- ' + str(self.ongoing)