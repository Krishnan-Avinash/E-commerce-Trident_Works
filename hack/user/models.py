from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Profile(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    profession=models.CharField(max_length=20,null=True,blank=True)
    mobile=models.CharField(max_length=20,null=True,blank=True)
    otp=models.CharField(max_length=20,null=True,blank=True)
    def __str__(self):
        return self.user.username