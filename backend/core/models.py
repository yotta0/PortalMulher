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


class News(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    published_date = models.DateTimeField(auto_now_add=True)
    link = models.URLField(blank=True, null=True)
    image_link = models.TextField(blank=True, null=True)

    class Meta:
        db_table = 'news'
        ordering = ['-published_date']  # Ordena as notícias da mais recente para a mais antiga

    def __str__(self):
        return self.title


class FAQEntry(models.Model):
    question = models.CharField(max_length=255)
    answer = models.TextField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'faq_entries'
        ordering = ['created_at']

    def __str__(self):
        return self.question
