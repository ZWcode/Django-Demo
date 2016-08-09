from django.db import models

# Create your models here.
class RecordDB(models.Model):
    title = models.CharField(default='',max_length=50)
    title1 = models.CharField(max_length=50)

