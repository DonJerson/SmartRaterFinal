from rest_framework import serializers
from Cars.models import *

class CarEntrySerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=True)
    class Meta:
        model=CarEntry
        fields='__all__'
    pass