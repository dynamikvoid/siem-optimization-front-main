# import serializers from the REST framework
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
 
# import the siemopt data model
from .models import AlertSummaryData,IngestionVolumeData
 
# create a serializer class
class siemoptSerializer(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = AlertSummaryData
        fields = '__all__'

class siemoptSerializer1(serializers.ModelSerializer):
 
    # create a meta class
    class Meta:
        model = IngestionVolumeData
        fields = '__all__'        