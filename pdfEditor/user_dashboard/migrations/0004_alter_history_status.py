# Generated by Django 5.1.6 on 2025-04-03 11:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_dashboard', '0003_history_file_fk_alter_history_updated_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='history',
            name='status',
            field=models.CharField(default='Uploaded', max_length=255),
        ),
    ]
