from django.db import models

# Create your models here.
class Skill(models.Model):
    skill_name = models.CharField(max_length=255)
    icon_url = models.CharField(max_length=255)
