from unicodedata import name
from .views import *
from django.urls import path

urlpatterns = [
    path('', index, name='Home'),
    path('code/',runCode, name='runCode'),

    path('save/', saveCode, name='save-code'),
    path('All', allCode, name='all-code'),

    path('rich/', Rich, name='rich-text'),

    path('drop/', DropImg, name='Drop'),

    path('upload/',dropUpload, name='Drop_zone')

]