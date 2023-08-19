from . import views
from django.urls import path
app_name='main'
urlpatterns = [
    # /food/
    path('',views.main,name='main'),
    path('index/',views.index_main,name='index_main'),
    path('cleaner/',views.cleaner,name="cleaner"),
]