from django.shortcuts import render
from user.models import Profile 
# Create your views here.
from django.contrib.auth.models import User

def main(request):
    return render(request,'main/main.html',{})

def index_main(request):
    return render(request,'main/index_main.html',{})

def cleaner(request):
    cleaner_users = Profile.objects.filter(profession="cleaner")
    return render(request,'main/cleaner.html',{'cleaners':cleaner_users})
    
