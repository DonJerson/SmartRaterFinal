from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Car)
admin.site.register(Customer)
admin.site.register(Agency)
admin.site.register(Insurer)
admin.site.register(NamedInsured)
admin.site.register(CoveredAuto)
admin.site.register(Policy)
admin.site.register(Quote)
admin.site.register(HomeQuoteElements)
admin.site.register(PersonalAutoQuoteElements)
admin.site.register(QuoteLine)
