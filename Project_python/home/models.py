from django.db import models

# Create your models here.


class gameplayer_info(models.Model):
    age = models.IntegerField()
    bdate = models.DateField()
    gmail = models.TextField()
    level = models.TextField()
    name = models.TextField()
    sex = models.TextField()
    time_now = models.IntegerField()
    time_play = models.IntegerField()

class gameplayer_in(models.Model):
    age = models.IntegerField()
    bdate = models.DateField()
    gmail = models.TextField()
    level = models.TextField()
    name = models.TextField()
    sex = models.TextField()
    time_now = models.IntegerField()
    time_play = models.IntegerField()