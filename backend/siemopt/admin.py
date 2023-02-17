from django.contrib import admin

 
# import the model siemopt
from .models import siemopt
from .models import AlertSummaryData
 
# create a class for the admin-model integration

 
# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class
# admin.site.register(siemopt,siemoptAdmin)
admin.site.register(AlertSummaryData)