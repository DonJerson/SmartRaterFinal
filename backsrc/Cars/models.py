from django.db import models

# Create your models here.

#create brand class
class CarCategory(models.Model):
    name = models.CharField(max_length=25)
    def __str__(self):
        return self.name

class Feature(models.Model):
    name = models.CharField(max_length=25)
    label = models.CharField(max_length=25)
    def __str__(self):
        return self.name

class Brand(models.Model):
	name = models.CharField(max_length=50)
	short = models.CharField(max_length=5,blank=True,null=True)
	@property
	def models(self):
		return self.model_set.all()
	pass
	def __str__(self):
		return self.name
	pass

class Model(models.Model):
	name = models.CharField(max_length=50)
	brand = models.ForeignKey(Brand,on_delete=models.CASCADE)

	@property
	def yearSet(self):
		return self.yearentry_set.all()

	def __str__(self):
		return self.name
	pass

class YearEntry(models.Model):
	year = models.CharField(max_length=4)
	model = models.ForeignKey(Model,on_delete=models.CASCADE)

	@property
	def bodyStyles(self):
		return self.bodystyleentry_set.all()

	@property
	def pickTrims(self):
		return self.picktrimentry_set.all()

	def __str__(self):
		return self.year+" "+self.model.name
	pass
class BodyStyleEntry(models.Model):
	bodyStyle = models.CharField(max_length=50)
	yearEntry=models.ForeignKey(YearEntry,on_delete=models.CASCADE,null=True,blank=True)
	@property
	def pickTrims(self):
		return self.picktrimentry_set.all()
	pass

class PickTrimEntry(models.Model):
	pickTrim = models.CharField(max_length=50)
	bodyStyle=models.ForeignKey(BodyStyleEntry,on_delete=models.CASCADE,null=True,blank=True)
	pass

class CarEntry(models.Model):
	brand = models.CharField(max_length=25,blank=True,null=True)
	model = models.CharField(max_length=60,blank=True,null=True)
	years = models.CharField(max_length=15,blank=True,null=True)
	carType = models.CharField(max_length=50,blank=True,null=True)
	def __str__(self):
		return self.brand+" "+self.model
	pass