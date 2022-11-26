from django.db import models
import requests
import bs4
from rest_framework import viewsets,status
from rest_framework import serializers
class Country(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True,unique=True)
    short=models.CharField(max_length=2,blank=True,null=True,unique=True)
    def __str__(self):
        if(self.name):
            return self.name
        else:
            return "No Name"
class State(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True,unique=True)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, blank=True, null=True)
    short=models.CharField(max_length=2,blank=True,null=True)
    def __str__(self):
        if(self.name):
            return self.name
        else:
            return "No Name"

class County(models.Model):
    name = models.CharField(max_length=50,unique=True)
    state = models.ForeignKey(State, on_delete=models.CASCADE, default=1,
    blank=True, null=True)
    description = models.CharField(max_length=400, blank=True, null=True)
    url= models.CharField(max_length=100, blank=True, null=True)
    propertySearchUrl = models.CharField(max_length=100, blank=True, null=True)
    searchFunction=models.CharField(max_length=10000, blank=True, null=True)
    yearBuilt=models.CharField(max_length=100, blank=True, null=True)
    qualityGrade=models.CharField(max_length=100, blank=True, null=True)
    squareFootage=models.CharField(max_length=100, blank=True, null=True)
    land=models.CharField(max_length=100, blank=True, null=True)
    landValue=models.CharField(max_length=100, blank=True, null=True)
    buildingValue=models.CharField(max_length=100, blank=True, null=True)
    totalBuildingArea=models.CharField(max_length=100, blank=True, null=True)
    foundation=models.CharField(max_length=100, blank=True, null=True)
    use=models.CharField(max_length=100, blank=True, null=True)
    heatSource=models.CharField(max_length=100, blank=True, null=True)
    heatMethod=models.CharField(max_length=100, blank=True, null=True)
    stories=models.CharField(max_length=100, blank=True, null=True)
    baths=models.CharField(max_length=100, blank=True, null=True)
    bedrooms=models.CharField(max_length=100, blank=True, null=True)
    parcelId=models.CharField(max_length=100, blank=True, null=True)
    address=models.CharField(max_length=100, blank=True, null=True)
    owner = models.CharField(max_length=100, blank=True, null=True)
    mailingAddress = models.CharField(max_length=100, blank=True, null=True)
    patios=models.CharField(max_length=100, blank=True, null=True)
    porches=models.CharField(max_length=100, blank=True, null=True)
    garage=models.CharField(max_length=100, blank=True, null=True)
    floorType=models.CharField(max_length=100, blank=True, null=True)
    roofType=models.CharField(max_length=100, blank=True, null=True)
    roofShape=models.CharField(max_length=100, blank=True, null=True)
    roofCover=models.CharField(max_length=100, blank=True, null=True)
    wallHeight=models.CharField(max_length=100, blank=True, null=True)
    extWall=models.CharField(max_length=100, blank=True, null=True)
    intWall=models.CharField(max_length=100, blank=True, null=True)
    pool=models.CharField(max_length=100, blank=True, null=True)
    purchasePrice=models.CharField(max_length=100,blank=True, null=True)
    purchaseDate=models.CharField(max_length=100, blank=True, null=True)
    #add steps
    def __str__(self):
        if(self.name):
            return self.name
        else:
            return "No Name"
class City(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    county=models.ForeignKey(County,on_delete=models.CASCADE,blank=True,null=True)
    def __str__(self):
        if(self.name):
            return self.name
        else:
            return "No Name"
class Zipcode(models.Model):
    value = models.IntegerField(blank=True, null=True)
    county = models.ForeignKey(County, on_delete=models.CASCADE, blank=True, null=True)
    def __str__(self):
        if(str(self.value)):
            return str(self.value)
        else:
            return "No Name"
# Create your models here.
class Address(models.Model):
    address = models.CharField(max_length=50,blank=True,null=True)
    unit = models.CharField(max_length=50,default='',blank=True,null=True)
    zipcode = models.IntegerField(blank=True,null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    state = models.CharField(max_length=20, blank=True, null=True)
    county = models.CharField(max_length=50, blank=True, null=True)
    countyObj = models.ForeignKey(County,related_name='county', on_delete=models.CASCADE, blank=True, null=True)
    cityObj = models.ForeignKey(City, on_delete=models.CASCADE, blank=True, null=True)
    stateObj = models.ForeignKey(State, on_delete=models.CASCADE, blank=True, null=True)
    zipcodeObj = models.ForeignKey(Zipcode, on_delete=models.CASCADE, blank=True, null=True)

    def __str__(self):
        if(self.address):
            return self.address
        else:
            return "No Address"
    def save(self, *args, **kwargs):
        if not self.pk:
           
            if(self.zipcode):
                zipcode = Zipcode.objects.get_or_create(value=self.zipcode)
            if(self.county):
                county = County.objects.get_or_create(name=self.county.upper())
                kwargs['countyObj'] = county[0]
            else:
                if(self.zipcode):
                    getCountyName = requests.get('http://uscounties.com/zipcodes/search.pl?query='+str(self.zipcode)+'&stpos=0&stype=AND')
                    html = getCountyName.text
                    soup = bs4.BeautifulSoup(html,features="html5lib")
                    county = soup.select_one('body > table:nth-child(2) > tbody > tr > td:nth-child(2) > p > table > tbody > tr.results > td:nth-child(3)').text.upper()
                    city = soup.select_one('body > table:nth-child(2) > tbody > tr > td:nth-child(2) > p > table > tbody > tr.results > td:nth-child(2)').text.upper()
                    state= soup.select_one('body > table:nth-child(2) > tbody > tr > td:nth-child(2) > p > table > tbody > tr.results > td:nth-child(4)').text.upper()
                    print("County: "+str(len(county.upper()[:-1])),county[:-1])
                    county = County.objects.get_or_create(name=county.upper()[:-1])
                    city = City.objects.get_or_create(name=city.upper())
                    state = State.objects.get_or_create(name=state.upper())
                    

            
            pass
        
        self.zipcodeObj = zipcode[0]
        self.countyObj = county[0]
        self.cityObj = city[0]
        self.stateObj = state[0]
        myAddress = super(Address, self)
        myAddress.save(*args, **kwargs)

class CountrySerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    
    class Meta:
        model = Country
        fields = '__all__'

class StateSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    country = CountrySerializer(read_only=True)
    
    class Meta:
        model = State
        fields = '__all__'

class CitySerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    state = StateSerializer(read_only=True)
    
    class Meta:
        model = City
        fields = '__all__'
class CountySerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    city = CitySerializer(read_only=True)
    
    class Meta:
        model = County
        fields = '__all__'

class ZipcodeSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    county = CountySerializer(read_only=True)
    class Meta:
        model = Zipcode
        fields = '__all__'

class AddressSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    zipcodeObj=ZipcodeSerializer(required=True,many=False)
    countyObj=CountySerializer(required=True,many=False)
    cityObj=CitySerializer(required=True,many=False)
    stateObj=StateSerializer(required=True,many=False)
    class Meta:
        model = Address
        fields = '__all__'

class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
    pass

class zipcodeViewSet(viewsets.ModelViewSet):
    queryset = Zipcode.objects.all()
    serializer_class = ZipcodeSerializer
    pass

class cityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer
    pass

class stateViewSet(viewsets.ModelViewSet):
    queryset = State.objects.all()
    serializer_class = StateSerializer
    pass

class countyViewSet(viewsets.ModelViewSet):
    queryset = County.objects.all()
    serializer_class = CountySerializer
    pass
