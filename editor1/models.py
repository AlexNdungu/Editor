from turtle import update
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Languages(models.Model):

    lang_id = models.AutoField(primary_key=True)
    language = models.CharField(max_length=15, verbose_name='Programming Language')
    lang_extends = models.CharField(max_length=15)
    create = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.language


class Code(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    language = models.ForeignKey(Languages, on_delete=models.CASCADE)
    code_id = models.AutoField(primary_key=True)
    code_name = models.CharField(max_length=20, verbose_name='File Name')
    code = models.TextField()
    create = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.code_name + "." + self.language.lang_extends 

        

class Drop(models.Model):

    image = models.ImageField(upload_to = 'images/')

    def __str__(self):

        return str(self.pk)