from rest_framework import routers
from .api import JobViewSet, ApplicationViewSet
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register('api/jobs', JobViewSet, 'jobs')
router.register('api/applications', ApplicationViewSet, 'applications')


urlpatterns = router.urls + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)