# Insurance urls.py

# Imports
from django.urls import path
from . import views
from . import api as views2
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('custom-auth/', views2.custom_auth),
    path('token-auth/', obtain_jwt_token),
    path('current_user/', views2.get_current_user),
    path('runQuote/', views2.run_quote),
    path('getModels/', views2.get_models),
    path('newQuote/', views2.new_quote),
    # path('getModels/', views2.getModels, name='index'),
]

