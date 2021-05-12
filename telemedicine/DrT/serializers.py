from rest_framework import serializers
from .models import Doctor
from django.contrib.auth.models import User

#  creat seralizers hear


class DoctorSerializer(serializers.ModelSerializer):


    class Meta:

        model = Doctor
        fields = ['url', 'id', 'name','specialization', 
        'bio', 'qualification', 'experience', 'hospital', 
        'languages', 'job_type', 'contact1', 'contact2',
         'email1', 'email2', 'address', 'consultation_fee']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'password' )
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

