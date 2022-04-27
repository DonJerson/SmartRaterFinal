from django.contrib import admin

# Register your models here.
from .models import *
admin.site.register(Customer)
admin.site.register(Address)
admin.site.register(Car)
admin.site.register(Insurer)
admin.site.register(Model)
admin.site.register(Brand)
admin.site.register(NamedInsured)
admin.site.register(BodyStyleEntry)
admin.site.register(PickTrimEntry)
admin.site.register(YearEntry)
admin.site.register(CoveredAuto)
admin.site.register(Quote)
admin.site.register(HomeQuoteElements)
admin.site.register(PersonalAutoQuoteElements)
admin.site.register(QuoteLine)
admin.site.register(UWFile)
admin.site.register(SupportMessage)
admin.site.register(SupportChat)
admin.site.register(PersonalImage)