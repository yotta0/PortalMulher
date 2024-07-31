from django.urls import path
from . import views

urlpatterns = [
    path('contacts', views.ContactsListView.as_view(), name='contacts-list'),
    path('news', views.NewsListView.as_view(), name='news-list'),
    path('faq_entries', views.FAQEntryListView.as_view(), name='faq-entries-list'),
]
