from django.db import models

#models

class Doctor(models.Model):

    name = models.CharField(max_length=120)
    specialization = models.TextField()
    bio = models.TextField()
    qualification = models.CharField(max_length=120)
    experience = models.CharField(max_length=120)
    hospital = models.CharField(max_length=120)
    languages = models.CharField(max_length=120)
    job_type = models.CharField(max_length=120)
    contact1 = models.IntegerField()
    contact2 = models.IntegerField()
    email1 = models.CharField(max_length=120)
    email2 = models.CharField(max_length=120)
    address = models.CharField(max_length=120)
    consultation_fee = models.DecimalField(max_digits=6, decimal_places=2, null=False)

    def __str__(self):
        return self.name

