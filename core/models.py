from django.db import models

# Create your models here.


class Member(models.Model):
    name = models.CharField(max_length=200, blank=True)
    position = models.CharField(max_length=200, blank=True)
    deptName = models.CharField(max_length=200, blank=True)
    desc = models.TextField(max_length=400, blank=True)
    posnum = models.CharField(max_length=10, blank=True)
    gifurl = models.URLField(max_length=100000000000000000000000000000000, blank=True)

    def __str__(self):
        return self.name + f' ({self.deptName})'

    # def get_model_fields(self,model):
    #     return model._meta.fields
