from django import forms
from .models import *

class SaveCode(forms.ModelForm):
    class Meta:
        model = Code
        fields = ['language','code_name']

    #def __init__(self, *args, **kwargs):
        #super(SaveCode, self).__init__(*args, **kwargs)
        #languages = Languages.objects.all()
        #lang_ext = [(i.language, i.language) for i in languages]
        #self.fields['language'] = forms.ChoiceField(choices=lang_ext)    