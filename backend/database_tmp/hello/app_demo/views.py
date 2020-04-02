from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
"""
 django.http模块中定义了HttpResponse 对象的API
 作用：不需要调用模板直接返回数据
 HttpResponse属性：
    content: 返回内容,字符串类型
    charset: 响应的编码字符集
    status_code: HTTP响应的状态码
"""

"""
hello 为一个视图函数，每个视图函数必须第一个参数为request。哪怕用不到request。
request是django.http.HttpRequest的一个实例
"""

def hello(request):
    # context_dict={'boldmessage':"CCC,, CCC,, BB"}
    # return render(request,'rango/rango.html',context=context_dict)
    return HttpResponse("AAAAAAAAAAAA")