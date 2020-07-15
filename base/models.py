
from django.db import models

class Subscriber(models.Model):
    name = models.CharField(max_length = 200, null = True)
    email = models.EmailField(max_length=200, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null = True)
    
    def __str__(self):
        return self.name