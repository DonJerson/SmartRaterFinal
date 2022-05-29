# Insurance urls.py

# Imports
from django.urls import path
from . import views
from . import api as views2
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.routers import SimpleRouter
from Insurance.api import *

insuranceRouter = SimpleRouter()
insuranceRouter.register(r'customer', CustomerViewSet, basename='customer')
insuranceRouter.register(r'namedinsured', NamedInsuredViewSet, basename='namedinsured')
insuranceRouter.register(r'car', CarViewSet, basename='car')
insuranceRouter.register(r'quote', QuoteViewSet, basename='quote')
insuranceRouter.register(r'insurer', InsurerViewSet, basename='insurer')
insuranceRouter.register(r'existing', ExistingCustomerViewSet, basename='existing')
insuranceRouter.register(r'policy', PolicyViewSet, basename='policy')
insuranceRouter.register(r'agency', AgencyViewSet, basename='agency')

urlpatterns = [
    path('custom-auth/', views2.custom_auth),
    path('token-auth/', obtain_jwt_token),
    path('current_user/', views2.get_current_user),
    path('runQuote/', views2.run_quote),
    path('getModels/', views2.get_models),
    path('newQuote/', views2.new_quote),
    # path('getModels/', views2.getModels, name='index'),
]

