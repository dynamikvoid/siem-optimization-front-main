# Generated by Django 4.1.6 on 2023-02-14 09:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('siemopt', '0005_alter_ingestionvolumedata_options'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='ingestionvolumedata',
            table='ingestion_volume_data',
        ),
    ]
