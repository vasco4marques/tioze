from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request,"base.html")

def historia(request):
    return render(request,"historia.html")