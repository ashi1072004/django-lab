from django.urls import path
from . import views
# from django.contrib.auth import views as auth_views

urlpatterns = [
    path("register/", views.register, name="register"),
    path("login/", views.login_view, name="login"),
    # path('login/', auth_views.LoginView.as_view(template_name='users/login.html'), name='login'),
    path("logout/", views.logout_view, name="logout"),
]