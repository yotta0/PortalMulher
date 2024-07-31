from rest_framework import serializers
from .models import Contacts, News, FAQEntry


class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = '__all__'


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'


class FAQEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQEntry
        fields = '__all__'
