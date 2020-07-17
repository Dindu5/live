
from django.shortcuts import render, redirect
from .forms import SubscribtionForm
from django.contrib import messages

from django.conf import settings
from django.template.loader import render_to_string





def home(request):
   
    form = SubscribtionForm()

    if request.method == 'POST':
        # print('Printing Post:', request.POST)

        form = SubscribtionForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'You have successfully subscribed, a confirmation mail will be sent to you shortly') 
            form = SubscribtionForm()
        

    context = {'form':form}
    return render(request, 'base/index.html', context)
