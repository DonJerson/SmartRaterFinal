from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404, reverse
from .models import *
from django.core.mail import send_mail
from .forms import *
from django.contrib.auth import authenticate,login,logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
from .serializers import *
from rest_framework.parsers import JSONParser
# Create your views here.

def index(request):
	form = LoginForm()
	return render(request, 'mainapp2.html',{'form':form})

# def about(request):
# 	author = Article.objects.get(id=author_id)
# 	block = {
# 	'author':author
# 	}
# 	return render(request, 'author.html', block)

def loginFunction(request):
	username = request.POST.get('userName')
	password = request.POST.get('password')
	print(username+password)
	user = authenticate(username=username, password=password)
	if user is not None:
		if user.is_active:
			login(request,user)
			return render(request,'analysis2.html')
	print("nop nap")
	return HttpResponseRedirect(reverse('home'))

def logoutFunction(request):
	logout(request)
	return HttpResponseRedirect(reverse('home'))

def analysis(request):
	return render(request, 'analysis2.html')

def updatePresupuesto(request):
	data = request.POST
	print(data)
	return

def updateAnalysis(request):
	data = request.POST
	print(data)
	return

@csrf_exempt
def createAnalysis(request):
	data = JSONParser().parse(request)
	print(data)
	newAnalysis = Analysis.objects.create()
	# newAnalysis.name = data["name"]
	# print(data["category"])
	# newAnalysis.category = data["category"]
	# newAnalysis.matList = data["matList"]
	# newAnalysis.moList = data["moList"]
	# newAnalysis.toolList = data["toolList"]
	# newAnalysis.matTotal = data["matTotal"]
	# newAnalysis.moTotal = data["moTotal"]
	# newAnalysis.toolTotal = data["toolTotal"]
	# newAnalysis.total = data["total"]
	# newAnalysis.division = data["division"]
	# newAnalysis.cost = data["cost"]
	serializer = AnalysisSerializer(newAnalysis, data=data)
	print(serializer.is_valid())
	return JsonResponse({"relax":"motherfucker"})

def createPresupuesto(request):
	return

def updateAnalysis(request):
	data = request.POST
	print(data)
	return

def budget(request):
	return
def rent(request):
	return
def buy(request):
	return
def sale(request):
	return
def upgrade(request):
	return
def invest(request):
	return
def sell(request):
	return



# #/////////////////// Future Work

# def slab(request):

# def beam(request):

# def pile(request):

# def foundation(request):

# def sanitaria(request):


# #// Futurer work

# def study(request)