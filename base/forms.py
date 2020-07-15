from django import forms

from .models import Subscriber

class SubscribtionForm(forms.ModelForm):
    class Meta:
        model = Subscriber
        fields  = ['name','email']
        widgets = {
            'name': forms.TextInput(attrs={"placeholder": "What's your Name"}),
            'email': forms.TextInput(attrs={'placeholder': 'Enter a valid email Address','onkeydown':'validation()'}),
        }