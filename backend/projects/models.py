from django.db import models

# Create your models here.
class Project(models.Model):
    project_name = models.CharField(max_length=255)
    project_thumbnail = models.CharField(max_length=255)
    
