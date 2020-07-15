from django import forms

from .models import Subscriber

class SubscribtionForm(forms.ModelForm):
    class Meta:
        model = Subscriber
        fields  = ['email']
        widgets = {
            'email': forms.TextInput(attrs={'placeholder': 'Enter a valid email Address','onkeydown':'validation()'}),
        }