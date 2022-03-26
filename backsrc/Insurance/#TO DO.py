#TO DO

# models.py

class CarsDB(models.Model):
	brand = models.CharField(max_length=25,blank=True,null=True)
	model = models.CharField(max_length=60,blank=True,null=True)
	years = models.CharField(max_length=15,blank=True,null=True)
	carType = models.CharField(max_length=50,blank=True,null=True)
	def __str__(self):
		return self.brand+" "+self.model
	pass




# serializer.py


class CarsDBSerializer(serializers.ModelSerializer):
id = serializers.IntegerField(required=True)
class Meta:
    model=CarsDB
    fields='__all__'


# admin.py
admin.site.register(CarsDB)


# api.py
@api_view(['POST'])
def get_models(request):
    brand = request.data["brand"]
    allModels = CarsDB.objects.filter(brand=brand)
    return Response(CarsDBSerializer(allModels, many=True).data)


# @api_view(['POST'])
# def get_models(request):
#     print("we here")
    
#     allCars = CarsDB.objects.all()
#     brands = []
#     for car in allCars:
#         newBrand=True
#         for brand in brands:
#             if car.brand==brand:
#                 newBrand=False
#                 break
#         if newBrand:
#             brands.append(car.brand)
#     print(brands)
#     return Response(CarsDBSerializer(allModels, many=True).data)