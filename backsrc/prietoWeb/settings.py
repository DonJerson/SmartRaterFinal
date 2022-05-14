
import os
import datetime

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '^$am8n_mab&2u^lobwr4gd9wwi8f04jg5frtil^0u_*z214%2('

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['prieto','backend.jersonmendez.com','172.20.10.3','10.1.10.191','10.1.10.229','10.0.0.229','10.1.10.178','teteo.smartrater.us','smartrater.us','civiltools.club','jersonmendez.com','inversionesmendez.herokuapp.com','127.0.0.1','localhost']

# Application definition   
CORS_ORIGIN_ALLOW_ALL=True
#CSRF_COOKIE_SECURE = False
#SESSION_COOKIE_SECURE = False
CORS_ALLOW_CREDENTIALS = True

INSTALLED_APPS = [
    'django.contrib.contenttypes',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'storages',
    "sslserver",
    'rest_framework',
    'django_filters',
    'Insurance',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'prietoWeb.urls'
AUTH_USER_MODEL = 'Insurance.Customer'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES':(
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),
    'DEFAULT_FILTER_BACKENDS':('django_filters.rest_framework.DjangoFilterBackend',)
}
WSGI_APPLICATION = 'prietoWeb.wsgi.application'


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases



# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

# /////////// AWS
USE_S3 = os.getenv('USE_S3') == 'TRUE'
myMinutes=2500
dev=False
if(BASE_DIR=="/backend"):
    dev=True
# # aws settings

# AWS_ACCESS_KEY_ID = 'AKIAXQSSLHRA6KFJFR33'
# AWS_SECRET_ACCESS_KEY = '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'
# AWS_STORAGE_BUCKET_NAME = 'smartinsurancedb'
# AWS_DEFAULT_ACL = 'public-read'
# AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com'%(AWS_STORAGE_BUCKET_NAME)
# AWS_S3_OBJECT_PARAMETERS = {'CacheControl': 'max-age=86400'}
# # s3 static settings
# AWS_LOCATION = 'static'
# STATIC_URL = 'https://%s/%s/'%(AWS_S3_CUSTOM_DOMAIN,AWS_LOCATION)
# STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
if(dev):
    DATABASES = {
        'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'smartrater',
        }}
else:
    DATABASES = {
        'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'smartrater',
        'USER': 'donjerson',
        'PASSWORD': 'Pri3to.Server',
        'HOST': '44.204.229.185',
        'PORT': '5432'
        }}

STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR + '\static'



CORS_ORIGIN_WHITE_LIST = 'prieto','backend.jersonmendez.com','172.20.10.3','10.1.10.191','10.1.10.229','10.0.0.229','10.1.10.178','teteo.smartrater.us','smartrater.us','civiltools.club','jersonmendez.com','127.0.0.1:8080','localhost:8080',

JWT_AUTH = {
    'JWT_RESPONSE_PAYLOAD_HANDLER' :   'Insurance.utils.custom_jwt_response_handler',
    'JWT_EXPIRATION_DELTA': datetime.timedelta(minutes=myMinutes)
}
LOGIN_URL = 'login'
LOGIN_REDIRECT_URL = 'home'