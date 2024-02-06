from django.db import models

# Create your models here.


class Produto(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    nut_info = models.CharField(max_length=400)
    image = models.ImageField()

    def __str__(self):
        value = self.name + " : " + self.description + ", Info Nutri:" + self.nut_info
        return value
    

