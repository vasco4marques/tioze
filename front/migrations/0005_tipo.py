# Generated by Django 5.0.1 on 2024-02-08 19:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('front', '0004_produto_inview'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tipo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
    ]
