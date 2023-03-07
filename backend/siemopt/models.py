from django.db import models
from datetime import datetime

class siemopt(models.Model):
    title=models.CharField(max_length=150)
    description=models.CharField(max_length=500)
    completed=models.BooleanField(default=False)

class AlertSummaryData(models.Model):
    id = models.IntegerField(primary_key=True, blank=False, null=False)
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


    def fidelity_float(self):
        return float(self.fidelity)
    
    

        # string representation of the class
    def __str__(self):
 
        #it will return the title
        return self.title
    
class IngestionVolumeData(models.Model):
    id = models.IntegerField(primary_key=True, blank=False, null=False)
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
        
    def datetime_format(self):
        return datetime.strptime(self.date, '%Y-%m-%dT%H:%M:%S.%f%z').astimezone(('America/New_York')).strftime('%I:%M %p')
    
    class CostAnalysisData(models.Model):
    cost_analysis_id = models.IntegerField(db_column='Cost_Analysis_id', primary_key=True, blank=False, null=False)
    Table = models.TextField(db_column='Table', blank=True, null=True)
    Source = models.TextField(db_column='Source', blank=True, null=True)
    Billable = models.BooleanField(db_column='Billable', default=False)
    Cost = models.FloatField(db_column='Cost', blank=True, null=True)
    Value = models.IntegerField(db_column='Value', blank=True, null=True)
    ROI = models.FloatField(db_column='ROI', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Cost_Analysis_Data'
   
        
    def __str__(self):
 
        #it will return the title
        return self.title    
   
