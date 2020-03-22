from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Job(models.Model):

    name= models.CharField(max_length=100)
    # pass unique=True
    company = models.CharField(max_length=100)
    description = models.CharField(max_length=500, blank=True) #optional
    owner = models.ForeignKey(User, related_name="jobs", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Application(models.Model):

    name = models.CharField(max_length=100)
    email = models.EmailField()
    file = models.FileField(upload_to ='uploads/')
    job = models.ForeignKey(Job, related_name="applications", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
