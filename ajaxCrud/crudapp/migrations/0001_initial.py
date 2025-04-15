# Generated by Django 5.1.6 on 2025-02-25 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('status', models.CharField(choices=[('Done', 'Done'), ('Not Done Yet', 'Not Done Yet')], default='Not Done Yet', max_length=255)),
                ('type', models.CharField(blank=True, choices=[('Urgent', 'Urgent'), ('Not Urgent', 'Not Urgent'), ('For Weekend', 'For Weekend'), ('Before Week Start', 'Before Week Start')], max_length=255, null=True)),
                ('todo_img', models.ImageField(blank=True, help_text='Upload an image', null=True, upload_to='images/')),
                ('file', models.FileField(blank=True, help_text='Upload a document', null=True, upload_to='documents/')),
            ],
        ),
    ]
