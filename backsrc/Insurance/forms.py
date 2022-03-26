from django import forms

class LoginForm(forms.Form):
    userName = forms.CharField(max_length=20,widget=forms.TextInput(attrs={'class':'form-control validate input is-medium','id':"defaultForm-email","type":"email",'placeholder':'email'}))
    password = forms.CharField(max_length=25,widget=forms.PasswordInput(attrs={'class':'form-control validate input is-medium','id':"defaultForm-pass","type":"password",'placeholder':'password'}))
    pass