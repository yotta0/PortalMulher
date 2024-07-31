from django.db import models


class Contacts(models.Model):
    SERVICE_CHOICES = [
        ('support', 'Centro de Apoio'),
        ('emergency', 'Serviço de Emergência'),
        ('resources', 'Outros Recursos'),
    ]

    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    phone = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    service_type = models.CharField(max_length=30, blank=True, choices=SERVICE_CHOICES, default='resources')

    class Meta:
        db_table = 'contacts'

    def __str__(self):
        return self.name
