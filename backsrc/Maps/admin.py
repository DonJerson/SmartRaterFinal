from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Address)
admin.site.register(Country)
admin.site.register(State)
admin.site.register(City)
admin.site.register(Zipcode)
admin.site.register(County)