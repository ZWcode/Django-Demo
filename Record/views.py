from django.shortcuts import render
from Record.models import RecordDB
from django.http import HttpResponse
from Record.forms import RecordForm

# Create your views here.
def index(request):
    return render(request,'index.html')

def bugEdit(request):
    print(request.method)

    if request.method=='POST':
        print(request.POST.get('title'), request.POST.get('textarea'), request.POST.get('select'))
        # recordform = RecordForm(request.POST)
        # if recordform.is_valid():
        #     RecordDB.objects.create(
        #         title=recordform.cleaned_data['title'],
        #         title1=recordform.cleaned_data['title1']
        #     )
        #     return HttpResponse("提交成功!!")
    else:

        pass
        # recordform = RecordForm()
    return render(request,'new-debug.html',locals())

def test(request):
    print(request.method)
    return HttpResponse("提交成功!")
    # if request.method == "POST":
    #
    #     print(request.POST.get('id'))
    #     RecordDB.objects.create(
    #         title1 = request.POST.get('id')
    #     )
    #     return HttpResponse("插入数据成功!")
    # else:
    #     print(request.GET.get('id'))
