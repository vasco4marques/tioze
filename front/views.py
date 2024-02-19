
from django.shortcuts import render
from .models import Produto, Tipo

# Create your views here.

def home(request):
    return render(request,"base.html")

def historia(request):
    return render(request,"historia.html")

def showProdutos(request,tipo):
    value = Tipo.objects.get(name = tipo)
    lista = Produto.objects.filter(tipo = value.id)
    tipos = Tipo.objects.all()
    return render(request,"produtos.html",{"lista":lista,"tipos":tipos,"escolhido":value.name})

def produto(request,produto):
    value = Produto.objects.get(name=(produto.replace("-"," ",2).replace("-","/")))
    return render(request,"produto.html",{"product":value})