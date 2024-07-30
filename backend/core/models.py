from django.db import models


class Contacts(models.Model):
    SERVICE_CHOICES = [
        ('support', 'Centro de Apoio'),
        ('emergency', 'Serviço de Emergência'),
        ('resources', 'Outros Recursos'),
    ]

    name = models.CharField(max_length=100)
    description = models.TextField()
    phone = models.CharField(max_length=20, blank=True)
    email = models.EmailField(blank=True)
    address = models.TextField(blank=True)
    service_type = models.CharField(max_length=30, choices=SERVICE_CHOICES, default='resources')

    class Meta:
        db_table = 'contacts'

    def __str__(self):
        return self.name
