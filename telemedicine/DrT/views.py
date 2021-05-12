from django.shortcuts import render
from DrT.serializers import DoctorSerializer, UserSerializer
from .models import Doctor
from rest_framework import viewsets
from django.contrib.auth.models import User
# Create your views here.


class DoctorView(viewsets.ModelViewSet):

    serializer_class = DoctorSerializer
    queryset = Doctor.objects.all()

class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
