from django.db import models


# Create your models here.

class Tipo(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Produto(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    tipo = models.ForeignKey(Tipo, on_delete=models.CASCADE)
    nutInfo = models.CharField(max_length=400)
    imagePath= models.CharField(max_length=200)
    inView=models.BooleanField()



    def __str__(self):
        value = self.name + " :  " + self.description
        return value
    


