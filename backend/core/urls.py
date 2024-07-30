from django.urls import path
from . import views

urlpatterns = [
    path('contacts', views.ContactsListView.as_view(), name='contacts-list'),
]
