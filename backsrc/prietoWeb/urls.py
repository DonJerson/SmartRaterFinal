"""prietoWeb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from Insurance import views
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from Insurance.api import *
from Insurance import urls as Insurance_urls
from rest_framework_jwt.views import obtain_jwt_token

router = SimpleRouter()
router.register(r'customer', CustomerViewSet, base_name='customer')
router.register(r'namedinsured', NamedInsuredViewSet, base_name='namedinsured')
router.register(r'car', CarViewSet, base_name='car')
router.register(r'quote', QuoteViewSet, base_name='quote')
router.register(r'insurer', InsurerViewSet, base_name='insurer')
router.register(r'existing', ExistingCustomerViewSet, base_name='existing')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(Insurance_urls)),
    path('api/',include(router.urls))
]

# urlpatterns = [
#     path('articles/2003/', views.special_case_2003),
#     path('articles/<int:year>/', views.year_archive),
#     path('articles/<int:year>/<int:month>/', views.month_archive),
#     path('articles/<int:year>/<int:month>/<slug:slug>/', views.article_detail),
# ]


# urlpatterns += patterns('',
#         (r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT})
#     )
# urlpatterns += patterns('',
#         (r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT})