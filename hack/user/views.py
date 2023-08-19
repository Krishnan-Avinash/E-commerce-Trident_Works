from django.shortcuts import render,redirect
# from .forms import RegisterForm
from django.contrib.auth import authenticate
from django.contrib.auth import login as login_tobe
from django.contrib.auth import logout as logout_tobe
from django.contrib.auth.decorators import login_required
from .models import Profile
from django.contrib.auth.models import User
import random
# Create your views here.
def register(request):
    if request.method=="POST":
        email=request.POST.get('email')
        first_name=request.POST.get('first_name')
        last_name=request.POST.get('last_name')
        mobile=request.POST.get('mobile')
        profession=request.POST.get('profession')
        password1=request.POST.get('password1')
        password2=request.POST.get('password2')
        user=User(email=email,first_name=first_name,last_name=last_name,password1=password1,password2=password2)
        user.save()
        otp=str(random.randint(1000,9999))
        profile=Profile(user=user,profession=profession,mobile=mobile,otp=otp)

        if form.is_valid():
            form.save()
            # profession = form.cleaned_data.get('profession')
            # profile = Profile.objects.create(user=user, profession=profession)
            return redirect('login')

    else:
        form=RegisterForm()

    return render(request,'user/register.html',{'form': form})


def login(request):
    if request.method=="POST":
        username = request.POST.get('username')
        password = request.POST.get('password') 
        user = authenticate(request, username=username, password=password) 
        if user is not None:
            login_tobe(request,user)
            return redirect('index')
        else:
            return redirect('user/login.html')
    else:
        return render(request,'user/login.html',{})
    

def index(request):
    return render(request,'user/index.html')