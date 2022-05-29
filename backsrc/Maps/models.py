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
    state = models.ForeignKey(State, on_delete=models.CASCADE, blank=True, null=True)
    zipcode = models.CharField(max_length=10, blank=True, null=True)
    short=models.CharField(max_length=2,blank=True,null=True)

# Create your models here.
class Address(models.Model):
    address1 = models.CharField(max_length=50,blank=True,null=True)
    address2 = models.CharField(max_length=50,default='',blank=True,null=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        if(self.address1 and self.city.name and self.city.state.name and self.city.zipcode):
            if(self.address2):
                return (
            self.address1 + ', ' +self.address2+ ', ' 
			+ self.city.name + ', ' + self.city.state.short + ', ' + self.city.zipcode)
            else:
                return (
            self.address1 + ', ' + self.city.name + ', ' + self.city.state.short + ', ' + self.city.zipcode)
        else: return "Address"
    pass