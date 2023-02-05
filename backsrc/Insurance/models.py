from django.db import models
from django.contrib.auth.models import User
from Cars.models import *
from Files.models import *
from Maps.models import *
import uuid
#from tinymce import models as tinymce_models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
from datetime import datetime as dt
from datetime import timedelta
import monthdelta as mdt

PROPERTY_CHOICES = [('house','House'),('apt','Apartment'),('bulding','Building')]

BUSINESS_TYPES = [('PA','Personal Auto'),('CA','Commercial Auto'),('HO3','Homeowners')
,('HO3','Homeowners'),('HO4','Tenant Rental'),('HO6','Condo'),('HO8','Custom Home')
	,('HE','Health'),('LI','Life'),('BU','Business'),('FL','Flood'),
	('DP1','Fire'),('DP2','Dwelling'),('DP3','Rental'),('DP4','Other')
	,('OT','Other')
	]


#missing options 
#occupations
#prior companies
#hurricane deductibles
#HOW options
#insurer list
#bi option list
#pip cov, collision, and tpl, etc list
#endorsement list

class AutoDateTimeField(models.DateTimeField):
    def pre_save(self, model_instance, add):
        return timezone.now()


UNIT_CHOICES = [('Km/gal','KM'),('Mi/gal','MI')]
PAYMENT_CHOICES = [('CARD','Card'),('CASH','Cash'),('BTC','BTC'),('PAYP','PayPal')]

def daterange(start_date, end_date):
    for n in range(int ((end_date - start_date).days)):
        yield start_date + timedelta(n)
    return


############ General



class Agency(models.Model):
	name=models.CharField(max_length=50,null=True,blank=True)
	website=models.CharField(max_length=50,null=True,blank=True)
	logo=models.CharField(max_length=50,null=True,blank=True)
	phone=models.CharField(max_length=13,null=True,blank=True)
	address=models.ForeignKey(Address,on_delete=models.CASCADE,null=True,blank=True)


	@property
	def clients(self):
		return self.customer_set.all().filter(role=3)

	@property
	def agents(self):
		return self.customer_set.all().filter(role=2)

	@property
	def master(self):
		return self.customer_set.all().filter(role=1)
		
	pass
	def __str__(self):
		return self.name
	pass

class Customer(AbstractUser):
	MASTER = 1
	AGENT = 2
	CUSTOMER = 3
      
	ROLE_CHOICES = (
          (MASTER, 'Master'),
          (AGENT, 'Agent'),
          (CUSTOMER, 'Customer'),
    )
	role = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, blank=True, null=True)
	agency = models.ForeignKey(Agency,blank=True,null=True,on_delete=models.CASCADE)
	address = models.ForeignKey(Address,blank=True,null=True,on_delete=models.CASCADE)
	first_name = models.CharField(max_length=50,blank=True,null=True)
	middle_name = models.CharField(max_length=50,blank=True,null=True)
	last_name = models.CharField(max_length=50,blank=True,null=True)
	email = models.EmailField(max_length=50,blank=True,null=True)
	phone = models.CharField(max_length=50,blank=True,null=True)
	profilePicture = models.ForeignKey(Picture,blank=True,null=True,on_delete=models.CASCADE)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	
	@property
	def supportChats(self):
		return self.supportchat_set.filter(closed=False)
	@property
	def carList(self):
		return self.car_set.all()
	@property
	def namedInsureds(self):
		return self.namedinsured_set.all()
	@property
	def quoteList(self):
		return self.quote_set.all()
	@property
	def files(self):
		return self.file_set.all()
	@property
	def cards(self):
		return self.card_set.all()
	@property
	def bankaccounts(self):
		return self.bankaccount_set.all()
	@property
	def cryptos(self):
		return self.crypto_set.all()
	@property
	def paypals(self):
		return self.paypal_set.all()

	def __str__(self):
		if(self.first_name and self.last_name):
			return self.first_name+" "+self.last_name
		else:
			return "No name"
	pass



class Car(models.Model):
	customer = models.ForeignKey(Customer,on_delete=models.CASCADE,null=True,blank=True)
	vin = models.CharField(max_length=50,null=True,blank=True)
	year = models.IntegerField(null=True,blank=True)
	make = models.CharField(max_length=50,null=True,blank=True)
	model = models.CharField(max_length=50,null=True,blank=True)
	trim = models.CharField(max_length=50,null=True,blank=True)
	bodyStyle = models.CharField(max_length=50,null=True,blank=True)
	color = models.CharField(max_length=50,null=True,blank=True)
	licensePlate = models.CharField(max_length=50,null=True,blank=True)

	def __str__(self):
		return str(self.year)+ ' ' + str(self.vin)
	pass

class NamedInsured(models.Model):
	customer = models.ForeignKey(Customer,on_delete=models.CASCADE,blank=True,null=True)
	first_name = models.CharField(max_length=50,blank=True,null=True)
	middle_name = models.CharField(max_length=50,blank=True,null=True)
	last_name = models.CharField(max_length=50,blank=True,null=True)
	dob = models.DateField(blank=True,null=True,)
	relationship = models.CharField(max_length=50,blank=True,null=True,
	choices = [('MAIN INSURED','Main Insured'),('SPOUSE','Spouse'),
	('CHILD','Child'),('SIBLING','Sibling'),('OTHER','Other')])
	
	driversLicense = models.CharField(max_length=50,blank=True,null=True)
	passport = models.CharField(max_length=50,blank=True,null=True)
	ssn = models.CharField(max_length=50,blank=True,null=True)
	email = models.EmailField(max_length=50,blank=True,null=True)
	maritalStatus = models.CharField(max_length=50,blank=True,null=True)
	phone = models.CharField(max_length=50,blank=True,null=True)
	occupation = models.CharField(max_length=50,blank=True,null=True)

	def __str__(self):
		if(self.first_name and self.last_name):
			return self.first_name + " "+self.last_name
		else:
			return "No name"
	pass





class Insurer(models.Model):
	name=models.CharField(max_length=50,null=True,blank=True)
	short=models.CharField(max_length=15,null=True,blank=True)
	address1 = models.CharField(max_length=50,null=True,blank=True)
	address2 = models.CharField(max_length=50,null=True,blank=True)
	city = models.CharField(max_length=50,null=True,blank=True)
	state = models.CharField(max_length=50,null=True,blank=True)
	zipcode = models.CharField(max_length=50,null=True,blank=True)
	phone = models.CharField(max_length=50,null=True,blank=True)
	fax = models.CharField(max_length=50,null=True,blank=True)
	email = models.EmailField(max_length=50,null=True,blank=True)
	website = models.CharField(max_length=50,null=True,blank=True)
	logo = models.CharField(max_length=50,null=True,blank=True)
	def __str__(self):
		return self.name
	pass

class AuthorizedAgent(models.Model):
	agent=models.ForeignKey(Agency,on_delete=models.CASCADE,null=True,blank=True)

	def __str__(self):
		return self.agent.email
	pass

class AgencyAppointment(models.Model):
	agency=models.ForeignKey(Agency,on_delete=models.CASCADE,null=True,blank=True)
	insurer=models.ForeignKey(Insurer,on_delete=models.CASCADE,null=True,blank=True)
	producerCode=models.CharField(max_length=50,null=True,blank=True)
	webUsername=models.CharField(max_length=50,null=True,blank=True)
	webPassword=models.CharField(max_length=50,null=True,blank=True)
	webURL=models.CharField(max_length=50,null=True,blank=True)
	def __str__(self):
		return self.insurer.name
	pass
class PersonalAutoQuoteElements(models.Model):
	mainInsured = models.ForeignKey(NamedInsured,on_delete=models.CASCADE,null=True,
	blank=True,related_name="mainPAInsured")
	propertyDamageCoverage = models.IntegerField(blank=True,null=True,default=10000)
	biCoverage = models.IntegerField(blank=True,null=True)
	uninsuredMotorist = models.CharField(max_length=50,blank=True,null=True)
	pipCoverage = models.IntegerField(default=10000)
	pipDeductible = models.IntegerField(default=1000)
	rentalDeductible = models.IntegerField(blank=True,null=True)
	towingDeductible = models.IntegerField(blank=True,null=True)
	createdDate=models.DateField(auto_now_add=True,blank=True,null=True)
	additionalInsureds = models.ManyToManyField(NamedInsured,blank=True,
	related_name="additionalPAInsureds")
	homeOwner = models.BooleanField(default=False,blank=True,null=True)
	millitary=models.BooleanField(default=False,blank=True,null=True)

	@property
	def coveredAutos(self):
		return self.coveredauto_set.all()

	def __str__(self):
		#return minimum price
		if self.coveredauto_set.all().count()>0:
			auto = self.coveredauto_set.all()[0].make +" "+self.coveredauto_set.all()[0].model+" "+str(self.coveredauto_set.all()[0].year)
		
		return (
			str(self.createdDate) +" "+self.mainInsured.first_name+" "+self.mainInsured.last_name
			# auto
		)
	pass
class CoveredAuto(models.Model):
	driver=models.ForeignKey(NamedInsured,on_delete=models.CASCADE,null=True,blank=True,related_name='driver')
	secondaryDriver=models.ForeignKey(NamedInsured,on_delete=models.CASCADE,null=True,blank=True,related_name='secondaryDriver')
	vin = models.CharField(max_length=50,null=True,blank=True)
	year = models.IntegerField(null=True,blank=True)
	make = models.CharField(max_length=50,null=True,blank=True)
	model = models.CharField(max_length=50,null=True,blank=True)
	trim = models.CharField(max_length=50,null=True,blank=True)
	bodyStyle = models.CharField(max_length=50,null=True,blank=True)
	color = models.CharField(max_length=50,null=True,blank=True)
	licensePlate = models.CharField(max_length=50,null=True,blank=True)
	collisionDeductible = models.IntegerField(blank=True,null=True)
	comprehensiveDeductible = models.IntegerField(blank=True,null=True)
	rentalDeductible = models.CharField(max_length=50,blank=True,null=True)
	autoQuote=models.ForeignKey(PersonalAutoQuoteElements,on_delete=models.CASCADE,null=True,blank=True)

	def __str__(self):
		#self.make + " " + self.model+ " " + str(self.year)
		return "self.make + " " + self.model+ " " + str(self.year)"
	pass



class HomeQuoteElements(models.Model):
	mainInsured = models.ForeignKey(NamedInsured,on_delete=models.CASCADE,related_name="HOmainInsured",
	null=True,blank=True)
	additionalInsureds = models.ManyToManyField(NamedInsured,blank=True,
	related_name="HOadditionalInsureds")
	propertyAddress = models.ForeignKey(Address,on_delete=models.CASCADE,null=True,blank=True)
	millitary=models.BooleanField(default=False,blank=True,null=True)
	replacementCost = models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)
	purchasePrice = models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)
	propertyValue= models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)
	propertyType = models.CharField(max_length=50,null=True,blank=True)
	propertyRoof = models.CharField(max_length=50,null=True,blank=True)
	propertyRoofType = models.CharField(max_length=50,null=True,blank=True)
	propertyRoofMaterial = models.CharField(max_length=50,null=True,blank=True)
	propertyRoofColor = models.CharField(max_length=50,null=True,blank=True)
	dwellingCoverage=models.DecimalField(max_digits=10,decimal_places=2,blank=True,null=True)
	coverageB=models.DecimalField(max_digits=10,decimal_places=2,blank=True,null=True)
	personalPropertyCoverage=models.DecimalField(max_digits=10,decimal_places=2,blank=True,null=True)
	lossOfUseCoverage=models.DecimalField(max_digits=10,decimal_places=2,blank=True,null=True)
	numberOfDogs=models.IntegerField(blank=True,null=True)
	smokeDetector=models.BooleanField(default=False,blank=True,null=True)
	fireExtinguisher=models.BooleanField(default=False,blank=True,null=True)
	fireAlarm=models.BooleanField(default=False,blank=True,null=True)
	fireAlarmType=models.CharField(max_length=50,null=True,blank=True)
	deadboltLock=models.BooleanField(default=False,blank=True,null=True)
	sprinklerSystem=models.BooleanField(default=False,blank=True,null=True)
	numberOfFamilies=models.IntegerField(blank=True,null=True)
	numberOfTenants=models.IntegerField(blank=True,null=True)
	heatingType=models.CharField(max_length=50,null=True,blank=True)
	heatingSystemUpdated=models.BooleanField(default=False,blank=True,null=True)
	heatingSystemUpdateDate=models.DateField(blank=True,null=True)
	plumbingSystemUpdated=models.BooleanField(default=False,blank=True,null=True)
	plumbingSystemUpdateDate=models.DateField(blank=True,null=True)
	roofUpdated=models.BooleanField(default=False,blank=True,null=True)
	roofUpdateDate=models.DateField(blank=True,null=True)
	electricalWiringUpdated=models.BooleanField(default=False,blank=True,null=True)
	electricalWiringUpdateDate=models.DateField(blank=True,null=True)
	#coverageE=models.DecimalField(max_digits=10,decimal_places=2,blank=True,null=True)
	liabiltyLimit=models.DecimalField(max_digits=10,decimal_places=2,blank=True,null=True)
	sinkholeCoverage=models.BooleanField(default=False,blank=True,null=True)
	medicalPayments=models.IntegerField(default=2000,blank=True,null=True)
	hurricaineDeductible=models.CharField(max_length=50,blank=True,null=True)
	allPerilsDeuctible=models.IntegerField(blank=True,null=True)
	#Wind Mitigation
	WMInspectionDate=models.DateField(blank=True,null=True)
	terrainType=models.CharField(max_length=50,blank=True,null=True)
	roofShape=models.CharField(max_length=50,blank=True,null=True)
	roofCover=models.CharField(max_length=50,blank=True,null=True)
	roofDeckAttachment=models.CharField(max_length=50,blank=True,null=True)
	roofWallConnection=models.CharField(max_length=50,blank=True,null=True)
	secondaryWindResistance=models.CharField(max_length=50,blank=True,null=True)
	openingProtection=models.CharField(max_length=50,blank=True,null=True)
	fbcWindSpeed=models.CharField(max_length=50,blank=True,null=True)
	fbcWindSpeedDesign=models.CharField(max_length=50,blank=True,null=True)
	skyLight=models.BooleanField(default=False,blank=True,null=True)
	overhang=models.BooleanField(default=False,blank=True,null=True)
	buildingCodeGrade=models.CharField(max_length=50,blank=True,null=True)
	protectionClass=models.CharField(max_length=50,blank=True,null=True)
	
	def __str__(self):
		#return minimum price
		return 'No name'
	pass

class Company(models.Model):
	companyName = models.CharField(max_length=50,null=True,blank=True)
	companyOwner= models.ForeignKey(Customer,on_delete=models.CASCADE)
	companyAddress = models.ForeignKey(Address,on_delete=models.CASCADE,null=True,blank=True)
	companyFein=models.CharField(max_length=50,null=True,blank=True)
	companyType=models.CharField(max_length=50,null=True,blank=True)
	totalPayroll=models.IntegerField(blank=True,null=True)
	numberOfEmployees=models.IntegerField(blank=True,null=True)
	companyActivityDescription=models.CharField(max_length=50,null=True,blank=True)
	companyStartDate=models.DateField(blank=True,null=True)
	yearsOfExperience=models.IntegerField(blank=True,null=True)
	companyPhone = models.CharField(max_length=50,null=True,blank=True)
	companyFax = models.CharField(max_length=50,null=True,blank=True)
	companyEmail = models.CharField(max_length=50,null=True,blank=True)
	companyWebsite = models.CharField(max_length=50,null=True,blank=True)
	def __str__(self):
		return self.companyName

class CommercialAutoQuoteElements(models.Model):
	ownedBy = models.CharField(max_length=50,null=True,blank=True)
	mainInsured = models.ForeignKey(Company,on_delete=models.CASCADE,
	related_name="mainCAInsured",null=True,blank=True)

	propertyDamageCoverage = models.IntegerField(blank=True,null=True,default=10000)
	biCoverage = models.IntegerField(blank=True,null=True)
	uninsuredMotorist = models.CharField(max_length=50,blank=True,null=True)
	pipDeductible = models.IntegerField(default=10000)
	pipDeductible = models.IntegerField(default=1000)
	rentalDeductible = models.IntegerField(blank=True,null=True)
	towingDeductible = models.IntegerField(blank=True,null=True)
	homeOwner = models.BooleanField(default=False,blank=True,null=True)
	millitary=models.BooleanField(default=False,blank=True,null=True)

	@property
	def coveredAutos(self):
		return self.coveredauto_set.all()

	def __str__(self):
		#return minimum price
		return 'No name'
	pass
	
class LifeQuoteElements(models.Model):
	mainInsured = models.ForeignKey(NamedInsured,on_delete=models.CASCADE,null=True,blank=True)
	additionalInsureds = models.ManyToManyField(NamedInsured,blank=True,related_name="additionalLifeInsureds")
	planType = models.CharField(max_length=50,blank=True,null=True)
	income = models.IntegerField(blank=True,null=True)
	pass

class HealthQuoteElements(models.Model):
	mainInsured = models.ForeignKey(NamedInsured,on_delete=models.CASCADE,null=True,blank=True)
	additionalInsureds = models.ManyToManyField(NamedInsured,blank=True,related_name="additionalHealthInsureds")
	planType = models.CharField(max_length=50,blank=True,null=True)
	income = models.IntegerField(blank=True,null=True)
	pass

class BusinessQuoteElements(models.Model):
	mainInsured = models.ForeignKey(Company,on_delete=models.CASCADE,null=True,blank=True)
	planType = models.CharField(max_length=50,blank=True,null=True)
	liabiltyLimit = models.IntegerField(blank=True,null=True)
	pass
	

class Quote(models.Model):
	owner = models.ForeignKey(Customer,on_delete=models.CASCADE,null=True,blank=True)
	businessType= models.CharField(choices=BUSINESS_TYPES,
	max_length=50,null=True,blank=True)
	quoteId = models.CharField(max_length=50,default=uuid.uuid4)
	status = models.CharField(max_length=50)
	quote_date = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	pendingReview = models.BooleanField(default=True)
	personalAutoQuoteElements = models.OneToOneField(PersonalAutoQuoteElements,
	blank=True,null=True,on_delete=models.CASCADE)
	commercialAutoQuoteElements = models.OneToOneField(CommercialAutoQuoteElements,
	blank=True,null=True,on_delete=models.CASCADE)
	lifeQuoteElements = models.OneToOneField(LifeQuoteElements,
	blank=True,null=True,on_delete=models.CASCADE)
	healthQuoteElements = models.OneToOneField(HealthQuoteElements,
	blank=True,null=True,on_delete=models.CASCADE)
	businessQuoteElements = models.OneToOneField(BusinessQuoteElements,
	blank=True,null=True,on_delete=models.CASCADE)
	@property
	def lines(self):
		return self.quoteline_set.all()
	def __str__(self):
		#return minimum price
		return self.businessType+" "+self.quoteId	
	pass
class PriorInsurance(models.Model):
	customer = models.ForeignKey(Customer,on_delete=models.CASCADE,null=True,blank=True)
	insurer = models.ForeignKey(Insurer,on_delete=models.CASCADE,null=True,blank=True)
	quote=models.ForeignKey(Quote,on_delete=models.CASCADE,null=True,blank=True)
	policyNumber = models.CharField(max_length=50,null=True,blank=True)
	effectiveDate = models.DateField(null=True,blank=True)
	expirationDate = models.DateField(null=True,blank=True)
	priorDocument= models.OneToOneField(File,on_delete=models.CASCADE,null=True,blank=True)

	def __str__(self):
		return self.insurer.name
	pass

class Card(models.Model):
	owner=models.ForeignKey(Customer,on_delete=models.CASCADE,null=True,blank=True)
	cardNumber = models.CharField(max_length=16)
	cardType = models.CharField(max_length=50)
	expirationDate = models.CharField(max_length=50)
	cardHolderName = models.CharField(max_length=50)
	cardSecurityCode = models.CharField(max_length=50)

	def __str__(self):
		return self.cardNumber
	pass

class BankAccount(models.Model):
	owner=models.ForeignKey(Customer,on_delete=models.CASCADE,null=True,blank=True)
	bankName = models.CharField(max_length=50)
	routingNumber = models.CharField(max_length=50)
	accountNumber = models.CharField(max_length=50)
	accountType = models.CharField(max_length=50)
	accountHolderName = models.CharField(max_length=50)
	pass
	def __str__(self):
		return self.accountNumber
	pass

class PayPal(models.Model):
	owner=models.ForeignKey(Customer,on_delete=models.CASCADE,null=True,blank=True)
	email = models.CharField(max_length=50)
	pass
	def __str__(self):
		return self.email
	pass

class Crypto(models.Model):
	owner=models.ForeignKey(Customer,on_delete=models.CASCADE,null=True,blank=True)
	cryptoAddress = models.CharField(max_length=50)
	cryptoType = models.CharField(max_length=50)
	pass
	def __str__(self):
		return self.cryptoAddress
	pass

class PaymentMethod(models.Model):
	owner=models.ForeignKey(Customer,on_delete=models.CASCADE,null=True,blank=True)
	paymentMethod = models.CharField(max_length=50)
	card=models.OneToOneField(Card,on_delete=models.CASCADE,null=True,blank=True)
	bankAccount=models.OneToOneField(BankAccount,on_delete=models.CASCADE,null=True,blank=True)
	paypal=models.OneToOneField(PayPal,on_delete=models.CASCADE,null=True,blank=True)
	crypto=models.OneToOneField(Crypto,on_delete=models.CASCADE,null=True,blank=True)
	pass
	def __str__(self):
		return self.paymentMethod
	pass

class Payment(models.Model):
	downPayment= models.BooleanField(default=False)
	# endorsement=models.ForeignKey(Endorsement,on_delete=models.CASCADE,null=True,blank=True)
	# policy=models.ForeignKey(Policy,on_delete=models.CASCADE,null=True,blank=True)
	amount=models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)
	billDate=models.DateField()
	dueDate=models.DateField()
	paid=models.BooleanField(default=False)
	date=models.DateField(null=True,blank=True)
	method=models.OneToOneField(PaymentMethod,on_delete=models.CASCADE,null=True,blank=True)
	type=models.CharField(max_length=50,null=True,blank=True)
	status=models.CharField(max_length=50,null=True,blank=True)
	amount=models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)
	ref=models.CharField(max_length=50,null=True,blank=True)
	ref2=models.CharField(max_length=50,null=True,blank=True)

	def __str__(self):
		return self.ref
	pass

# def get_expiration():
#     return dt.today() + timedelta(days=365)
def get_expiration(len):
    return dt.today() + mdt.monthdelta(len)
class Policy(models.Model):
	agency=models.ForeignKey(Agency,on_delete=models.CASCADE,null=True,blank=True)
	commisionAmount=models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)
	commisionPercentage=models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)
	commisionPaid=models.BooleanField(default=False)
	quote=models.ForeignKey(Quote,on_delete=models.CASCADE,null=True,blank=True)
	bindDate = models.DateField(null=True,blank=True)
	effectiveDate=models.DateField(null=True,blank=True)
	expirationDate=models.DateField(null=True,blank=True)
	policyLength=models.IntegerField(null=True,blank=True)
	policyNumber = models.CharField(max_length=50,null=True,blank=True)
	policyType = models.CharField(max_length=50,null=True,blank=True)
	policyStatus = models.CharField(max_length=50,null=True,blank=True)
	policyHolder = models.ForeignKey(Customer,on_delete=models.CASCADE,null=True,blank=True,
	related_name='policyHolder')
	policyPremium=models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)
	downPayment = models.OneToOneField(Payment,on_delete=models.CASCADE,null=True,blank=True,
	related_name='policyDownPayment')
	policyDocuments=models.ManyToManyField(File,blank=True,related_name='policyDocuments')
	policyFiles=models.ManyToManyField(File,blank=True,related_name='policyFiles')
	policyPayments=models.ManyToManyField(Payment,blank=True,related_name='policyPayments')

	def save(self, *args, **kwargs):
		self.expirationDate = get_expiration(self.policyLength)
		super(Policy, self).save(*args, **kwargs)
		
	def __str__(self):
		return self.policyNumber
	pass
class Endorsement(models.Model):
	quote=models.ForeignKey(Quote,on_delete=models.CASCADE,null=True,blank=True)
	policy=models.ForeignKey(Policy,on_delete=models.CASCADE,null=True,blank=True)
	endorsementDate=models.DateField()
	endorsementType=models.CharField(max_length=50)
	endorsementStatus=models.CharField(max_length=50)
	endorsementPayment=models.OneToOneField(Payment,on_delete=models.CASCADE,null=True,blank=True,
	related_name='endorsementDownPayment')
	endorsementDocuments=models.ManyToManyField(File,blank=True,related_name="endorsementDocuments")
	endorsementFiles=models.ManyToManyField(File,blank=True,related_name='endorsementFiles')
	endorsementPayments=models.ManyToManyField(Payment,blank=True,related_name='endorsementPayments')
	
	def __str__(self):
		return self.endorsementType
	pass






class QuoteLine(models.Model):
	insurer = models.ForeignKey(Insurer,on_delete=models.CASCADE,null=True,blank=True)
	totalPremium = models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)
	downPayment = models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)
	monthlyPayment = models.DecimalField(max_digits=10,decimal_places=2,null=True,blank=True)
	quote=models.ForeignKey(Quote,on_delete=models.CASCADE,null=True,blank=True)
	def __str__(self):
		return self.insurer.name + " "+str(self.totalPremium)
	pass



# Create a prospect model from the previous fields
class Prospect(models.Model):
    owner=models.ForeignKey(Customer,
                            on_delete=models.CASCADE,null=True,blank=True)
    status = models.CharField(max_length=50,blank=True,null=True)
    
    first_name = models.CharField(max_length=50,blank=True,null=True)
    last_name = models.CharField(max_length=50,blank=True,null=True)
    email = models.EmailField(blank=True,null=True)
    phone=models.CharField(max_length=50,blank=True,null=True)
    gender=models.CharField(max_length=50,blank=True,null=True)
    address=models.CharField(max_length=50,blank=True,null=True)
    
    mailing_address=models.CharField(max_length=50,blank=True,null=True)
    mailing_address2=models.CharField(max_length=50,blank=True,null=True)
    mailing_city=models.CharField(max_length=50,blank=True,null=True)
    mailing_state=models.CharField(max_length=50,blank=True,null=True)
    mailing_zipcode=models.CharField(max_length=50,blank=True,null=True)
    mailing_county=models.CharField(max_length=50,blank=True,null=True)
    
    city=models.CharField(max_length=50,blank=True,null=True)
    state=models.CharField(max_length=50,blank=True,null=True)
    zipcode=models.CharField(max_length=50,blank=True,null=True)
    county=models.CharField(max_length=50,blank=True,null=True)
    address2=models.CharField(max_length=50,blank=True,null=True)
    
    lapses=models.BooleanField(default=False,blank=True,null=True)
    prior=models.BooleanField(default=False,blank=True,null=True)
    new=models.BooleanField(default=False,blank=True,null=True)
    married=models.BooleanField(default=False,blank=True,null=True)
    
    roofShape=models.CharField(max_length=50,blank=True,null=True)
    wallMaterial = models.CharField(max_length=50,blank=True,null=True)
    wallType=models.CharField(max_length=50,blank=True,null=True)
    usage=models.CharField(max_length=50,blank=True,null=True)
    risk = models.CharField(max_length=50,blank=True,null=True)
    centralHeat=models.BooleanField(default=False,blank=True,null=True)
    additionalOwner=models.BooleanField(default=False,blank=True,null=True)
    mortgage=models.BooleanField(default=False,blank=True,null=True)
    inspections=models.BooleanField(default=False,blank=True,null=True)
    primary=models.BooleanField(default=False,blank=True,null=True)
    claims=models.BooleanField(default=False,blank=True,null=True)
    damage=models.BooleanField(default=False,blank=True,null=True)
    beds=models.IntegerField(blank=True,null=True)
    
    policyType=models.CharField(max_length=50,blank=True,null=True)
    
    #HO
    baths=models.DecimalField(max_digits=10,decimal_places=2,blank=True,null=True)
    middle_name=models.CharField(max_length=50,blank=True,null=True)
    dob=models.DateField(blank=True,null=True)
    
    floor=models.CharField(max_length=50,blank=True,null=True)
    plumbingType=models.CharField(max_length=50,blank=True,null=True)
    foundationShape=models.CharField(max_length=50,blank=True,null=True)
    wallFrame=models.CharField(max_length=50,blank=True,null=True)
    wallMasonry=models.CharField(max_length=50,blank=True,null=True)
    wallConstruction=models.CharField(max_length=50,blank=True,null=True)
    area=models.CharField(max_length=50,blank=True,null=True)
    roofYear=models.CharField(max_length=50,blank=True,null=True)
    roofType=models.CharField(max_length=50,blank=True,null=True)
    roofMaterial=models.CharField(max_length=50,blank=True,null=True)
    roofCover=models.CharField(max_length=50,blank=True,null=True)
    roofWall=models.CharField(max_length=50,blank=True,null=True)
    roofDeck=models.CharField(max_length=50,blank=True,null=True)
    waterheater=models.CharField(max_length=50,blank=True,null=True)
    foundation = models.CharField(max_length=50,blank=True,null=True)
    foundationMaterial = models.CharField(max_length=50,blank=True,null=True)
    foundationType = models.CharField(max_length=50,blank=True,null=True)
    wall = models.CharField(max_length=50,blank=True,null=True)
    pool=models.CharField(max_length=50,blank=True,null=True)
    year=models.CharField(max_length=50,blank=True,null=True)
    stories=models.CharField(max_length=50,blank=True,null=True)
    families=models.CharField(max_length=50,blank=True,null=True)
    effective=models.DateField(blank=True,null=True)
    cofirst_name=models.CharField(max_length=50,blank=True,null=True)
    colast_name=models.CharField(max_length=50,blank=True,null=True)
    codob=models.DateField(blank=True,null=True)
    mortgagee=models.CharField(max_length=200,blank=True,null=True)
    loan=models.CharField(max_length=50,blank=True,null=True)
    carrier=models.CharField(max_length=50,blank=True,null=True)
    policy=models.CharField(max_length=50,blank=True,null=True)
    priorexp=models.DateField(blank=True,null=True)
    comments=models.CharField(max_length=50,blank=True,null=True)
    occupancy=models.CharField(max_length=50,blank=True,null=True)
    fireAlarm=models.BooleanField(default=False)
    burglarAlarm=models.BooleanField(default=False)
    gatedCommunity=models.BooleanField(default=False)
    centralAir=models.BooleanField(default=False)
    #inspections
    
    swr=models.CharField(max_length=50,blank=True,null=True)
    structureType=models.CharField(max_length=50,blank=True,null=True)
    
    coverageB=models.CharField(max_length=50,blank=True,null=True)
    coverageC=models.CharField(max_length=50,blank=True,null=True)

    coverageD=models.CharField(max_length=50,blank=True,null=True)

    coverageE=models.CharField(max_length=50,blank=True,null=True)

    coverageF=models.CharField(max_length=50,blank=True,null=True)
    medical = models.CharField(max_length=50,blank=True,null=True)
    aop=models.CharField(max_length=50,blank=True,null=True)
    hurricane=models.CharField(max_length=50,blank=True,null=True)
    roofCovering=models.CharField(max_length=50,blank=True,null=True)
    inspectionDate=models.DateField(blank=True,null=True)
    inspectorPhone = models.CharField(max_length=50,blank=True,null=True)
    inspectionCompany = models.CharField(max_length=50,blank=True,null=True)
    inspectorName = models.CharField(max_length=50,blank=True,null=True)
    roofWall= models.CharField(max_length=50,blank=True,null=True)
    
    purchaseDate=models.DateField(blank=True,null=True)
    purchasePrice=models.DecimalField(max_digits=10,decimal_places=2,blank=True,null=True)
    lossAssessment=models.CharField(max_length=50,blank=True,null=True)
    comments=models.TextField(blank=True,null=True)
    def __str__(self):
        return self.first_name + " " + self.last_name
    pass
 



#Calculate the factorial of a number given by the user

