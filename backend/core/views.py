from rest_framework import generics
from .models import Contacts, News, FAQEntry
from .serializers import ContactsSerializer, NewsSerializer, FAQEntrySerializer


class ContactsListView(generics.ListAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer


class NewsListView(generics.ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


class FAQEntryListView(generics.ListAPIView):
    queryset = FAQEntry.objects.all()
    serializer_class = FAQEntrySerializer
