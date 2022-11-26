# Insurance urls.py

# Imports
from re import T
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.routers import SimpleRouter

from Insurance.models import *
from .models import *

from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
import requests


@api_view(['POST'])
def new_property(request):
    customer = request.user.id
    addressData = request.data['newProperty']
    address = Address.objects.create(**addressData)
    return Response(AddressSerializer(customer,many=False).data)
from django.core.exceptions import ObjectDoesNotExist
import time

@api_view(['POST'])
@permission_classes([])
def get_or_create_address(request):
    addressData = request.data
    try:
        address = Address.objects.get(**addressData)
    except ObjectDoesNotExist:
        address = Address.objects.create(**addressData)
    return Response(AddressSerializer(address,many=False).data)

@api_view(['POST'])
@permission_classes([])
def get_county(request):
    countyName = request.data['county']
    try:
        county = County.objects.get(name=countyName)
    except County.DoesNotExist as e:
        headers={'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Connection':'keep-alive',
            'Accept-Encoding':'gzip, deflate, br'
            }
        #Start timer
        req = requests.post('https://u2f8ql6avi.execute-api.us-east-1.amazonaws.com/',json={'county':countyName},headers=headers)
        # print current time - start time
        json_data = req.json()
        
        county = County.objects.create(name=countyName,
        propertySearchUrl=json_data['link'],url=json_data['link'])
        county.save()
    if county.propertySearchUrl is None:
        headers={'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Connection':'keep-alive',
            'Accept-Encoding':'gzip, deflate, br'
            }
        #Start timer
        req = requests.post('https://u2f8ql6avi.execute-api.us-east-1.amazonaws.com/',json={'county':countyName},headers=headers)
        # print current time - start time
        json_data = req.json()
        
        county.propertySearchUrl=json_data['link']
        county.url=json_data['link']
        county.save()
    print(county.name,county.qualityGrade)
    return Response(CountySerializer(county,many=False).data)

mapRouter = SimpleRouter()
mapRouter.register(r'address', AddressViewSet, basename='address')
mapRouter.register(r'zipcode', zipcodeViewSet, basename='address')
mapRouter.register(r'city', cityViewSet, basename='city')
mapRouter.register(r'state', stateViewSet, basename='state')
mapRouter.register(r'county', countyViewSet, basename='county')

urlpatterns = [
    path('newProperty/', new_property),
    path('getCounty/', get_county),
    path('getOrCreateAddress/', get_or_create_address),
    # path('getModels/', views2.getModels, name='index'),
]

