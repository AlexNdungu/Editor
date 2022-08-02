import code
from fileinput import close
from multiprocessing import context
from re import S
from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
import random
import string
import os
from pathlib import Path
import subprocess 
from .forms import *
from .models import *

# Create your views here.

def index(request):
    return render(request, 'index.html')

def runCode(request):

    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        extension = request.POST.get('language')
        code = request.POST.get('code')


        #create a random number to be used to save the file

        randomNo = ''.join(random.SystemRandom().choice(string.ascii_letters + string.digits) for _ in range(10))

        print(randomNo)

        #creating file in temp folder

        path1 = os.getcwd()
        path = path1 + "\\temp"

        #thie is the name of the file
        file_name = randomNo + "." + extension


        #lets create a file in this path
        my_file = open(os.path.join(path, file_name), 'w')

        #lets write into the file

        print(my_file)

        #newFile = open(my_file, 'w')

        my_file.writelines(code)

        my_file.close()

        #Now lets run the code

        if(extension == 'py'):
            file = "%s"%file_name
            new_myFile = "temp\%s"%file

            #result = os.system("python %s" %new_myFile)
           # print(result)

           # result2 = subprocess.run("python %s" %new_myFile)
            #print(result2)

            result3 = subprocess.check_output("python %s" %new_myFile, shell = True)
            result4 = (result3.decode("utf-8"))

        return JsonResponse({'result4':result4})


#This is whre the edit code willbe savong code


def saveCode(request):

    codeForm = SaveCode(request.POST or None)

    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        if request.method == 'POST':

            language = request.POST['language']

            ingt_lang = int(language)

            lang_instance = Languages.objects.get(pk=ingt_lang)

            fileName = request.POST['fileName']
            code = request.POST['code']
            current_user = request.user

            Code.objects.create(user=current_user,language=lang_instance,code_name=fileName,code=code)

            #new_code.save()

            return JsonResponse({'language':language})

    context = {
        'codeForm':codeForm
    }
    
    return render(request, 'code.html', context)


def allCode(request):

    theCode = Code.objects.all()

    context = {
        'theCode':theCode
    }

    return render(request, 'all.html', context)

     

#Rich Text Editor

def Rich(request):
    
    return render(request, 'rich.html')     


def DropImg(request):

    return render(request, 'drop.html')    


def dropUpload(request):
    #print(request.FILES)

    if request.method == 'POST':

        my_file = request.FILES.get('file')

        Drop.objects.create(image=my_file)

        return HttpResponse('')
    return JsonResponse({'post':'false'})    
