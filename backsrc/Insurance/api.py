from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from rest_framework import viewsets,status
from rest_framework.response import Response
from .models import *
from .serializers import *
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
from time import sleep
from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service as ChromeService
from Cars.serializers import *

class TokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user, timestamp):
        return (
            six.text_type(user.pk) + six.text_type(timestamp) +
            six.text_type(user.is_active)
        )

import mechanize
import re
from bs4 import BeautifulSoup
#start timer
import json
import time

@api_view(['POST'])
@permission_classes([])
def get_county(request):
    zipcode=request.data['zipcode']
    start_time = time.time()
    br = mechanize.Browser()
    br.set_handle_robots(False)
    br.addheaders = [('User-agent', 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0')]
    zipcode = '33467'
    br.open('http://uscounties.com/zipcodes/search.pl?query='+zipcode+'&stpos=0&stype=AND')
    html = br.response().read()
    soup = BeautifulSoup(html,features="html5lib")
    scrapedLink =''
    county = soup.select_one('body > table:nth-child(2) > tbody > tr > td:nth-child(2) > p > table > tbody > tr.results > td:nth-child(3)').text.lower()
    countyCode=soup.select_one('body > table:nth-child(2) > tbody > tr > td:nth-child(2) > p > table > tbody > tr.results > td:nth-child(5)').text.lower()

    br.open('http://www.google.com/')
    br.select_form(nr=0)
    br.form['q'] = county+' county property appraiser search tax'
    br.submit()
    html = br.response().read()

    soup = BeautifulSoup(html,features="html5lib")

    scrapedLink =''

    for(i,link) in enumerate(soup.find_all('a')):
        if i > 13:
            linkRef = link.get('href')
            if i ==14:
                scrapedLink= linkRef[linkRef.find("http"):linkRef.find('&sa')]
                break

    processingTime = "%s seconds" % round(time.time() - start_time,3)
    jsonVar=            {
                    'county': county[:-1],'countyCode':countyCode,
                    'processingTime':processingTime,'link':scrapedLink
                }
    jsonString =  json.dumps(jsonVar)
    print(jsonString)
    return Response(jsonString)

@api_view(['POST'])
def new_quote(request):
    owner=request.user
    data=request.data
    newQuote = Quote.objects.create(**data,owner=owner)
    return Response(QuoteSerializer(newQuote, many=False).data)

@api_view(['POST'])
@permission_classes([])
def get_models(request):
    brand = request.data["brand"]
    allModels = CarEntry.objects.filter(brand=brand)
    return Response(CarEntrySerializer(allModels, many=True).data)

@api_view(['POST'])
@permission_classes([])
def newProspect(request):
    lead = request.data
    owner = Customer.objects.get(id=1)
    print("lead")
    print(lead)
    newLead = Prospect.objects.create(**lead,owner=owner)
    return Response(ProspectSerializer(newLead, many=False).data)
 
@api_view(['POST'])
@permission_classes([])
def custom_auth(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    #print("ip = MY ip")
    print(ip)
    print(request.META)

    email = request.data['username']
    password = request.data['password']
    data = request.data
    google=False
    facebook=False
    if 'imageUrl' in data:
        google = True
        email= data['email']
        pictureUrl = data['imageUrl']
        first_name = data['givenName']
        last_name = data['familyName']
    else:
        facebook=True
        email= data['email']
        pictureUrl = data['picture']['data']['url']
        first_name = data['first_name']
        last_name = data['last_name']
    try:
        newProfilePic= Picture.objects.create(url=pictureUrl,key="SocialFetched")
        customer = Customer.objects.get(username=email)
        
    except:
        try:
            newUser = Customer.objects.create_user(username=email,confirmedEmail=True,email=email,password=password)
            newUser.save()
            # current_site = get_current_site(request)
            # account_activation_token = TokenGenerator()
            # mail_subject = 'Bienvenido a Mudate Club, '+first_name+'! Confirma tu correo'
            # message = render_to_string('welcome.html', {
            #     'user': newUser,
            #     'domain': current_site.domain,
            #     'uid':urlsafe_base64_encode(force_bytes(newUser.pk)),
            #     'token':account_activation_token.make_token(newUser),
            # })
            # to_email = newUser.username
            # send_mail(mail_subject, strip_tags(message), "contact@mudate.club",[to_email],html_message=message)

        except Exception as e:
            print(e)
            return Response({"Response":"Error creando"})

    customer = Customer.objects.get(username=email)
    customer.first_name=first_name
    customer.last_name=last_name
    customer.name=first_name+" "+last_name
    customer.profilePicture=newProfilePic
    customer.save()

    jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
    jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


    payload = jwt_payload_handler(customer)

    # Include original issued at time for a brand new token,
    # to allow token refresh
    if api_settings.JWT_ALLOW_REFRESH:
        payload['orig_iat'] = timegm(
            datetime.utcnow().utctimetuple()
        )
    return Response({"status":"SUCCESS","token":jwt_encode_handler(payload),"user":CustomerSerializer(customer).data})

@api_view(['GET'])
def get_current_user(request):
	serializer = CustomerSerializer(request.user)
	return Response(serializer.data)

@api_view(['POST'])
def close_support(request):
    myId = request.data['customerId']
    try:
        customer = Customer.objects.get(id=myId)
        oldChat = customer.supportchat_set.filter(closed=False)[0]
        oldChat.closed = True
        oldChat.save()
    except:
        oldChat = SupportChat.objects.get(id=myId)
        oldChat.closed = True
        oldChat.save()

    async_to_sync(get_channel_layer().group_send)(
            "notification_%s"%(oldChat.customer.id),
            {
                'type': 'chat_message',
                'message': SupportChatSerializer(oldChat).data,
                'action':"message",
            }
        )
    async_to_sync(get_channel_layer().group_send)(
            "notification_%s"%(oldChat.customer.id),
            {
                'type': 'chat_message',
                'message': SupportChatSerializer(oldChat).data,
                'action':"message",
            }
        )
    return Response("SUCCESS")

@api_view(['GET'])
def get_support_chats(request):
    allChats = SupportChat.objects.filter(closed=False)
    return Response(SupportChatSerializer(allChats,many=True).data)

def test_selenium_server_available():
    import requests
    from requests.adapters import HTTPAdapter
    from requests.packages.urllib3.util.retry import Retry

    session = requests.Session()
    retry = Retry(connect=5, backoff_factor=0.5)
    adapter = HTTPAdapter(max_retries=retry)
    session.mount('http://', adapter)
    session.mount('https://', adapter)

    session.get("http://localhost:4444/wd/hub")
    return True
@api_view(['GET'])
def run_quote(request):
    test_selenium_server_available()


    capabilities={"desired_capabilities": {
        "browserName": "chrome",
        "javascriptEnabled": True,
        "acceptSslCerts": True,
        "chromeOptions": {
            "args": [
                "--no-sandbox",
                "--disable-gpu",
                "--window-size=1920,1080",
                "--disable-extensions",
                "--disable-dev-shm-usage",
                "--headless"]}},"capabilities": {
            "browserName": "chrome",
            "javascriptEnabled": True,
                }
    }
    sleep(2)
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')

    sleep(2)
    driver =webdriver.Remote("http://teteo.smartrater.us:4444/wd/hub",
                                options.to_capabilities())
    driver.get('https://python.org')
    driver.save_screenshot('python.png')
    driver.close()
    return Response("SUCCESSo")


@api_view(['GET'])
def get_help(request):
    try:
        newChat = request.user.supportChats.get(closed=False)
    except:
        newChat = SupportChat.objects.create(customer=request.user)
        admins = Customer.objects.filter(is_superuser=True)
        for admin in admins:
            async_to_sync(get_channel_layer().group_send)(
                "notification_%s"%(admin.id),
                {
                    'type': 'chat_message',
                    'message': SupportChatSerializer(newChat).data,
                    'action':"newSupport",
                }
            )
            async_to_sync(get_channel_layer().group_send)(
                "notification_%s"%(admin.id),
                {
                    'type': 'chat_message',
                    'message': SupportChatSerializer(newChat).data,
                    'action':"newSupport",
                }
            )
    return Response(CustomerSerializer(request.user,many=False).data)

@api_view(['GET'])
@permission_classes([])
def get_features(request):
    permission_classes=[]
    allFeatures = Feature.objects.all()
    return Response(FeatureSerializer(allFeatures,many=True).data)



@api_view(['POST'])
@permission_classes([])
def user_page(request):
    myId = request.data['id']
    customer = Customer.objects.get(id=myId)
    return Response(CustomerPageSerializer(customer,many=False).data)

@api_view(['POST'])
def existing_user(request):
    print("here")
    permission_classes = (permissions.AllowAny, )
    serializer = CustomerSerializer(request.data.get('user'))
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([])
def change_password(request):
    permission_classes = []
    email = request.data['email']
    user = Customer.objects.get(email=email)
    # current_site = get_current_site(request)
    # account_activation_token = TokenGenerator()
    # mail_subject = 'Solicitud de contrasena de Mudate Club'
    # message = render_to_string('changepassword.html', {
    #     'email': email,
    #     'name':user.name,
    #     'user': user,
    #     'domain': current_site.domain,
    #     'uid':urlsafe_base64_encode(force_bytes(user.pk)),
    #     'token':account_activation_token.make_token(user),
    # })
    # to_email = user.username
    # send_mail(mail_subject, strip_tags(message), "contact@mudate.club",[to_email],html_message=message)

    return Response("email sent")

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    pass


class NamedInsuredViewSet(viewsets.ModelViewSet):
    queryset = NamedInsured.objects.all()
    serializer_class = NamedInsuredSerializer
    pass

class CoveredAutoViewSet(viewsets.ModelViewSet):
    queryset = CoveredAuto.objects.all()
    serializer_class = CoveredAutoSerializer
    pass

class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    pass
class QuoteViewSet(viewsets.ModelViewSet):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer
    pass
class PolicyViewSet(viewsets.ModelViewSet):
    queryset = Policy.objects.all()
    serializer_class = PolicySerializer
    pass
class AgencyViewSet(viewsets.ModelViewSet):
    queryset = Agency.objects.all()
    serializer_class = AgencySerializer
    pass
class ProspectViewSet(viewsets.ModelViewSet):
    queryset = Prospect.objects.all()
    serializer_class = ProspectSerializer
    pass
class InsurerViewSet(viewsets.ModelViewSet):
    queryset = Insurer.objects.all()
    serializer_class = InsurerSerializer
    pass
class ExistingCustomerViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    serializer_class = ExistingCustomerSerializer

    def create(self,request):
        myData=request.data
        username = request.data.get('username')
        password = request.data.get('password')
        data = request.data
        google=False
        facebook=False
        if('email' in data):
            if 'imageUrl' in data:
                google = True
                email= data['email']
                pictureUrl = data['imageUrl']
                name = data['name']
                first_name = data['givenName']
                last_name = data['familyName']
            else:
                facebook=True
                email= data['email']
                pictureUrl = data['picture']['data']['url']
                name = data['name']
                first_name = data['first_name']
                last_name = data['last_name']
        try:
            user = Customer.objects.get(username=username)
            if(google or facebook):
                try:
                    newProfilePic= Picture.objects.get(url=pictureUrl)
                except:
                    newProfilePic= Picture.objects.create(url=pictureUrl,key="SocialFetched")
                user.profilePicture=newProfilePic
                if google:
                    user.confirmedGoogle=True
                else:
                    user.confirmedFacebook=True
                user.save()
            print("Ya existe")
            exist = True
        except:
            print("No existe")
            exist = False
        if exist:
            return Response({'response' : 'error', 'message' : 'existe'})
        if google or facebook:
            try:
                newProfilePic= Picture.objects.create(url=pictureUrl,key="SocialFetched")
                newUser = Customer.objects.create_user(username=email,business=True,confirmedEmail=True,email=username,password=password,profilePicture=newProfilePic,first_name=first_name,last_name=last_name,name=name)
                user = CustomerSerializer(newUser).data
            except:
                return Response({"Response":"Error creando"})
        else:
            try:
                newUser = Customer.objects.create_user(username=username,email=username,password=password,first_name=myData['first_name'],last_name=myData['last_name'])
                newUser.save()
                user = CustomerSerializer(newUser).data
            except Exception as e:
                return Response({"Response":"Error creando: "})
        # serializer = ExistingCustomerSerializer(data = request.data)
        # if serializer.is_valid():
        #     print("tamo aqui pa crear")
        #     saved_user = serializer.save()
        #     user = serializer.data
        # else:
        #     return Response({"response" : "error", "message" : serializer.errors})
        
        
        print("uno nunca se para de meter mano")
        print(user)
        account_activation_token = TokenGenerator()
        user = Customer.objects.get(username=user["username"])
        print(user)
        # current_site = get_current_site(request)
        # mail_subject = 'Bienvenido a Mudate Club, '+first_name+'! Confirma tu correo'
        # message = render_to_string('welcome.html', {
        #     'user': user,
        #     'domain': current_site.domain,
        #     'uid':urlsafe_base64_encode(force_bytes(user.pk)),
        #     'token':account_activation_token.make_token(user),
        # })
        # to_email = user.username
        # send_mail(mail_subject, strip_tags(message), "contact@mudate.club",[to_email],html_message=message)

        return Response({"response" : "success", "message" : "Usuario creado!","username":username,"password":password})
    pass

class CreateUserView(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self,request):
        user = request.data.get('user')
        if not user:
            return Response({'response' : 'error', 'message' : 'No data found'})
        serializer = UserSerializerWithToken(data = user)
        if serializer.is_valid():
            saved_user = serializer.save()
        else:
            return Response({"response" : "error", "message" : serializer.errors})

        return Response({"response" : "success", "message" : "user created succesfully"})

