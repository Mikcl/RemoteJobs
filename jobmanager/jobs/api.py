from jobs.models import Job, Application
from rest_framework import viewsets, permissions
from rest_framework.response import Response

from .serializers import JobSerializer, ApplicationSerializer

# Create Viewset - CRUD api without explicit methods (use default api)

class JobViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
        # permissions.IsAuthenticated
    ]
    serializer_class = JobSerializer

    def get_queryset(self):
        return Job.objects.all()
        # self.request.user.jobs.all()

    def perform_create(self, serializer):
        # save job owner when create job
        serializer.save(owner=self.request.user)
        return super().perform_create(serializer)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        original_data = serializer.data
        return Response(original_data)

class ApplicationViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ApplicationSerializer

    def get_queryset(self):
        query_set = Application.objects.all()
        job = self.request.query_params.get('job', None)
        if job:
            query_set = query_set.filter(job=job)
        return query_set
