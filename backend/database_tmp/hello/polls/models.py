from django.db import models

# Create your models here.
class User(models.Model):
    STATUS=(
        ('Te','Teacher'),
        ('S','Student'),
    )
    user_name = models.CharField('Username', max_length=64, unique=True)
    password = models.CharField('Password', max_length=64)
    email = models.EmailField( max_length=64, null=True)
    telephone = models.CharField('Telephone', max_length=64, blank=True)
    user_status=models.CharField(max_length=1,choices=STATUS)

    lessones_list=models.CharField('Lessons',max_length=128)
    class Meta:
        db_table='User'
        ordering=['user_name']
    def __str__(self):
        return self.username


class Group(models.Model):
    group_name=models.CharField('Group Name',max_length=64)
    users=models.ManyToManyField(User,related_name='Groups')
    class Meta:
        db_table='Group'
        ordering = ['group_name']
    def __str__(self):
        return self.group_name

class Lessons(models.Model):
    lesson_name=models.CharField('Lesson Name',max_length=64,unique=True)
    teachers=models.ManyToManyField(User,related_name='Teacher')
    groups=models.ManyToManyField(Group)
    students=models.ManyToManyField(User,related_name='Students')
    class Meta:
        db_table='lesson_name'
        ordering = ['lesson_name']
    def __str__(self):
        return self.lesson_name





class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)