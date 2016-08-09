from django.conf.urls import url
from Record import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^test/$',views.test),
    url(r'^bug/$',views.bugEdit),
]
