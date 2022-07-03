# Insurance urls.py

# Imports
from re import T
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.routers import SimpleRouter
from rest_framework import serializers
from Insurance.models import *
from .models import *
from rest_framework import viewsets,status

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
    value = serializers.CharField(max_length=5, required=False)
    county = CountySerializer(read_only=True)
    class Meta:
        model = Zipcode
        fields = '__all__'

class AddressSerializer(serializers.ModelSerializer):
    id=serializers.IntegerField(read_only=True)
    address1=serializers.CharField(max_length=50,required=True)
    address2=serializers.CharField(max_length=50,required=False)
    zipcode=ZipcodeSerializer(read_only=True)

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

mapRouter = SimpleRouter()
mapRouter.register(r'address', AddressViewSet, basename='address')
mapRouter.register(r'zipcode', zipcodeViewSet, basename='address')
mapRouter.register(r'city', cityViewSet, basename='city')
mapRouter.register(r'state', stateViewSet, basename='state')
mapRouter.register(r'county', countyViewSet, basename='county')

# urlpatterns = [
#     path('custom-auth/', views2.custom_auth),
#     path('token-auth/', obtain_jwt_token),
#     path('current_user/', views2.get_current_user),
#     path('runQuote/', views2.run_quote),
#     path('getModels/', views2.get_models),
#     path('newQuote/', views2.new_quote),
#     path('getCounty/', views2.get_county),
#     # path('getModels/', views2.getModels, name='index'),
# ]

