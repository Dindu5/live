
from django.shortcuts import render, redirect
from .forms import SubscribtionForm
from django.contrib import messages

from django.conf import settings
from django.template.loader import render_to_string
from django.core.mail import EmailMessage

from emaildb.settings import EMAIL_HOST_USER


def home(request):
   
    form = SubscribtionForm()

    

    if request.method == 'POST':
        # print('Printing Post:', request.POST)

        form = SubscribtionForm(request.POST)
        if form.is_valid():
            

            subject = 'Enabled Notification'
            message = 'Hello, You are recieving this mail because you have opted to be notified when glowskin app is ready. We would also send you a special guide on how to use the application when it is released. Savor the anticipation GlowSkin'
            recepient = str(form['email'].value())
            EmailMessage(subject, message, EMAIL_HOST_USER, [recepient])
            form.save()

            # name = form.cleaned_data['name']
            # email = form.cleaned_data['email']
            # template = render_to_string('base/email_template.html', {'name':name})
            #messages.success(request, 'You have successfully subscribed, a confirmation mail will be sent to you shortly')
            # email = EmailMessage(
                #'Notification Confirmation',
                #template,
                #settings.EMAIL_HOST_USER,
                #[email],
            #)
            form = SubscribtionForm()
        else : messages.error(request, 'Opps, Something went wrong')

    context = {'form':form}
    return render(request, 'base/index.html', context)
