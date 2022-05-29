from django.db import models

# Create your models here.

class Picture(models.Model):
	key=models.CharField(max_length=50,blank=True,null=True)
	url=models.CharField(max_length=200,blank=True,null=True)
	def __str__(self):
		return self.key
	pass

class File(models.Model):
	fileType = models.CharField(max_length=50,blank=True,null=True)
	name = models.CharField(max_length=50,blank=True,null=True)
	url = models.CharField(max_length=500,blank=True,null=True)
	def __str__(self):
		return self.name
	pass