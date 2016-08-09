from django import forms

class RecordForm(forms.Form):
    title = forms.CharField(max_length=50)
    title1 = forms.CharField(label="测试title",error_messages={"required":"这个项必填"},max_length=50)

