from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import gameplayer_info
from django.core.cache import cache
import datetime
import json
# Create your views here.
def index(request):
    return render(request, 'index2.html')
def index1(request):
    return render(request, 'index.html')
def index2(request):
    return render(request, 'login.html')
@csrf_exempt
def save_info_first(request):
    if request.method == 'POST':
        try:
            # Parse JSON data from the request
            infoFirst = json.loads(request.body)

            cache.set('info_script', infoFirst)
            return JsonResponse({'status': 'success'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})

@csrf_exempt
def save_player(request):
    if request.method == 'POST':
        try:
            # Parse JSON data from the request
            player_data = json.loads(request.body)
            # Lấy dữ liệu từ cache sử dụng tên khóa 'my_custom_key_for_script1'
            infoFirst = cache.get('info_script', {})
            # Save player data to the database
            combined_data = {**infoFirst,**player_data}
            print(combined_data)
            player =  gameplayer_info(**combined_data)
            player.save()
            return JsonResponse({'status': 'success'})
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': str(e)})

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.cache import cache

@csrf_exempt
def send_data_to_script(request):
    try:
        # Lấy dữ liệu từ cache
        data_name = cache.get('info_script', {})
        data_to_send = data_name.get('name','')
        print(data_to_send)
        # Gửi dữ liệu dưới dạng JSON trong HTTP response
        return JsonResponse({'status': 'success', 'value': data_to_send})
    except Exception as e:
        return JsonResponse({'status': 'error', 'message': str(e)})
