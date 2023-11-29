from django.urls import path
from . import views
urlpatterns = [
    path('', views.index2),
    path('4x4', views.index),
    path('9x9', views.index1),
    
    path('save_info_first', views.save_info_first, name='save_info_first'),
    path('save_player', views.save_player, name='save_player'),
    path('send_data_to_script', views.send_data_to_script, name='send_data_to_script'),
]
