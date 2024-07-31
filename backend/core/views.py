from rest_framework import generics
from .models import Contacts
from .serializers import ContactsSerializer


class ContactsListView(generics.ListAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer
