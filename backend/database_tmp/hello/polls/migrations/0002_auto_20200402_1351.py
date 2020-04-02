# Generated by Django 2.1.1 on 2020-04-02 05:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('group_name', models.CharField(max_length=64, verbose_name='Group Name')),
            ],
            options={
                'db_table': 'Group',
                'ordering': ['group_name'],
            },
        ),
        migrations.CreateModel(
            name='Lessons',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lesson_name', models.CharField(max_length=64, unique=True, verbose_name='Lesson Name')),
                ('groups', models.ManyToManyField(to='polls.Group')),
            ],
            options={
                'db_table': 'lesson_name',
                'ordering': ['lesson_name'],
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(max_length=64, unique=True, verbose_name='Username')),
                ('password', models.CharField(max_length=64, verbose_name='Password')),
                ('email', models.EmailField(max_length=64, null=True)),
                ('telephone', models.CharField(blank=True, max_length=64, verbose_name='Telephone')),
                ('user_status', models.CharField(choices=[('Te', 'Teacher'), ('S', 'Student')], max_length=1)),
                ('lessones_list', models.CharField(max_length=128, verbose_name='Lessons')),
            ],
            options={
                'db_table': 'User',
                'ordering': ['user_name'],
            },
        ),
        migrations.AddField(
            model_name='lessons',
            name='students',
            field=models.ManyToManyField(related_name='Students', to='polls.User'),
        ),
        migrations.AddField(
            model_name='lessons',
            name='teachers',
            field=models.ManyToManyField(related_name='Teacher', to='polls.User'),
        ),
        migrations.AddField(
            model_name='group',
            name='users',
            field=models.ManyToManyField(related_name='Groups', to='polls.User'),
        ),
    ]
