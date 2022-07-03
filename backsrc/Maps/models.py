from django.db import models


class Country(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    short=models.CharField(max_length=2,blank=True,null=True)
    def __str__(self):
        return self.name
class State(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, blank=True, null=True)
    short=models.CharField(max_length=2,blank=True,null=True)
    def __str__(self):
        return self.name
class City(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    state=models.ForeignKey(State,on_delete=models.CASCADE,blank=True,null=True)
    def __str__(self):
        return self.name
class County(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE, blank=True, null=True)
    url= models.CharField(max_length=100, blank=True, null=True)
    def __str__(self):
        return self.name
class Zipcode(models.Model):
    value = models.CharField(max_length=50, blank=True, null=True)
    county = models.ForeignKey(County, on_delete=models.CASCADE, blank=True, null=True)
    def __str__(self):
        return self.value
# Create your models here.
class Address(models.Model):
    address1 = models.CharField(max_length=50,blank=True,null=True)
    address2 = models.CharField(max_length=50,default='',blank=True,null=True)
    zipcode = models.ForeignKey(Zipcode, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        if(self.address1 and self.zipcode):
            if(self.address2):
                return (
            self.address1 + ', ' +self.address2+ ', ' 
			+ self.zipcode.county.city.name + ', ' + self.zipcode.county.city.state.short + ', ' + self.zipcode.value)
            else:
                return (
            self.address1 + ', ' + self.zipcode.county.city.name + ', ' + self.zipcode.county.city.state.short + ', ' + self.zipcode.county.city.zipcode)
        else: return self.address1
    pass