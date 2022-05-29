import re
import time
from Cars.models import *
from Files.models import *
from Maps.models import *

print("success")



def addRD():
	try:
		RD = Country.objects.get(name="República Dominicana")
	except:
		RD = Country.objects.create(name="República Dominicana",abr="RD")
		RD.save()

	myStates=['Distrito Nacional','Santo Domingo','Azua','Bahoruco','Barahona','Dajabón','Duarte',
	'Elías Piña','El Seibo','Espaillat','Hato Mayor','Hermanas Mirabal','Independencia','La Altagracia','La Romana',
	'La Vega','María Trinidad Sánchez','Monseñor Nouel','Monte Cristi''Monte Plata','Pedernales','Peravia',
	'Puerto Plata','Samaná','Sánchez Ramírez','San Cristóbal','San José de Ocoa','San Juan','San Pedro de Macorís',
	'Santiago Rodríguez','Valverde']

	for state in myStates:
		try:
			newObj = State.objects.create(name=state,country=RD)
			newObj.save()
			print("success")
		except:
			print("bobo")
			#print(car)
	return
	
def addCarCategories():
	myCarCategories=['Carro','SUV','Deportivo','Minivan','Camioneta','Van','Lujo']

	for car in myCarCategories:
		try:
			newObj = CarCategory.objects.create(name=car)
			newObj.save()
			print("success")
		except:
			print("bobo")
			#print(car)
	return

def addFeatures():
	myFeatures=[
		{"name":"electric","label":"Eléctrico/Híbrido"},
		{"name":"bike","label":"Rack para bicicletas"},
		{"name":"child","label":"Asiento para niños"},
		{"name":"4x4","label":"Tracción 4x4"},
		{"name":"gps","label":"GPS"},
		{"name":"bluetooth","label":"Bluetooth"},
		{"name":"usb","label":"Entrada USB"},
		{"name":"convertible","label":"Convertible"},
		{"name":"bike","label":"Rack para bicicletas"},
		]

	for feature in myFeatures:
		try:
			newObj = Feature.objects.create(name=feature["name"],label=feature["label"])
			newObj.save()
			print("success")
		except:
			print("bobo")
			#print(car)
	return

def getCars():
	myCars=[]
	with open("modelsdb.sql","r") as file:
		temp = file.read().splitlines()
		for line in temp:
			if line!="" and line!= None and line[0:6]!="INSERT":
				try:
					indexes = [m.start() for m in re.finditer('(?=,)', line)]
					brand=line[2:indexes[0]-1]
					print("brand " +brand)
					model=line[indexes[0]+3:indexes[1]-1]
					years=line[indexes[3]+3:indexes[3]+12]
					carType=line[indexes[2]+3:indexes[3]-1]
					myCars.append({"brand":brand,"model":model,"years":years,"carType":carType})
				except:
					print("error")
	print(len(myCars))
	for car in myCars:
		try:
			newObj = CarEntry.objects.create(model=car["model"],brand=car["brand"],carType=car["carType"],years=car["years"])
			newObj.save()
			print("success")
		except:
			print("bobo")
			#print(car)
	return

def initAll():
	addFeatures()
	addCarCategories()
	addRD()
	getCars()
	return