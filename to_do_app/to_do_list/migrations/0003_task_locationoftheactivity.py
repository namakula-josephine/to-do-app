# Generated by Django 4.1.7 on 2023-06-05 12:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('to_do_list', '0002_remove_task_created_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='locationoftheactivity',
            field=models.TextField(default=False),
        ),
    ]