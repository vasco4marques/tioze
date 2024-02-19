from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name = "home"),
    path("historia",views.historia,name="historia"),
    path("produtos/<str:tipo>",views.showProdutos, name="produtos"),
    path("produto/<str:produto>",views.produto,name="produto"),
]


