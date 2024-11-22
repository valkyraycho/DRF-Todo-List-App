from django.urls import path

from . import views

urlpatterns = [
    path("todos/", views.TodoListCreateView.as_view()),
    path("todos/<int:pk>", views.TodoRetrieveUpdateDestroyView.as_view()),
]
