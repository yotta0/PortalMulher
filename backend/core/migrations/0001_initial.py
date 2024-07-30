# Generated by Django 5.0.7 on 2024-07-30 23:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contacts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('phone', models.CharField(blank=True, max_length=20)),
                ('email', models.EmailField(blank=True, max_length=254)),
                ('address', models.TextField(blank=True)),
                ('service_type', models.CharField(choices=[('support', 'Centro de Apoio'), ('emergency', 'Serviço de Emergência'), ('resources', 'Outros Recursos')], default='resources', max_length=30)),
            ],
            options={
                'db_table': 'contacts',
            },
        ),
    ]
