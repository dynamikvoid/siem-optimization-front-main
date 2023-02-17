from django.shortcuts import render
 
# import view sets from the REST framework
from rest_framework import viewsets
 
# import the siemoptSerializer from the serializer file
from .serializers import siemoptSerializer
 
# import the siemopt model from the models file
from .models import siemopt,AlertSummaryData,IngestionVolumeData

from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.http import JsonResponse
from .serializers import siemoptSerializer, siemoptSerializer1
# create a class for the siemopt model viewsets
class siemoptView(viewsets.ModelViewSet):
 
    # create a serializer class and
    # assign it to the siemoptSerializer class
    serializer_class = siemoptSerializer
 
    # define a variable and populate it
    # with the siemopt list objects
    queryset = siemopt.objects.all()
    
class siemoptView1(viewsets.ModelViewSet):
 
    # create a serializer class and
    # assign it to the siemoptSerializer class
    serializer_class = siemoptSerializer1
 
    # define a variable and populate it
    # with the siemopt list objects
    queryset = siemopt.objects.all()    


     
 
@api_view(['GET'])
def getAsdata(request):
    asdata = AlertSummaryData.objects.all()
    serializer = siemoptSerializer(asdata, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getOneAsdata(request, pk):
    asdata = AlertSummaryData.objects.get(id=pk)
    serializer = siemoptSerializer(asdata, many=False)
    return Response(serializer.data)    

@api_view(['GET'])
def getIngVoldata(request):
    ivdata = IngestionVolumeData.objects.all()
    serializer = siemoptSerializer1(ivdata, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getOneIngVoldata(request, pk):
    ivdata = IngestionVolumeData.objects.get(id=pk)
    serializer = siemoptSerializer1(ivdata, many=False)
    return Response(serializer.data)   