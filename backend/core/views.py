from rest_framework import generics
from .models import Contacts, News
from .serializers import ContactsSerializer, NewsSerializer


class ContactsListView(generics.ListAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer


class NewsListView(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer
