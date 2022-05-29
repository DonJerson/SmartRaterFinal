from django.db import models
from datetime import timedelta
from django.utils import timezone

class AutoDateTimeField(models.DateTimeField):
    def pre_save(self, model_instance, add):
        return timezone.now()


UNIT_CHOICES = [('Km/gal','KM'),('Mi/gal','MI')]
PAYMENT_CHOICES = [('CARD','Card'),('CASH','Cash'),('BTC','BTC'),('PAYP','PayPal')]

def daterange(start_date, end_date):
    for n in range(int ((end_date - start_date).days)):
        yield start_date + timedelta(n)
    return


# Create your models here.
class SupportChat(models.Model):
	closed= models.BooleanField(default=False)
	comment = models.TextField(null=True,blank=True)
	rating = models.IntegerField(null=True,blank=True)
	
	@property
	def messages(self):
		return self.supportmessage_set.all()

	def __str__(self):
		return self.customer.email
	pass

class SupportMessage(models.Model):
	date = AutoDateTimeField(default=timezone.now)
	text = models.TextField()
	supportChat = models.ForeignKey(SupportChat,on_delete=models.CASCADE,null=True,blank=True)
	delivered = models.BooleanField(default=False)
	seen = models.BooleanField(default=False)
	deleted = models.BooleanField(default=False)
	pass
	def __str__(self):
		return self.text
	pass