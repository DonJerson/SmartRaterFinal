from rest_framework import serializers
from django_filters import rest_framework as filters
from .models import *
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from rest_framework import viewsets,status
from rest_framework.response import Response
from Cars.models import *
from Files.models import *
from Maps.models import *
from Chats.models import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.decorators import api_view,permission_classes
from rest_framework import permissions
import time
from datetime import timedelta, date
import datetime
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils import six
from django.template.loader import render_to_string
from django.contrib.sites.shortcuts import get_current_site
from django.utils.html import strip_tags
from rest_framework_jwt.settings import api_settings

class BrandSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True)
    class Meta:
        model=Brand
        fields='__all__'
    pass

class FileSeriealizer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True)
    class Meta:
        model=File
        fields='__all__'
    pass


class ModelSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True)
    brand = BrandSerializer(required=True,many=False)
    class Meta:
        model=Model
        fields='__all__'
    pass



class PickTrimSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True)
    class Meta:
        model=PickTrimEntry
        fields='__all__'
    pass
class BodyStylesSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True)
    class Meta:
        model=BodyStyleEntry
        fields='__all__'
    pass 
class YearEntrySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True)
    model=ModelSerializer(required=True,many=False)
    bodyStyles = BodyStylesSerializer(many=True,
    read_only=True)
    pickTrims = PickTrimSerializer(many=True,
    read_only=True)
    class Meta:
        model=YearEntry
        fields='__all__'
    pass
    
class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model=Car
        fields="__all__"
    pass



class ExistingCustomerSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=True)
    class Meta:
        model=Customer
        fields=('username',"password")

    def create(self, validated_data):
        username = validated_data['username']
        password = validated_data['password']
        user = Customer.objects.create_user(username=username,password=password,email=username,business=True)
        user.active=True
        user.save()
        print("really just created one")
        return user

class ProfilePictureSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True)
    class Meta:
        model=Picture
        fields=(
            "key",
            "url",
            "id")
    pass

class OwnerSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True)
    profilePicture = ProfilePictureSerializer(read_only=True,many=False)

    class Meta:
        model=Customer
        fields=('id','first_name','last_name','date_joined','profilePicture',)
    pass
class NamedInsuredSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True)
    customer = OwnerSerializer(read_only=True,many=False)

    class Meta:
        model=NamedInsured
        fields="__all__"
    pass





class SupportMessageSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    class Meta:
        model=SupportMessage
        fields='__all__'
    pass
class SupportChatSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    messages = SupportMessageSerializer(read_only=True,many=True)
    customer=OwnerSerializer(read_only=True,many=False)
    class Meta:
        model=SupportChat
        fields='__all__'
    pass
class InsurerSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    class Meta:
        model=Insurer
        fields='__all__'
class CardSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    class Meta:
        model=Card
        fields='__all__'
class PayPalSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    class Meta:
        model=PayPal
        fields='__all__'
class CryptoSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    class Meta:
        model=Crypto
        fields='__all__'

class BankAccountSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    class Meta:
        model=BankAccount
        fields='__all__'

class QuoteLineSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    insurer = InsurerSerializer(read_only=True,many=False)

    class Meta:
        model=QuoteLine
        fields='__all__'

class AgencySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    class Meta:
        model=Agency
        fields='__all__'

class CoveredAutoSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    driver = NamedInsuredSerializer(read_only=False,many=False,allow_null=True)
    secondaryDriver = NamedInsuredSerializer(read_only=False,many=False,allow_null=True)
    class Meta:
        model=CoveredAuto
        fields='__all__'
    pass


class PersonalAutoQuoteElementsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    coveredAutos=CoveredAutoSerializer(read_only=False,many=True)
    mainInsured=NamedInsuredSerializer(read_only=True,many=False,allow_null=True)
    class Meta:
        model=PersonalAutoQuoteElements
        fields='__all__'
    pass

class HomeQuoteElementsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    mainInsured=NamedInsuredSerializer(read_only=True,many=False)
    additionalInsureds=NamedInsuredSerializer(read_only=True,many=True)
    propertyAddress=AddressSerializer(read_only=True,many=False)
    class Meta:
        model=HomeQuoteElements
        fields='__all__'
    pass

class CompanySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    companyOwner = OwnerSerializer(read_only=True,many=False)
    companyAddress = AddressSerializer(read_only=True,many=False)

    class Meta:
        model=Company
        fields='__all__'
    pass

class CommercialAutoQuoteElementsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    mainInsured=CompanySerializer(read_only=True,many=False)
    class Meta:
        model=CommercialAutoQuoteElements
        fields='__all__'
    pass



class LifeQuoteElementsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    mainInsured=NamedInsuredSerializer(read_only=True,many=False)
    additionalInsureds=NamedInsuredSerializer(read_only=True,many=True)
    class Meta:
        model=LifeQuoteElements
        fields='__all__'
    pass

class HealthQuoteElementsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    mainInsured=NamedInsuredSerializer(read_only=True,many=False)
    additionalInsureds=NamedInsuredSerializer(read_only=True,many=True)
    class Meta:
        model=HealthQuoteElements
        fields='__all__'
    pass

class BusinessQuoteElementsSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    mainInsured=CompanySerializer(read_only=True,many=False)
    class Meta:
        model=BusinessQuoteElements
        fields='__all__'
    pass

class CustomersSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    namedInsureds=NamedInsuredSerializer(read_only=True,many=True)
    class Meta:
        model=Customer
        fields='__all__'
    pass

def updateList(list,type):
    for item in list:
        driver = None
        secondaryDriver = None
        itemId = item['id']
        if type=='NamedInsured':
            
            myElement = NamedInsured.objects.filter(id=itemId).update(**item)
        elif type=='CoveredAuto':
            try:
                driverId = item.pop('driver')['id']
                # print("driver"+str(driverId))
                driver = NamedInsured.objects.get(id=driverId)
                
            except Exception as e:
                print("error driver"+str(e))
                pass
            try:
                secondaryDriverId = item.pop('secondaryDriver')['id']
                secondaryDriver = NamedInsured.objects.get(id=secondaryDriverId)
            
            except Exception as e:
                print("error secondaryDriver"+str(e))
                pass 
            myElement = CoveredAuto.objects.get(id=itemId)
            if driver:
                myElement.driver = driver
                print("driver"+str(driver))
            if secondaryDriver:
                myElement.secondaryDriver=secondaryDriver
            myElement.save()
            print("final",itemId)
            CoveredAuto.objects.filter(id=itemId).update(**item)


    pass

class QuoteSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(allow_null=True)
    lines = QuoteLineSerializer(many=True,read_only=True)
    agency = AgencySerializer(many=False,read_only=True)
    owner = CustomersSerializer(many=False,read_only=True)
    personalAutoQuoteElements = PersonalAutoQuoteElementsSerializer(many=False,read_only=False)
    homeQuoteElements = HomeQuoteElementsSerializer(many=False,read_only=False)

    def update(self, instance, validated_data):
        quoteId = validated_data.pop('id')
       
        personalAutoQuoteElements=validated_data.pop('personalAutoQuoteElements')
        personalAutoQuoteElementsId=personalAutoQuoteElements.pop('id')
        personalAutoQuoteElementsObj=PersonalAutoQuoteElements.objects.get(id=personalAutoQuoteElementsId)
        print(personalAutoQuoteElements)
        print("veamos")
        coveredAutos=personalAutoQuoteElements.pop('coveredAutos')
        # namedInsureds=personalAutoQuoteElements.namedInsureds
        # updateList(namedInsureds,'NamedInsured')
        updateList(coveredAutos,'CoveredAuto')
        personalAutoQuoteElementsObj=PersonalAutoQuoteElements.objects.filter(id=personalAutoQuoteElementsId)
        personalAutoQuoteElementsObj.update(**personalAutoQuoteElements)
        # instance.update(**validated_data)
        # instance.save()
        Quote.objects.filter(id=quoteId).update(**validated_data)
        return instance
    class Meta:
        model=Quote
        fields='__all__'

class AuthorizedAgentSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    class Meta:
        model=AuthorizedAgent
        fields='__all__'

class AgencyReferenceSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    class Meta:
        model=Agency
        fields='__all__'

class QuoteReferenceSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    class Meta:
        model=Quote
        fields='__all__'

class PaymentMethodSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    card = CardSerializer(read_only=True,many=False)
    paypal = PayPalSerializer(read_only=True,many=False)
    crypto = CryptoSerializer(read_only=True,many=False)
    bankAccount = BankAccountSerializer(read_only=True,many=False)
    owner=OwnerSerializer(read_only=True,many=False)
    class Meta:
        model=PaymentMethod
        fields='__all__'

class PaymentSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    paymentMethod = PaymentMethodSerializer(read_only=True,many=False)
    class Meta:
        model=Payment
        fields='__all__'

class PolicySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    policyHolder=OwnerSerializer(read_only=True,many=False)
    agency=AgencyReferenceSerializer(read_only=True,many=False)
    quote=QuoteReferenceSerializer(read_only=True,many=False)
    downPayment=PaymentSerializer(read_only=True,many=False)
    policyDocuments=FileSeriealizer(read_only=True,many=True)
    policyUWFiles=FileSeriealizer(read_only=True,many=True)
    policyPayments=PaymentSerializer(read_only=True,many=True)
    class Meta:
        model=Policy
        fields='__all__'
    def create(self, validated_data):
        return Policy(**validated_data)

    def update(self, instance, validated_data):
        instance.policyPremium = validated_data.get('policyPremium', instance.policyPremium)
        return instance
class AgencyAppointmentSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    class Meta:
        model=AgencyAppointment
        fields='__all__'
class AgencySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    master = OwnerSerializer(read_only=True,many=True)
    # agencyAddress = AddressSerializer(read_only=True,many=False)
    # agencyDocuments=FileSeriealizer(read_only=True,many=True)
    # agencyUWFiles=FileSeriealizer(read_only=True,many=True)
    # agencyQuotes=QuoteSerializer(read_only=True,many=True)
    # policies=PolicySerializer(read_only=True,many=True)
    clients=OwnerSerializer(read_only=True,many=True)
    agents=OwnerSerializer(read_only=True,many=True)
   
    agencyAppointments=AgencyAppointmentSerializer(read_only=True,many=True)
    class Meta:
        model=Agency
        fields='__all__'

class PolicyReferenceSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    class Meta:
        model=Policy
        fields='__all__'
class PriorInsuranceSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    class Meta:
        model=PriorInsurance
        fields='__all__'
    pass
class EndorsementSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True,allow_null=True)
    quote=QuoteReferenceSerializer(read_only=True,many=False)
    policy=PolicyReferenceSerializer(read_only=True,many=False)
    endorsementPayments=PaymentSerializer(read_only=True,many=True)
    endorsementPayment=PaymentSerializer(read_only=True,many=False)
    endorsementDocuments=FileSeriealizer(read_only=True,many=True)
    endorsementUWFiles=FileSeriealizer(read_only=True,many=True)

    class Meta:
        model=Endorsement
        fields='__all__'
    pass



class CustomerSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    agency=AgencySerializer(read_only=True,many=False)
    profilePicture = ProfilePictureSerializer(read_only=False,many=False,allow_null=True)
    address = AddressSerializer(read_only=False,many=False,allow_null=True)
    # def update(self, myUser,validated_data):
    #     # myUser.phoneNumber = validated_data.pop("phoneNumber")
    #     # myUser.firstName = validated_data.pop("first_name")
    #     # myUser.lastName = validated_data.pop("last_name")
    #     # myUser.verified = validated_data.pop("verified")
        
    #     myUser.save()
    #     return myUser
    class Meta:
        model=Customer
        fields='__all__'

class LeadSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    owner=OwnerSerializer(read_only=True,many=False)
    address = AddressSerializer(read_only=False,many=False,allow_null=True)
    supportChats = SupportChatSerializer(read_only=True,many=True)
    carList = CarSerializer(read_only=True,many=True)
    additionalInsureds = NamedInsuredSerializer(read_only=True,many=True)
    quoteList = QuoteSerializer(read_only=True,many=True)
    files = FileSeriealizer(read_only=True,many=True)
    cards=CardSerializer(read_only=True,many=True)
    paypals=PayPalSerializer(read_only=True,many=True)
    cryptos=CryptoSerializer(read_only=True,many=True)
    bankAccounts=BankAccountSerializer(read_only=True,many=True)
    # def update(self, myUser,validated_data):
    #     # myUser.phoneNumber = validated_data.pop("phoneNumber")
    #     # myUser.firstName = validated_data.pop("first_name")
    #     # myUser.lastName = validated_data.pop("last_name")
    #     # myUser.verified = validated_data.pop("verified")
        
    #     myUser.save()
    #     return myUser
    class Meta:
        model=Lead
        fields='__all__'

class Property(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    class Meta:
        model=Property
        fields='__all__'

class CustomerWithTokenSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    token = serializers.SerializerMethodField()

    def get_token(self, object):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        payload = jwt_payload_handler(object)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        user = User.objects.create(
            username = validated_data['username'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    
    class Meta:
        model = User
        fields = ('token', 'username', 'password', 'first_name',
        'last_name')
