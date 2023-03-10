# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AlertSummaryData(models.Model):
    rulename = models.CharField(db_column='RuleName', max_length=1000, blank=True, null=True)  # Field name made lowercase.
    ruleid = models.CharField(db_column='RuleId', max_length=500, blank=True, null=True)  # Field name made lowercase.
    lastmodifiedutc = models.CharField(db_column='lastModifiedUtc', max_length=100, blank=True, null=True)  # Field name made lowercase.
    falsepositives = models.IntegerField(db_column='FalsePositives', blank=True, null=True)  # Field name made lowercase.
    undetermined = models.IntegerField(db_column='Undetermined', blank=True, null=True)  # Field name made lowercase.
    benignpositives = models.IntegerField(db_column='BenignPositives', blank=True, null=True)  # Field name made lowercase.
    truepositives = models.IntegerField(db_column='TruePositives', blank=True, null=True)  # Field name made lowercase.
    activeincedents = models.IntegerField(db_column='ActiveIncedents', blank=True, null=True)  # Field name made lowercase.
    newincedents = models.IntegerField(db_column='NewIncedents', blank=True, null=True)  # Field name made lowercase.
    severity_informational = models.IntegerField(db_column='Severity.Informational', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    severity_low = models.IntegerField(db_column='Severity: Low', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    severity_medium = models.IntegerField(db_column='Severity: Medium', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    severity_high = models.IntegerField(db_column='Severity: High', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    frequency = models.IntegerField(db_column='Frequency', blank=True, null=True)  # Field name made lowercase.
    annualizedfrequency = models.DecimalField(db_column='annualizedFrequency', max_digits=10, decimal_places=3, blank=True, null=True)  # Field name made lowercase.
    fidelity = models.DecimalField(db_column='Fidelity', max_digits=10, decimal_places=3, blank=True, null=True)  # Field name made lowercase.
    recoveryvalue = models.IntegerField(db_column='RecoveryValue', blank=True, null=True)  # Field name made lowercase.
    annualizedrecoveryvalue = models.IntegerField(db_column='AnnualizedRecoveryValue', blank=True, null=True)  # Field name made lowercase.
    param_starttime = models.CharField(db_column='param_startTime', max_length=100, blank=True, null=True)  # Field name made lowercase.
    param_endtime = models.CharField(db_column='param_endTime', max_length=100, blank=True, null=True)  # Field name made lowercase.
    param_infosevcost = models.IntegerField(db_column='param_infoSevCost', blank=True, null=True)  # Field name made lowercase.
    param_lowsevcost = models.IntegerField(db_column='param_lowSevCost', blank=True, null=True)  # Field name made lowercase.
    param_medsevcost = models.IntegerField(db_column='param_medSevCost', blank=True, null=True)  # Field name made lowercase.
    param_highsevcost = models.IntegerField(db_column='param_highSevCost', blank=True, null=True)  # Field name made lowercase.
    average_severity = models.IntegerField(db_column='Average Severity', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    average_impact_cost = models.IntegerField(db_column='Average Impact Cost', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.

    class Meta:
        managed = False
        db_table = 'alert_summary_data'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class IngestionVolumeData(models.Model):
    date = models.TextField(db_column='Date', blank=True, null=True)  # Field name made lowercase.
    type = models.TextField(db_column='Type', blank=True, null=True)  # Field name made lowercase.
    sourcesystem = models.TextField(db_column='SourceSystem', blank=True, null=True)  # Field name made lowercase.
    billable = models.TextField(blank=True, null=True)
    daily_entries = models.IntegerField(blank=True, null=True)
    daily_datasize_gb = models.FloatField(db_column='daily_datasize_GB', blank=True, null=True)  # Field name made lowercase.
    daily_ingestion_cost = models.FloatField(blank=True, null=True)
    daily_retention_cost = models.FloatField(blank=True, null=True)
    daily_logging_cost = models.FloatField(blank=True, null=True)
    retention_days_param_field = models.IntegerField(db_column='Retention Days (param)', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    retention_cost_param_field = models.FloatField(db_column='Retention Cost (param)', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.
    ingestion_cost_param_field = models.FloatField(db_column='Ingestion Cost (param)', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters. Field renamed because it ended with '_'.

    class Meta:
        managed = False
        db_table = 'ingestion_volume_data'


class SiemoptSiemopt(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=500)
    completed = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'siemopt_siemopt'
