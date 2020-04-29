define(["knockout"], function (ko) {
  const CriteriaTypes = {
    DEMOGRAPHIC: "Demographic",
    CONDITION_ERA: "ConditionEra",
    CONDITION_OCCURRENCE: "ConditionOccurrence",
    DEATH: "Death",
    DEVICE_EXPOSURE: "DeviceExposure",
    DOSE_ERA: "DoseEra",
    DRUG_ERA: "DrugEra",
    DRUG_EXPOSURE: "DrugExposure",
    LOCATION_REGION: "LocationRegion",
    MEASUREMENT: "Measurement",
    OBSERVATION: "Observation",
    OBSERVATION_PERIOD: "ObservationPeriod",
    PAYER_PLAN_PERIOD: "PayerPlanPeriod",
    PROCEDURE_OCCURRENCE: "ProcedureOccurrence",
    SPECIMEN: "Specimen",
    VISIT: "VisitOccurrence",
    GROUP: "Group",
  };

  const criteria = {
    addConditionEra: {
      title: 'const.eventsList.addConditionEra.title',
      defaultTitle: 'Add Condition Era',
      descriptionInitial: 'const.eventsList.addConditionEra.desc_initial',
      defaultDescriptionInitial: 'Find patients with specific diagosis era.',
      descriptionCensoring: 'const.eventsList.addConditionEra.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on diagosis era.',
      descriptionGroup: 'const.eventsList.addConditionEra.desc_group',
      defaultDescriptionGroup: 'Find patients with specific condition era.',
    },
    addConditionOccurrence: {
      title: 'const.eventsList.addConditionOccurrence.title',
      defaultTitle: 'Add Condition Occurrence',
      descriptionInitial: 'const.eventsList.addConditionOccurrence.desc_initial',
      defaultDescriptionInitial: 'Find patients with specific diagnoses.',
      descriptionCensoring: 'const.eventsList.addConditionOccurrence.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on diagnoses.',
      descriptionGroup: 'const.eventsList.addConditionOccurrence.desc_group',
      defaultDescriptionGroup: 'Find patients with specific conditions.',
    },
    addDeath: {
      title: 'const.eventsList.addDeath.title',
      defaultTitle: 'Add Death',
      descriptionInitial: 'const.eventsList.addDeath.desc_initial',
      defaultDescriptionInitial: 'Find patients based on death.',
      descriptionCensoring: 'const.eventsList.addDeath.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on  death.',
      descriptionGroup: 'const.eventsList.addDeath.desc_group',
      defaultDescriptionGroup: 'Find patients based on death.',
    },
    addDeviceExposure: {
      title: 'const.eventsList.addDeviceExposure.title',
      defaultTitle: 'Add Device Exposure',
      descriptionInitial: 'const.eventsList.addDeviceExposure.desc_initial',
      defaultDescriptionInitial: 'Find patients based on device exposure.',
      descriptionCensoring: 'const.eventsList.addDeviceExposure.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on  device exposure.',
      descriptionGroup: 'const.eventsList.addDeviceExposure.desc_group',
      defaultDescriptionGroup: 'Find patients based on device exposure.',
    },
    addDoseEra: {
      title: 'const.eventsList.addDoseEra.title',
      defaultTitle: 'Add Dose Era',
      descriptionInitial: 'const.eventsList.addDoseEra.desc_initial',
      defaultDescriptionInitial: 'Find patients with dose eras.',
      descriptionCensoring: 'const.eventsList.addDoseEra.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on dose eras.',
      descriptionGroup: 'const.eventsList.addDoseEra.desc_group',
      defaultDescriptionGroup: 'Find patients with dose eras.',
    },
    addDrugEra: {
      title: 'const.eventsList.addDrugEra.title',
      defaultTitle: 'Add Drug Era',
      descriptionInitial: 'const.eventsList.addDrugEra.desc_initial',
      defaultDescriptionInitial: 'Find patients with with exposure to drugs over time.',
      descriptionCensoring: 'const.eventsList.addDrugEra.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on drugs over time.',
      descriptionGroup: 'const.eventsList.addDrugEra.desc_group',
      defaultDescriptionGroup: 'Find patients with drug eras.',
    },
    addDrugExposure: {
      title: 'const.eventsList.addDrugExposure.title',
      defaultTitle: 'Add Drug Exposure',
      descriptionInitial: 'const.eventsList.addDrugExposure.desc_initial',
      defaultDescriptionInitial: 'Find patients with exposure to specific drugs or drug classes.',
      descriptionCensoring: 'const.eventsList.addDrugExposure.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on exposure to specific drugs or drug classes.',
      descriptionGroup: 'const.eventsList.addDrugExposure.desc_group',
      defaultDescriptionGroup: 'Find patients with exposure to specific drugs or drug classes.',
    },
    addMeasurement: {
      title: 'const.eventsList.addMeasurement.title',
      defaultTitle: 'Add Measurement',
      descriptionInitial: 'const.eventsList.addMeasurement.desc_initial',
      defaultDescriptionInitial: 'Find patients based on Measurement.',
      descriptionCensoring: 'const.eventsList.addMeasurement.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on Measurement.',
      descriptionGroup: 'const.eventsList.addMeasurement.desc_group',
      defaultDescriptionGroup: 'Find patients based on measurements.',
    },
    addObservation: {
      title: 'const.eventsList.addObservation.title',
      defaultTitle: 'Add Observation',
      descriptionInitial: 'const.eventsList.addObservation.desc_initial',
      defaultDescriptionInitial: 'Find patients based on Observation Period.',
      descriptionCensoring: 'const.eventsList.addObservation.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on lab tests or other observations.',
      descriptionGroup: 'const.eventsList.addObservation.desc_group',
      defaultDescriptionGroup: 'Find patients based on observations.',
    },
    addObservationPeriod: {
      title: 'const.eventsList.addObservationPeriod.title',
      defaultTitle: 'Add Observation Period',
      descriptionInitial: 'const.eventsList.addObservationPeriod.desc_initial',
      defaultDescriptionInitial: 'Find patients based on observations.',
      descriptionGroup: 'const.eventsList.addObservationPeriod.desc_group',
      defaultDescriptionGroup: 'Find patients based on observation periods.',
    },
    addPayerPlanPeriod: {
      title: 'const.eventsList.addPayerPlanPeriod.title',
      defaultTitle: 'Add Payer Plan Period',
      descriptionInitial: 'const.eventsList.addPayerPlanPeriod.desc_initial',
      defaultDescriptionInitial: 'Find patients based on Payer Plan Period.',
      descriptionCensoring: 'const.eventsList.addPayerPlanPeriod.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on Payer Plan Period.',
      descriptionGroup: 'const.eventsList.addPayerPlanPeriod.desc_group',
      defaultDescriptionGroup: 'Find patients based on Payer Plan Period.',
    },
    addProcedureOccurrence: {
      title: 'const.eventsList.addProcedureOccurrence.title',
      defaultTitle: 'Add Procedure Occurrence',
      descriptionInitial: 'const.eventsList.addProcedureOccurrence.desc_initial',
      defaultDescriptionInitial: 'Find patients that experienced a specific procedure.',
      descriptionCensoring: 'const.eventsList.addProcedureOccurrence.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on procedures.',
      descriptionGroup: 'const.eventsList.addProcedureOccurrence.desc_group',
      defaultDescriptionGroup: 'Find patients that experienced a specific procedure.',
    },
    addSpecimen: {
      title: 'const.eventsList.addSpecimen.title',
      defaultTitle: 'Add Specimen',
      descriptionInitial: 'const.eventsList.addSpecimen.desc_initial',
      defaultDescriptionInitial: 'Find patients based on Specimen.',
      descriptionCensoring: 'const.eventsList.addSpecimen.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on Specimen.',
      descriptionGroup: 'const.eventsList.addSpecimen.desc_group',
      defaultDescriptionGroup: 'Find patients based on visit information.',
    },
    addVisit: {
      title: 'const.eventsList.addVisit.title',
      defaultTitle: 'Add Visit',
      descriptionInitial: 'const.eventsList.addVisit.desc_initial',
      defaultDescriptionInitial: 'Find patients based on visit information.',
      descriptionCensoring: 'const.eventsList.addVisit.desc_censoring',
      defaultDescriptionCensoring: 'Exit cohort based on visit information.',
      descriptionGroup: 'const.eventsList.addVisit.desc_group',
      defaultDescriptionGroup: 'Find patients based on visit information.',
      titleOccurrence: 'const.eventsList.addVisit.title_occurrence',
      defaultTitleOccurrence: 'Add Visit',
      descriptionOccurrence: 'const.eventsList.addVisit.desc_occurrence',
      defaultDescriptionOccurrence: 'Filter Condition Occurrences based on visit occurrence of diagnosis.',
      titleDevice: 'const.eventsList.addVisit.title_deviceexposure',
      defaultTitleDevice: 'Add Visit Criteria',
      descriptionDevice: 'const.eventsList.addVisit.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures based on visit occurrence of exposure.',
      titleDrugexposure: 'const.eventsList.addVisit.title_drugexposure',
      defaultTitleDrugexposure: 'Add Visit Criteria',
      descriptionDrugexposure: 'const.eventsList.addVisit.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures based on visit occurrence of drug exposure.',
      titleMeasurement: 'const.eventsList.addVisit.title_measurement',
      defaultTitleMeasurement: 'Add Visit Criteria',
      descriptionMeasurement: 'const.eventsList.addVisit.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements based on visit occurrence of measurement.',
      titleObservation: 'const.eventsList.addVisit.title_observation',
      defaultTitleObservation: 'Add Visit Criteria',
      descriptionObservation: 'const.eventsList.addVisit.desc_observation',
      defaultDescriptionObservation: 'Filter Observations based on visit occurrence of observation.',
      titleProcedureoccurrence: 'const.eventsList.addVisit.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Visit Criteria',
      descriptionProcedureoccurrence: 'const.eventsList.addVisit.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence: 'Filter Procedure Occurrences based on visit occurrence of procedure.',
    },
    // attributes
    addFirstDiagnosis: {
      titleEra: 'const.eventsList.addFirstDiagnosis.title_era',
      defaultTitleEra: 'Add First Diagnosis Criteria',
      descriptionEra: 'const.eventsList.addFirstDiagnosis.desc_era',
      defaultDescriptionEra: 'Limit Condition Eras to first diagnosis era in history.',
      titleOccurrence: 'const.eventsList.addFirstDiagnosis.title_occurrence',
      defaultTitleOccurrence: 'Add First Diagnosis',
      descriptionOccurrence: 'const.eventsList.addFirstDiagnosis.desc_occurrence',
      defaultDescriptionOccurrence: 'Limit Condition Occurrences to new diagnosis.',
      titleDevice: 'const.eventsList.addFirstDiagnosis.title_deviceexposure',
      defaultTitleDevice: 'Add First Exposure Criteria',
      descriptionDevice: 'const.eventsList.addFirstDiagnosis.desc_deviceexposure',
      defaultDescriptionDevice: 'Limit Device Exposures to first exposure in history.',
      titleDose: 'const.eventsList.addFirstDiagnosis.title_dose',
      defaultTitleDose: 'Add First Exposure Criteria',
      descriptionDose: 'const.eventsList.addFirstDiagnosis.desc_dose',
      defaultDescriptionDose: 'Limit Dose Era to new exposure.',
      titleDrug: 'const.eventsList.addFirstDiagnosis.title_drug',
      defaultTitleDrug: 'Add First Exposure Criteria',
      descriptionDrug: 'const.eventsList.addFirstDiagnosis.desc_drug',
      defaultDescriptionDrug: 'Limit Drug Eras to first exposure in history.',
      titleDrugexposure: 'const.eventsList.addFirstDiagnosis.title_drugexposure',
      defaultTitleDrugexposure: 'Add First Exposure Criteria',
      descriptionDrugexposure: 'const.eventsList.addFirstDiagnosis.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Limit Drug Exposures to the first exposure in history.',
      titleMeasurement: 'const.eventsList.addFirstDiagnosis.title_measurement',
      defaultTitleMeasurement: 'Add First Measure Criteria',
      descriptionMeasurement: 'const.eventsList.addFirstDiagnosis.desc_measurement',
      defaultDescriptionMeasurement: 'Limit Measures to first occurrence in history.',
      titleObservation: 'const.eventsList.addFirstDiagnosis.title_observation',
      defaultTitleObservation: 'Add First Observation Criteria',
      descriptionObservation: 'const.eventsList.addFirstDiagnosis.desc_observation',
      defaultDescriptionObservation: 'Limit Observations to the first occurrence.',
      titleObservationperiod: 'const.eventsList.addFirstDiagnosis.title_observationperiod',
      defaultTitleObservationperiod: 'First Observation Period Criteria',
      descriptionObservationperiod: 'const.eventsList.addFirstDiagnosis.desc_observationperiod',
      defaultDescriptionObservationperiod: 'Limit Observation Period to first period in history.',
      titlePayerplan: 'const.eventsList.addFirstDiagnosis.title_payerplan',
      defaultTitlePayerplan: 'First Payer Plan Period Criteria',
      descriptionPayerplan: 'const.eventsList.addFirstDiagnosis.desc_payerplan',
      defaultDescriptionPayerplan: 'Limit Payer Plan Period to first period in history.',
      titleProcedureoccurrence: 'const.eventsList.addFirstDiagnosis.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add First Procedure Criteria',
      descriptionProcedureoccurrence: 'const.eventsList.addFirstDiagnosis.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence: 'Limit Procedure Occurrences to first procedure in history.',
      titleSpecimen: 'const.eventsList.addFirstDiagnosis.title_specimen',
      defaultTitleSpecimen: 'Add First Occurrence Criteria',
      descriptionSpecimen: 'const.eventsList.addFirstDiagnosis.desc_specimen',
      defaultDescriptionSpecimen: 'Limit Specimen to the first occurrence in history.',
      titleVisit: 'const.eventsList.addFirstDiagnosis.title_visit',
      defaultTitleVisit: 'Add First Visit Criteria',
      descriptionVisit: 'const.eventsList.addFirstDiagnosis.desc_visit',
      defaultDescriptionVisit: 'Limit Visit Occurrences to the first visit.',
    },
    addAge: {
      titleOccurrence: 'const.eventsList.addAge.title_occurrence',
      defaultTitleOccurrence: 'Add Age at Occurrence',
      descriptionOccurrence: 'const.eventsList.addAge.desc_occurrence',
      defaultDescriptionOccurrence: 'Filter Condition Occurrences by age at occurrence.',
      titleDeath: 'const.eventsList.addAge.title_death',
      defaultTitleDeath: 'Add Age at Occurrence Criteria',
      descriptionDeath: 'const.eventsList.addAge.desc_death',
      defaultDescriptionDeath: 'Filter by age at death.',
      titleDevice: 'const.eventsList.addAge.title_deviceexposure',
      defaultTitleDevice: 'Add Age at Occurrence Criteria',
      descriptionDevice: 'const.eventsList.addAge.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures by age at occurrence.',
      titleDrugexposure: 'const.eventsList.addAge.title_drugexposure',
      defaultTitleDrugexposure: 'Add Age at Occurrence Criteria',
      descriptionDrugexposure: 'const.eventsList.addAge.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by age at occurrence.',
      titleMeasurement: 'const.eventsList.addAge.title_measurement',
      defaultTitleMeasurement: 'Add Age at Occurrence Criteria',
      descriptionMeasurement: 'const.eventsList.addAge.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by age at occurrence.',
      titleObservation: 'const.eventsList.addAge.title_observation',
      defaultTitleObservation: 'Add Age at Occurrence Criteria',
      descriptionObservation: 'const.eventsList.addAge.desc_observation',
      defaultDescriptionObservation: 'Filter Condition Occurrences by age at occurrence.',
      titleProcedureoccurrence: 'const.eventsList.addAge.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Age at Occurrence Criteria',
      descriptionProcedureoccurrence: 'const.eventsList.addAge.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence: 'Filter Procedure Occurrences by age at occurrence.',
      titleSpecimen: 'const.eventsList.addAge.title_specimen',
      defaultTitleSpecimen: 'Add Age at Occurrence Criteria',
      descriptionSpecimen: 'const.eventsList.addAge.desc_specimen',
      defaultDescriptionSpecimen: 'Filter specimens by age at occurrence.',
      titleVisit: 'const.eventsList.addAge.title_visit',
      defaultTitleVisit: 'Add Age at Occurrence Criteria',
      descriptionVisit: 'const.eventsList.addAge.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences by age at occurrence.',
    },
    addAgeAtStart: {
      titleEra: 'const.eventsList.addAgeAtStart.title_era',
      defaultTitleEra: 'Add Age at Era Start Criteria',
      descriptionEra: 'const.eventsList.addAgeAtStart.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras by age at era start.',
      titleDose: 'const.eventsList.addAgeAtStart.title_dose',
      defaultTitleDose: 'Add Age at Era Start Criteria',
      descriptionDose: 'const.eventsList.addAgeAtStart.desc_dose',
      defaultDescriptionDose: 'Filter Drug Eras by age at era start.',
      titleDrug: 'const.eventsList.addAgeAtStart.title_drug',
      defaultTitleDrug: 'Add Age at Era Start Criteria',
      descriptionDrug: 'const.eventsList.addAgeAtStart.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras by age at era start.',
      titleObservationperiod: 'const.eventsList.addAgeAtStart.title_observationperiod',
      defaultTitleObservationperiod: 'Add Age at Start Criteria',
      descriptionObservationperiod: 'const.eventsList.addAgeAtStart.desc_observationperiod',
      defaultDescriptionObservationperiod: 'Filter Periods by Age at Start.',
      titlePayerplan: 'const.eventsList.addAgeAtStart.title_payerplan',
      defaultTitlePayerplan: 'Add Age at Start Criteria',
      descriptionPayerplan: 'const.eventsList.addAgeAtStart.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Periods by Age at Start.',
    },
    addAgeAtEnd: {
      titleEra: 'const.eventsList.addAgeAtEnd.title_era',
      defaultTitleEra: 'Add Age at Era End Criteria',
      descriptionEra: 'const.eventsList.addAgeAtEnd.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras by age at era end.',
      titleDose: 'const.eventsList.addAgeAtEnd.title_dose',
      defaultTitleDose: 'Add Age at Era End Criteria',
      descriptionDose: 'const.eventsList.addAgeAtEnd.desc_dose',
      defaultDescriptionDose: 'Filter Drug Eras by age at era end.',
      titleDrug: 'const.eventsList.addAgeAtEnd.title_drug',
      defaultTitleDrug: 'Add Age at Era End Criteria',
      descriptionDrug: 'const.eventsList.addAgeAtEnd.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras by age at era end.',
      titleObservationperiod: 'const.eventsList.addAgeAtEnd.title_observationperiod',
      defaultTitleObservationperiod: 'Add Age at End Criteria',
      descriptionObservationperiod: 'const.eventsList.addAgeAtEnd.desc_observationperiod',
      defaultDescriptionObservationperiod: 'Filter Periods by age at End.',
      titlePayerplan: 'const.eventsList.addAgeAtEnd.title_payerplan',
      defaultTitlePayerplan: 'Add Age at End Criteria',
      descriptionPayerplan: 'const.eventsList.addAgeAtEnd.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Periods by Age at End.',
    },
    addGender: {
      titleEra: 'const.eventsList.addGender.title_era',
      defaultTitleEra: 'Add Gender Criteria',
      descriptionEra: 'const.eventsList.addGender.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras based on Gender.',
      titleOccurrence: 'const.eventsList.addGender.title_occurrence',
      defaultTitleOccurrence: 'Add Gender',
      descriptionOccurrence: 'const.eventsList.addGender.desc_occurrence',
      defaultDescriptionOccurrence: 'Filter Condition Occurrences based on Gender.',
      titleDeath: 'const.eventsList.addGender.title_death',
      defaultTitleDeath: 'Add Gender Criteria',
      descriptionDeath: 'const.eventsList.addGender.desc_death',
      defaultDescriptionDeath: 'Filter Deaths based on Gender.',
      titleDevice: 'const.eventsList.addGender.title_deviceexposure',
      defaultTitleDevice: 'Add Gender Criteria',
      descriptionDevice: 'const.eventsList.addGender.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures based on Gender.',
      titleDose: 'const.eventsList.addGender.title_dose',
      defaultTitleDose: 'Add Gender Criteria',
      descriptionDose: 'const.eventsList.addGender.desc_dose',
      defaultDescriptionDose: 'Filter Drug Eras based on Gender.',
      titleDrug: 'const.eventsList.addGender.title_drug',
      defaultTitleDrug: 'Add Gender Criteria',
      descriptionDrug: 'const.eventsList.addGender.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras based on Gender.',
      titleDrugexposure: 'const.eventsList.addGender.title_drugexposure',
      defaultTitleDrugexposure: 'Add Gender Criteria',
      descriptionDrugexposure: 'const.eventsList.addGender.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures based on Gender.',
      titleMeasurement: 'const.eventsList.addGender.title_measurement',
      defaultTitleMeasurement: 'Add Gender Criteria',
      descriptionMeasurement: 'const.eventsList.addGender.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements based on Gender.',
      titleObservation: 'const.eventsList.addGender.title_observation',
      defaultTitleObservation: 'Add Gender Criteria',
      descriptionObservation: 'const.eventsList.addGender.desc_observation',
      defaultDescriptionObservation: 'Filter Observations based on Gender.',
      titlePayerplan: 'const.eventsList.addGender.title_payerplan',
      defaultTitlePayerplan: 'Add Gender Criteria',
      descriptionPayerplan: 'const.eventsList.addGender.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods based on Gender.',
      titleProcedureoccurrence: 'const.eventsList.addGender.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Gender Criteria',
      descriptionProcedureoccurrence: 'const.eventsList.addGender.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence: 'Filter Procedure Occurrences based on Gender.',
      titleSpecimen: 'const.eventsList.addGender.title_specimen',
      defaultTitleSpecimen: 'Add Gender Criteria',
      descriptionSpecimen: 'const.eventsList.addGender.desc_specimen',
      defaultDescriptionSpecimen: 'Filter specimens based on Gender.',

      titleVisit: 'const.eventsList.addGender.title_visit',
      defaultTitleVisit: 'Add Gender Criteria',
      descriptionVisit: 'const.eventsList.addGender.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences based on Gender.',
    },
    addDate:{
      titleDeath: 'const.eventsList.addDate.title_death',
      defaultTitleDeath: 'Add Death Date Criteria',
      descriptionDeath: 'const.eventsList.addDate.desc_death',
      defaultDescriptionDeath: 'Filter Death by Date.',
      titleMeasurement: 'const.eventsList.addDate.title_measurement',
      defaultTitleMeasurement: 'Add Measurement Date Criteria',
      descriptionMeasurement: 'const.eventsList.addDate.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by Date.',
      titleObservation: 'const.eventsList.addDate.title_observation',
      defaultTitleObservation: 'Add Observation Date Criteria',
      descriptionObservation: 'const.eventsList.addDate.desc_observation',
      defaultDescriptionObservation: 'Filter Observations by Date.',
      titleProcedureoccurrence: 'const.eventsList.addDate.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Start Date Criteria',
      descriptionProcedureoccurrence: 'const.eventsList.addDate.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence: 'Filter Procedure Occurrences by the Procedure Start Date.',
      titleSpecimen: 'const.eventsList.addDate.title_specimen',
      defaultTitleSpecimen: 'Add Specimen Date Criteria',
      descriptionSpecimen: 'const.eventsList.addDate.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimen by Date.',
    },
    addStartDate: {
      titleEra: 'const.eventsList.addStartDate.title_era',
      defaultTitleEra: 'Add Start Date Criteria',
      descriptionEra: 'const.eventsList.addStartDate.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras by the Era Start Date.',
      titleOccurrence: 'const.eventsList.addStartDate.title_occurrence',
      defaultTitleOccurrence: 'Add Condition Start Date',
      descriptionOccurrence: 'const.eventsList.addStartDate.desc_occurrence',
      defaultDescriptionOccurrence: 'Filter Condition Occurrences by the Condition Start Date.',
      titleDevice: 'const.eventsList.addStartDate.title_deviceexposure',
      defaultTitleDevice: 'Add Start Date Criteria',
      descriptionDevice: 'const.eventsList.addStartDate.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures by the Exposure Start Date.',
      titleDose: 'const.eventsList.addStartDate.title_dose',
      defaultTitleDose: 'Add Era Start Date Criteria',
      descriptionDose: 'const.eventsList.addStartDate.desc_dose',
      defaultDescriptionDose: 'Filter Dose Eras by the Era Start Date.',
      titleDrug: 'const.eventsList.addStartDate.title_drug',
      defaultTitleDrug: 'Add Era Start Date Criteria',
      descriptionDrug: 'const.eventsList.addStartDate.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras by the Era Start Date.',
      titleDrugexposure: 'const.eventsList.addStartDate.title_drugexposure',
      defaultTitleDrugexposure: 'Add Start Date Criteria',
      descriptionDrugexposure: 'const.eventsList.addStartDate.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by the Drug Exposure Start Date.',
      titleObservationperiod: 'const.eventsList.addStartDate.title_observationperiod',
      defaultTitleObservationperiod: 'Add Period Start Date Criteria',
      descriptionObservationperiod: 'const.eventsList.addStartDate.desc_observationperiod',
      defaultDescriptionObservationperiod: 'Filter Observation Periods by Start Date.',
      titlePayerplan: 'const.eventsList.addStartDate.title_payerplan',
      defaultTitlePayerplan: 'Add Period Start Date Criteria',
      descriptionPayerplan: 'const.eventsList.addStartDate.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by Start Date.',
      titleVisit: 'const.eventsList.addStartDate.title_visit',
      defaultTitleVisit: 'Add Start Date Criteria',
      descriptionVisit: 'const.eventsList.addStartDate.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences by the Condition Start Date.',
    },
    addEndDate: {
      titleEra: 'const.eventsList.addEndDate.title_era',
      defaultTitleEra: 'Add End Date Criteria',
      descriptionEra: 'const.eventsList.addEndDate.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras by the Era End Date.',
      titleOccurrence: 'const.eventsList.addEndDate.title_occurrence',
      defaultTitleOccurrence: 'Add Condition End Date',
      descriptionOccurrence: 'const.eventsList.addEndDate.desc_occurrence',
      defaultDescriptionOccurrence: 'Filter Condition Occurrences by the Condition End Date.',
      titleDevice: 'const.eventsList.addEndDate.title_deviceexposure',
      defaultTitleDevice: 'Add End Date Criteria',
      descriptionDevice: 'const.eventsList.addEndDate.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures by the Exposure End Date.',
      titleDose: 'const.eventsList.addEndDate.title_dose',
      defaultTitleDose: 'Add Era End Date Criteria',
      descriptionDose: 'const.eventsList.addEndDate.desc_dose',
      defaultDescriptionDose: 'Filter Dose Eras  by the Era End Date',
      titleDrug: 'const.eventsList.addEndDate.title_drug',
      defaultTitleDrug: 'Add Era End Date Criteria',
      descriptionDrug: 'const.eventsList.addEndDate.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras  by the Era End Date.',
      titleDrugexposure: 'const.eventsList.addEndDate.title_drugexposure',
      defaultTitleDrugexposure: 'Add End Date Criteria',
      descriptionDrugexposure: 'const.eventsList.addEndDate.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures  by the Drug Exposure End Date.',
      titleObservationperiod: 'const.eventsList.addEndDate.title_observationperiod',
      defaultTitleObservationperiod: 'Add Period End Date Criteria',
      descriptionObservationperiod: 'const.eventsList.addEndDate.desc_observationperiod',
      defaultDescriptionObservationperiod: 'Filter Observation Periods by End Date.',
      titlePayerplan: 'const.eventsList.addEndDate.title_payerplan',
      defaultTitlePayerplan: 'Add Period End Date Criteria',
      descriptionPayerplan: 'const.eventsList.addEndDate.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by End Date.',
      titleVisit: 'const.eventsList.addEndDate.title_visit',
      defaultTitleVisit: 'Add End Date Criteria',
      descriptionVisit: 'const.eventsList.addEndDate.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences  by the Condition End Date.',
    },
    addUnit: {
      titleDose: 'const.eventsList.addUnit.title_dose',
      defaultTitleDose: 'Add Dose Unit Criteria',
      descriptionDose: 'const.eventsList.addUnit.desc_dose',
      defaultDescriptionDose: 'Filter Dose Eras by the Unit.',
      titleDrugexposure: 'const.eventsList.addUnit.title_drugexposure',
      defaultTitleDrugexposure: 'Add Dose Unit Criteria',
      descriptionDrugexposure: 'const.eventsList.addUnit.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by Dose Unit.',
      titleMeasurement: 'const.eventsList.addUnit.title_measurement',
      defaultTitleMeasurement: 'Add Unit Criteria',
      descriptionMeasurement: 'const.eventsList.addUnit.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by the Unit.',
      titleObservation: 'const.eventsList.addUnit.title_observation',
      defaultTitleObservation: 'Add Unit Criteria',
      descriptionObservation: 'const.eventsList.addUnit.desc_observation',
      defaultDescriptionObservation: 'Filter Observations by Unit.',
      titleSpecimen: 'const.eventsList.addUnit.title_specimen',
      defaultTitleSpecimen: 'Add Unit Criteria',
      descriptionSpecimen: 'const.eventsList.addUnit.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimens by Unit.',
    },
    addConditonCount: {
      titleEra: 'const.eventsList.addConditonCount.title_era',
      defaultTitleEra: 'Add Era Conditon Count Criteria',
      descriptionEra: 'const.eventsList.addConditonCount.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras by the Condition Count.',
      titleDrug: 'const.eventsList.addConditonCount.title_drug',
      defaultTitleDrug: 'Add Era Exposure Count Criteria',
      descriptionDrug: 'const.eventsList.addConditonCount.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras by the Exposure Count.',
    },
    addLength: {
      titleEra: 'const.eventsList.addLength.title_era',
      defaultTitleEra: 'Add Era Length Criteria',
      descriptionEra: 'const.eventsList.addLength.desc_era',
      defaultDescriptionEra: 'Filter Condition Eras by the Era duration.',
      titleDose: 'const.eventsList.addLength.title_dose',
      defaultTitleDose: 'Add Dose Value Criteria',
      descriptionDose: 'const.eventsList.addLength.desc_dose',
      defaultDescriptionDose: 'Filter Dose Eras by the dose value.',
      titleDrug: 'const.eventsList.addLength.title_drug',
      defaultTitleDrug: 'Add Era Length Criteria',
      descriptionDrug: 'const.eventsList.addLength.desc_drug',
      defaultDescriptionDrug: 'Filter Drug Eras by the Era duration.',
      titleObservationperiod: 'const.eventsList.addLength.title_observationperiod',
      defaultTitleObservationperiod: 'Add Period Length Criteria',
      descriptionObservationperiod: 'const.eventsList.addLength.desc_observationperiod',
      defaultDescriptionObservationperiod: 'Filter Observation Periods by duration.',
      titlePayerplan: 'const.eventsList.addLength.title_payerplan',
      defaultTitlePayerplan: 'Add Period Length Criteria',
      descriptionPayerplan: 'const.eventsList.addLength.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by duration.',
      titleVisit: 'const.eventsList.addLength.title_visit',
      defaultTitleVisit: 'Add Visit Length Criteria',
      descriptionVisit: 'const.eventsList.addLength.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences by duration.',
    },
    addValue: {
      titleDose: 'const.eventsList.addValue.title_dose',
      defaultTitleDose: 'Add Dose Value Criteria',
      descriptionDose: 'const.eventsList.addValue.desc_dose',
      defaultDescriptionDose: 'Filter Dose Eras by the dose value.',
      titleMeasurement: 'const.eventsList.addValue.title_measurement',
      defaultTitleMeasurement: 'Add Value as Number Criteria',
      descriptionMeasurement: 'const.eventsList.addValue.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by Value as Number.',
      titleObservation: 'const.eventsList.addValue.title_observation',
      defaultTitleObservation: 'Add Value As Number Criteria',
      descriptionObservation: 'const.eventsList.addValue.desc_observation',
      defaultDescriptionObservation: 'Filter Observations  by the Value As Number.',
    },
    addNested: {
      titleEra: 'const.eventsList.addNested.title_era',
      defaultTitleEra: 'Add Nested Criteria...',
      descriptionEra: 'const.eventsList.addNested.desc_era',
      defaultDescriptionEra: 'Apply criteria using the condition era as the index event.',
      titleOccurrence: 'const.eventsList.addNested.title_occurrence',
      defaultTitleOccurrence: 'Add Nested Criteria...',
      descriptionOccurrence: 'const.eventsList.addNested.desc_occurrence',
      defaultDescriptionOccurrence: 'Apply criteria using the condition occurrence as the index event.',
      titleDeath: 'const.eventsList.addNested.title_death',
      defaultTitleDeath: 'Add Nested Criteria...',
      descriptionDeath: 'const.eventsList.addNested.desc_death',
      defaultDescriptionDeath: 'Apply criteria using the death occurrence as the index event.',
      titleDevice: 'const.eventsList.addNested.title_deviceexposure',
      defaultTitleDevice: 'Add Nested Criteria...',
      descriptionDevice: 'const.eventsList.addNested.desc_deviceexposure',
      defaultDescriptionDevice: 'Apply criteria using the device exposure as the index event.',
      titleDose: 'const.eventsList.addValue.title_dose',
      defaultTitleDose: 'Add Nested Criteria...',
      descriptionDose: 'const.eventsList.addValue.desc_dose',
      defaultDescriptionDose: 'Apply criteria using the dose era as the index event.',
      titleDrug: 'const.eventsList.addNested.title_drug',
      defaultTitleDrug: 'Add Nested Criteria...',
      descriptionDrug: 'const.eventsList.addNested.desc_drug',
      defaultDescriptionDrug: 'Apply criteria using the drug exposure as the index event.',
      titleDrugexposure: 'const.eventsList.addNested.title_drugexposure',
      defaultTitleDrugexposure: 'Add Nested Criteria...',
      descriptionDrugexposure: 'const.eventsList.addNested.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures based on provider specialty.',
      titleMeasurement: 'const.eventsList.addNested.title_measurement',
      defaultTitleMeasurement: 'Add Nested Criteria...',
      descriptionMeasurement: 'const.eventsList.addNested.desc_measurement',
      defaultDescriptionMeasurement: 'Apply criteria using the measurement as the index event.',
      titleObservation: 'const.eventsList.addGender.title_observation',
      defaultTitleObservation: 'Add Nested Criteria...',
      descriptionObservation: 'const.eventsList.addGender.desc_observation',
      defaultDescriptionObservation: 'Apply criteria using the observation as the index event.',
      titleObservationperiod: 'const.eventsList.addNested.title_observationperiod',
      defaultTitleObservationperiod: 'Add Nested Criteria...',
      descriptionObservationperiod: 'const.eventsList.addNested.desc_observationperiod',
      defaultDescriptionObservationperiod: 'Apply criteria using the observation period as the index event.',
      titlePayerplan: 'const.eventsList.addNested.title_payerplan',
      defaultTitlePayerplan: 'Add Nested Criteria...',
      descriptionPayerplan: 'const.eventsList.addNested.desc_payerplan',
      defaultDescriptionPayerplan: 'Apply criteria using the payer plan period as the index event.',
      titleProcedureoccurrence: 'const.eventsList.addNested.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Nested Criteria...',
      descriptionProcedureoccurrence: 'const.eventsList.addNested.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence: 'Apply criteria using the procedure occurrence as the index event.',
      titleSpecimen: 'const.eventsList.addNested.title_specimen',
      defaultTitleSpecimen: 'Add Nested Criteria...',
      descriptionSpecimen: 'const.eventsList.addNested.desc_specimen',
      defaultDescriptionSpecimen: 'Apply criteria using the specimen as the index event.',
      titleVisit: 'const.eventsList.addNested.title_visit',
      defaultTitleVisit: 'Add Nested Criteria...',
      descriptionVisit: 'const.eventsList.addNested.desc_visit',
      defaultDescriptionVisit: 'Apply criteria using the visit occurrence as the index event',
    },
    addType: {
      titleOccurrence: 'const.eventsList.addType.title_occurrence',
      defaultTitleOccurrence: 'Add Condition Type',
      descriptionOccurrence: 'const.eventsList.addType.desc_occurrence',
      defaultDescriptionOccurrence: 'Filter Condition Occurrences  by the Condition Type.',
      titleDeath: 'const.eventsList.addType.title_death',
      defaultTitleDeath: 'Add Death Type Criteria',
      descriptionDeath: 'const.eventsList.addType.desc_death',
      defaultDescriptionDeath: 'Filter by Death Type.',
      titleDevice: 'const.eventsList.addType.title_deviceexposure',
      defaultTitleDevice: 'Add Device Type Criteria',
      descriptionDevice: 'const.eventsList.addType.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures by the Exposure Type.',
      titleDrugexposure: 'const.eventsList.addType.title_drugexposure',
      defaultTitleDrugexposure: 'Add Drug Type Criteria',
      descriptionDrugexposure: 'const.eventsList.addType.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by the Drug Type.',
      titleMeasurement: 'const.eventsList.addType.title_measurement',
      defaultTitleMeasurement: 'Add Measurement Type Criteria',
      descriptionMeasurement: 'const.eventsList.addType.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by the Measurement Type.',
      titleObservation: 'const.eventsList.addType.title_observation',
      defaultTitleObservation: 'Add Observation Type Criteria',
      descriptionObservation: 'const.eventsList.addType.desc_observation',
      defaultDescriptionObservation: 'Filter Observations by the Type.',
      titleObservationperiod: 'const.eventsList.addType.title_observationperiod',
      defaultTitleObservationperiod: 'Add Period Type Criteria',
      descriptionObservationperiod: 'const.eventsList.addType.desc_observationperiod',
      defaultDescriptionObservationperiod: 'Filter Obsevation Periods by Type.',
      titleProcedureoccurrence: 'const.eventsList.addType.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Procedure Type Criteria',
      descriptionProcedureoccurrence: 'const.eventsList.addType.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence: 'Filter Procedure Occurrences  by the Procedure Type.',
      titleSpecimen: 'const.eventsList.addType.title_specimen',
      defaultTitleSpecimen: 'Add Specimen Type Criteria',
      descriptionSpecimen: 'const.eventsList.addType.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimen by the Type.',
      titleVisit: 'const.eventsList.addType.title_visit',
      defaultTitleVisit: 'Add Visit Type Criteria',
      descriptionVisit: 'const.eventsList.addType.desc_visit',
      defaultDescriptionVisit: 'Filter Condition Occurrences  by the Condition Type.',
    },
    addUserDefined: {
      titleObservationperiod: 'const.eventsList.addUserDefined.title_observationperiod',
      defaultTitleObservationperiod: '"Specify Start and End Dates',
      descriptionObservationperiod: 'const.eventsList.addUserDefined.desc_observationperiod',
      defaultDescriptionObservationperiod: 'Specify start and end date to use for the Observation Period.',
    },
    addStopReason: {
      titleOccurrence: 'const.eventsList.addStopReason.title_occurrence',
      defaultTitleOccurrence: 'Add Stop Reason',
      descriptionOccurrence: 'const.eventsList.addStopReason.desc_occurrence',
      defaultDescriptionOccurrence: 'Filter Condition Occurrences  by the Stop Reason.',
      titleDrugexposure: 'const.eventsList.addStopReason.title_drugexposure',
      defaultTitleDrugexposure: 'Add Stop Reason Criteria',
      descriptionDrugexposure: 'const.eventsList.addStopReason.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by the Stop Reason.'
    },
    addSourceConcept: {
      titleOccurrence: 'const.eventsList.addSourceConcept.title_occurrence',
      defaultTitleOccurrence: 'Add Condition Source Concept',
      descriptionOccurrence: 'const.eventsList.addSourceConcept.desc_occurrence',
      defaultDescriptionOccurrence: 'Filter Condition Occurrences  by the Condition Source Concept.',
      titleDeath: 'const.eventsList.addSourceConcept.title_death',
      defaultTitleDeath: 'Add Cause of Death Source Concept Criteria',
      descriptionDeath: 'const.eventsList.addSourceConcept.desc_death',
      defaultDescriptionDeath: 'Filter Death by the Death Source Concept.',
      titleDevice: 'const.eventsList.addSourceConcept.title_deviceexposure',
      defaultTitleDevice: 'Add Device Source Concept Criteria',
      descriptionDevice: 'const.eventsList.addSourceConcept.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures by the Device Source Concept.',
      titleMeasurement: 'const.eventsList.addSourceConcept.title_measurement',
      defaultTitleMeasurement: 'Add Measurement Source Concept Criteria',
      descriptionMeasurement: 'const.eventsList.addSourceConcept.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by the Measurement Source Concept.',
      titleObservation: 'const.eventsList.addSourceConcept.title_observation',
      defaultTitleObservation: 'Add Observation Source Concept Criteria',
      descriptionObservation: 'const.eventsList.addSourceConcept.desc_observation',
      defaultDescriptionObservation: 'Filter Observations by the Source Concept.',
      titleProcedureoccurrence: 'const.eventsList.addSourceConcept.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Procedure Source Concept Criteria',
      descriptionProcedureoccurrence: 'const.eventsList.addSourceConcept.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence: 'Filter Procedure Occurrences  by the Procedure Source Concept.',
      titleVisit: 'const.eventsList.addSourceConcept.title_visit',
      defaultTitleVisit: 'Add Visit Source Concept Criteria',
      descriptionVisit: 'const.eventsList.addSourceConcept.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences by the Visit Source Concept.',
    },
    addProviderSpecialty: {
      titleOccurrence: 'const.eventsList.addProviderSpecialty.title_occurrence',
      defaultTitleOccurrence: 'Add Provider Specialty',
      descriptionOccurrence: 'const.eventsList.addProviderSpecialty.desc_occurrence',
      defaultDescriptionOccurrence: 'Filter Condition Occurrences based on provider specialty.',
      titleDevice: 'const.eventsList.addProviderSpecialty.title_deviceexposure',
      defaultTitleDevice: 'Add Provider Specialty Criteria',
      descriptionDevice: 'const.eventsList.addProviderSpecialty.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures based on provider specialty.',
      titleDrugexposure: 'const.eventsList.addProviderSpecialty.title_drugexposure',
      defaultTitleDrugexposure: 'Add Provider Specialty Criteria',
      descriptionDrugexposure: 'const.eventsList.addProviderSpecialty.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures based on provider specialty.',
      titleMeasurement: 'const.eventsList.addProviderSpecialty.title_measurement',
      defaultTitleMeasurement: 'Add Provider Specialty Criteria',
      descriptionMeasurement: 'const.eventsList.addProviderSpecialty.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements based on provider specialty.',
      titleObservation: 'const.eventsList.addProviderSpecialty.title_observation',
      defaultTitleObservation: 'Add Provider Specialty Criteria',
      descriptionObservation: 'const.eventsList.addProviderSpecialty.desc_observation',
      defaultDescriptionObservation: 'Filter Observations based on provider specialty.',
      titleProcedureoccurrence: 'const.eventsList.addProviderSpecialty.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Provider Specialty Criteria',
      descriptionProcedureoccurrence: 'const.eventsList.addProviderSpecialty.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence: 'Filter Procedure Occurrences based on provider specialty.',
      titleVisit: 'const.eventsList.addProviderSpecialty.title_visit',
      defaultTitleVisit: 'Add Provider Specialty Criteria',
      descriptionVisit: 'const.eventsList.addProviderSpecialty.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences based on provider specialty.',
    },
    addPlaceService: {
      titleVisit: 'const.eventsList.addPlaceService.title_visit',
      defaultTitleVisit: 'Add Place of Service Criteria',
      descriptionVisit: 'const.eventsList.addPlaceService.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences based on Place of Service.',
    },
    addPlaceServiceLocation: {
      titleVisit: 'const.eventsList.addPlaceServiceLocation.title_visit',
      defaultTitleVisit: 'Add Place of Service Location Criteria',
      descriptionVisit: 'const.eventsList.addPlaceServiceLocation.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences based on where Place of Service is located.',
    },
    addPlaceServiceDistance: {
      titleVisit: 'const.eventsList.addPlaceServiceDistance.title_visit',
      defaultTitleVisit: 'Add Place of Service Location Criteria',
      descriptionVisit: 'const.eventsList.addPlaceServiceDistance.desc_visit',
      defaultDescriptionVisit: 'Filter Visit Occurrences based on distance from Place of Service to Patient.',
    },
    addUniqueId: {
      titleDevice: 'const.eventsList.addUniqueId.title_deviceexposure',
      defaultTitleDevice: 'Add Unique Id Criteria',
      descriptionDevice: 'const.eventsList.addUniqueId.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures by Device Unique Id.',
    },
    addQuantity: {
      titleDevice: 'const.eventsList.addQuantity.title_deviceexposure',
      defaultTitleDevice: 'Add Quantity Criteria',
      descriptionDevice: 'const.eventsList.addQuantity.desc_deviceexposure',
      defaultDescriptionDevice: 'Filter Device Exposures by Quantity.',
      titleDrugexposure: 'const.eventsList.addQuantity.title_drugexposure',
      defaultTitleDrugexposure: 'Add Quantity Criteria',
      descriptionDrugexposure: 'const.eventsList.addQuantity.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by Quantity.',
      titleProcedureoccurrence: 'const.eventsList.addQuantity.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Quantity Criteria',
      descriptionProcedureoccurrence: 'const.eventsList.addQuantity.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence: 'Filter Procedure Occurrences  by Quantity.',
      titleSpecimen: 'const.eventsList.addQuantity.title_specimen',
      defaultTitleSpecimen: 'Add Quantity Criteria',
      descriptionSpecimen: 'const.eventsList.addQuantity.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Observations  by the Quantity.',
    },
    addRefills: {
      titleDrugexposure: 'const.eventsList.addRefills.title_drugexposure',
      defaultTitleDrugexposure: '',
      descriptionDrugexposure: 'const.eventsList.addRefills.desc_drugexposure',
      defaultDescriptionDrugexposure: ''
    },
    addDaysSupply: {
      titleDrugexposure: 'const.eventsList.addDaysSupply.title_drugexposure',
      defaultTitleDrugexposure: 'Add Days Supply Criteria',
      descriptionDrugexposure: 'const.eventsList.addDaysSupply.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by Days Supply.'
    },
    addRoute: {
      titleDrugexposure: 'const.eventsList.addRoute.title_drugexposure',
      defaultTitleDrugexposure: 'Add Route Criteria',
      descriptionDrugexposure: 'const.eventsList.addRoute.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by Route.'
    },
    addEffective: {
      titleDrugexposure: 'const.eventsList.addEffective.title_drugexposure',
      defaultTitleDrugexposure: 'Add Effective Dose Criteria',
      descriptionDrugexposure: 'const.eventsList.addEffective.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by Effective Dose.'
    },
    addLotNumber: {
      titleDrugexposure: 'const.eventsList.addLotNumber.title_drugexposure',
      defaultTitleDrugexposure: 'Add Lot Number Criteria',
      descriptionDrugexposure: 'const.eventsList.addLotNumber.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by Lot Number.'
    },
    addSource: {
      titleDrugexposure: 'const.eventsList.addSource.title_drugexposure',
      defaultTitleDrugexposure: 'Add Drug Source Concept Criteria',
      descriptionDrugexposure: 'const.eventsList.addSource.desc_drugexposure',
      defaultDescriptionDrugexposure: 'Filter Drug Exposures by the Drug Source Concept.'
    },
    addOperator: {
      titleMeasurement: 'const.eventsList.addOperator.title_measurement',
      defaultTitleMeasurement: 'Add Operator Criteria',
      descriptionMeasurement: 'const.eventsList.addOperator.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by Operator.'
    },
    addValueAsString: {
      titleObservation: 'const.eventsList.addValueAsString.title_observation',
      defaultTitleObservation: 'Add Value As String Criteria',
      descriptionObservation: 'const.eventsList.addValueAsString.desc_observation',
      defaultDescriptionObservation: 'Filter Observations by the Value As String.',
    },
    addValueAsConcept: {
      titleMeasurement: 'const.eventsList.addValueAsConcept.title_measurement',
      defaultTitleMeasurement: 'Add Value as Concept Criteria',
      descriptionMeasurement: 'const.eventsList.addValueAsConcept.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by Value as Concept.',
      titleObservation: 'const.eventsList.addValueAsConcept.title_observation',
      defaultTitleObservation: 'Add Value as Concept Criteria',
      descriptionObservation: 'const.eventsList.addValueAsConcept.desc_observation',
      defaultDescriptionObservation: 'Filter Observations by the Value As Concept.',
    },
    addAbnormal: {
      titleMeasurement: 'const.eventsList.addAbnormal.title_measurement',
      defaultTitleMeasurement: 'Add Abnormal Result Criteria',
      descriptionMeasurement: 'const.eventsList.addAbnormal.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements to include those which fall outside of normal range.'
    },
    addQualifier: {
      titleObservation: 'const.eventsList.addQualifier.title_observation',
      defaultTitleObservation: 'Add Qualifier Criteria',
      descriptionObservation: 'const.eventsList.addQualifier.desc_observation',
      defaultDescriptionObservation: 'Filter Observations by Qualifier.',
    },
    addRangeLow: {
      titleMeasurement: 'const.eventsList.addRangeLow.title_measurement',
      defaultTitleMeasurement: 'Add Low Range Criteria',
      descriptionMeasurement: 'const.eventsList.addRangeLow.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements Low Range.'
    },
    addRangeHigh: {
      titleMeasurement: 'const.eventsList.addRangeHigh.title_measurement',
      defaultTitleMeasurement: 'Add High Range Criteria',
      descriptionMeasurement: 'const.eventsList.addRangeHigh.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by the Measurement Type.'
    },
    addRangeLowRatio: {
      titleMeasurement: 'const.eventsList.addRangeLowRatio.title_measurement',
      defaultTitleMeasurement: 'Add Low Range Ratio Criteria',
      descriptionMeasurement: 'const.eventsList.addRangeLowRatio.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by the Ratio of Value as Number to Range Low.'
    },
    addRangeHighRatio: {
      titleMeasurement: 'const.eventsList.addRangeHighRatio.title_measurement',
      defaultTitleMeasurement: 'Add High Range Ratio Criteria',
      descriptionMeasurement: 'const.eventsList.addRangeHighRatio.desc_measurement',
      defaultDescriptionMeasurement: 'Filter Measurements by the Ratio of Value as Number to Range High.'
    },
    addPayerConcept: {
      titlePayerplan: 'const.eventsList.addPayerConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Payer Concept Criteria',
      descriptionPayerplan: 'const.eventsList.addPayerConcept.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by Payer Concept.',
    },
    addPlanConcept: {
      titlePayerplan: 'const.eventsList.addPlanConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Plan Concept Criteria',
      descriptionPayerplan: 'const.eventsList.addPlanConcept.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by Plan Concept.',
    },
    addSponsorConcept: {
      titlePayerplan: 'const.eventsList.addSponsorConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Sponsor Concept Criteria',
      descriptionPayerplan: 'const.eventsList.addSponsorConcept.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by Sponsor Concept.',
    },
    addStopReasonConcept: {
      titlePayerplan: 'const.eventsList.addStopReasonConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Stop Reason Concept Criteria',
      descriptionPayerplan: 'const.eventsList.addStopReasonConcept.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by Stop Reason Concept.',
    },
    addPayerSourceConcept: {
      titlePayerplan: 'const.eventsList.addPayerSourceConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Payer Source Concept Criteria',
      descriptionPayerplan: 'const.eventsList.addPayerSourceConcept.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by Payer Source Concept.',
    },
    addPlanSourceConcept: {
      titlePayerplan: 'const.eventsList.addPlanSourceConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Plan Source Concept Criteria',
      descriptionPayerplan: 'const.eventsList.addPlanSourceConcept.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by Plan Source Concept.',
    },
    addSponsorSourceConcept: {
      titlePayerplan: 'const.eventsList.addSponsorSourceConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Sponsor Source Concept Criteria',
      descriptionPayerplan: 'const.eventsList.addSponsorSourceConcept.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by Sponsor Source Concept.',
    },
    addStopReasonSourceConcept: {
      titlePayerplan: 'const.eventsList.addStopReasonSourceConcept.title_payerplan',
      defaultTitlePayerplan: 'Add Stop Reason Source Concept Criteria',
      descriptionPayerplan: 'const.eventsList.addStopReasonSourceConcept.desc_payerplan',
      defaultDescriptionPayerplan: 'Filter Payer Plan Periods by Stop Reason Source Concept.',
    },
    addModifier: {
      titleProcedureoccurrence: 'const.eventsList.addModifier.title_procedureoccurrence',
      defaultTitleProcedureoccurrence: 'Add Modifier Criteria',
      descriptionProcedureoccurrence: 'const.eventsList.addModifier.desc_procedureoccurrence',
      defaultDescriptionProcedureoccurrence: 'Filter Procedure Occurrences  by the Modifier.',
    },
    addAnatomicSite: {
      titleSpecimen: 'const.eventsList.addAnatomicSite.title_specimen',
      defaultTitleSpecimen: 'Add Anatomic Site Criteria',
      descriptionSpecimen: 'const.eventsList.addAnatomicSite.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimens by the Anatomic Site.',
    },
    addDiseaseStatus: {
      titleSpecimen: 'const.eventsList.addDiseaseStatus.title_specimen',
      defaultTitleSpecimen: 'Add Disease Status Criteria',
      descriptionSpecimen: 'const.eventsList.addDiseaseStatus.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimens by the Disease Status.',
    },
    addSourceId: {
      titleSpecimen: 'const.eventsList.addSourceId.title_specimen',
      defaultTitleSpecimen: 'Add Source ID Criteria',
      descriptionSpecimen: 'const.eventsList.addSourceId.desc_specimen',
      defaultDescriptionSpecimen: 'Filter Specimens by the Source ID.',
    }
  }

  function setCriteria(criteria) {
    return (list = [], descriptionAttr = '', titleAttr = '') => {
      const flatList = {};
      list.map((elem) => {
        const criteriaItem = criteria[elem];
        let attrT = titleAttr.toLowerCase().replace(titleAttr.charAt(0), titleAttr.charAt(0).toUpperCase());
        let attrD = descriptionAttr.toLowerCase().replace(descriptionAttr.charAt(0), descriptionAttr.charAt(0).toUpperCase());
        flatList[elem] = {
          title: criteriaItem[`title${attrT ? attrT : ''}`],
          defaultTitle: criteriaItem[`defaultTitle${attrT ? attrT : ''}`],
          description: criteriaItem[`description${attrD ? attrD : ''}`],
          defaultDescription: criteriaItem[`defaultDescription${attrD ? attrD : ''}`]
        };
      });
  
      return flatList;
    }
  }

  const eventsList = {
    addFirstDiagnosisCriteria: {
      title: ko.i18n(
        "const.eventsList.addFirstDiagnosisCriteria.title",
        "Add First Diagnosis Criteria"
      ),
      desc: ko.i18n(
        "const.eventsList.addFirstDiagnosisCriteria.desc",
        "Limit Condition Eras to first diagnosis era in history."
      ),
    },
    addAgeAtEraStartCriteria: {
      title: ko.i18n(
        "const.eventsList.addAgeAtEraStartCriteria.title",
        "Add Age at Era Start Criteria"
      ),
      desc: ko.i18n(
        "const.eventsList.addAgeAtEraStartCriteria.desc",
        "Filter Condition Eras by age at era start."
      ),
    },
    addAgeAtEraEndCriteria: {
      title: ko.i18n(
        "const.eventsList.addAgeAtEraEndCriteria.title",
        "Add Age at Era End Criteria"
      ),
      desc: ko.i18n(
        "const.eventsList.addAgeAtEraEndCriteria.desc",
        "Filter Condition Eras by age at era end."
      ),
    },
    addGenderCriteria: {
      title: ko.i18n(
        "const.eventsList.addGenderCriteria.title",
        "Add Gender Criteria"
      ),
      desc: ko.i18n(
        "const.eventsList.addGenderCriteria.desc",
        "Filter Condition Eras based on Gender."
      ),
      desc_second: ko.i18n(
        "const.eventsList.addGenderCriteria.desc_second",
        "Filter events based on Gender."
      ),
    },
    addStartDateCriteria: {
      title: ko.i18n(
        "const.eventsList.addStartDateCriteria.title",
        "Add Start Date Criteria"
      ),
      desc: ko.i18n(
        "const.eventsList.addStartDateCriteria.desc",
        "Filter Condition Eras by the Era Start Date."
      ),
    },
    addEndDateCriteria: {
      title: ko.i18n(
        "const.eventsList.addEndDateCriteria.title",
        "Add End Date Criteria"
      ),
      desc: ko.i18n(
        "const.eventsList.addEndDateCriteria.desc",
        "Filter Condition Eras  by the Era End Date"
      ),
    },
    addEraConditonCountCriteria: {
      title: ko.i18n(
        "const.eventsList.addEraConditonCountCriteria.title",
        "Add Era Conditon Count Criteria"
      ),
      desc: ko.i18n(
        "const.eventsList.addEraConditonCountCriteria.desc",
        "Filter Condition Eras by the Condition Count."
      ),
    },
    addEraLengthCriteria: {
      title: ko.i18n(
        "const.eventsList.addEraLengthCriteria.title",
        "Add Era Length Criteria"
      ),
      desc: ko.i18n(
        "const.eventsList.addEraLengthCriteria.desc",
        "Filter Condition Eras by the Era duration."
      ),
    },
    addNestedCriteria: {
      title: ko.i18n(
        "const.eventsList.addNestedCriteria.title",
        "Add Nested Criteria..."
      ),
      desc: ko.i18n(
        "const.eventsList.addNestedCriteria.desc",
        "Apply criteria using the condition era as the index event"
      ),
    },

    addConditionEra: {
      title: "const.eventsList.addConditionEra.title",
      defaultText: "Add Condition Era",
      desc: "const.eventsList.addConditionEra.desc",
      defaultDescription: "Find patients with specific diagosis era.",
      desc_second: ko.i18n(
        "const.eventsList.addConditionEra.desc_second",
        "Exit cohort based on diagosis era."
      ),
      desc_third: ko.i18n(
        "const.eventsList.addConditionEra.third_third",
        "Find patients with specific condition era."
      ),
    },
    addConditionOccurrence: {
      title: ko.i18n(
        "const.eventsList.addConditionOccurrence.title",
        "Add Condition Occurrence"
      ),
      desc: ko.i18n(
        "const.eventsList.addConditionOccurrence.desc",
        "Find patients with specific diagnoses."
      ),
      desc_second: ko.i18n(
        "const.eventsList.addConditionOccurrence.desc_second",
        "Exit cohort based on  diagnoses"
      ),
      desc_third: ko.i18n(
        "const.eventsList.addConditionOccurrence.desc_third",
        "Find patients with specific conditions."
      ),
    },
    addDeath: {
      title: ko.i18n("const.eventsList.addDeath.title", "Add Death"),
      desc: ko.i18n(
        "const.eventsList.addDeath.desc",
        "Find patients based on death."
      ),
      desc_second: ko.i18n(
        "const.eventsList.addDeath.desc_second",
        "Exit cohort based on  death."
      ),
    },
    addDeviceExposure: {
      title: ko.i18n(
        "const.eventsList.addDeviceExposure.title",
        "Add Device Exposure"
      ),
      desc: ko.i18n(
        "const.eventsList.addDeviceExposure.desc",
        "Find patients based on device exposure."
      ),
      desc_second: ko.i18n(
        "const.eventsList.addDeviceExposure.desc_second",
        "Exit cohort based on  device exposure."
      ),
    },
    addDoseEra: {
      title: ko.i18n("const.eventsList.addDoseEra.title", "Add Dose Era"),
      desc: ko.i18n(
        "const.eventsList.addDoseEra.desc",
        "Find patients with dose eras."
      ),
      desc_second: ko.i18n(
        "const.eventsList.addDoseEra.desc_second",
        "Exit cohort based on dose eras."
      ),
    },
    addDrugEra: {
      title: ko.i18n("const.eventsList.addDrugEra.title", "Add Drug Era"),
      desc: ko.i18n(
        "const.eventsList.addDrugEra.desc",
        "Find patients with with exposure to drugs over time."
      ),
      desc_second: ko.i18n(
        "const.eventsList.addDrugEra.desc_second",
        "Exit cohort based on drugs over time."
      ),
    },
    addDrugExposure: {
      title: ko.i18n(
        "const.eventsList.addDrugExposure.title",
        "Add Drug Exposure"
      ),
      desc: ko.i18n(
        "const.eventsList.addDrugExposure.desc",
        "Find patients with exposure to specific drugs or drug classes."
      ),
      desc_second: ko.i18n(
        "const.eventsList.addDrugExposure.desc_second",
        "Exit cohort based on exposure to specific drugs or drug classes."
      ),
    },
    addMeasurement: {
      title: ko.i18n(
        "const.eventsList.addMeasurement.title",
        "Add Measurement"
      ),
      desc: ko.i18n(
        "const.eventsList.addMeasurement.desc",
        "Find patients based on Measurement."
      ),
      desc_second: ko.i18n(
        "const.eventsList.addMeasurement.desc_second",
        "Exit cohort based on Measurement."
      ),
    },
    addObservation: {
      title: ko.i18n(
        "const.eventsList.addObservation.title",
        "Add Observation"
      ),
      desc: ko.i18n(
        "const.eventsList.addObservation.desc",
        "Find patients based on lab tests or other observations.."
      ),
      desc_second: ko.i18n(
        "const.eventsList.addObservation.desc_second",
        "Exit cohort based on lab tests or other observations."
      ),
    },
    addObservationPeriod: {
      title: ko.i18n(
        "const.eventsList.addObservationPeriod.title",
        "Add Observation Period"
      ),
      desc: ko.i18n(
        "const.eventsList.addObservationPeriod.desc",
        "Find patients based on Observation Period."
      ),
    },
    addPayerPlanPeriod: {
      title: ko.i18n(
        "const.eventsList.addPayerPlanPeriod.title",
        "Add Payer Plan Period"
      ),
      desc: ko.i18n(
        "const.eventsList.addPayerPlanPeriod.desc",
        "Find patients based on Payer Plan Period."
      ),
      desc_second: ko.i18n(
        "const.eventsList.addPayerPlanPeriod.desc_second",
        "Find patients based on Payer Plan Period."
      ),
    },
    addProcedureOccurrence: {
      title: ko.i18n(
        "const.eventsList.addProcedureOccurrence.title",
        "Add Procedure Occurrence"
      ),
      desc: ko.i18n(
        "const.eventsList.addProcedureOccurrence.desc",
        "Find patients that experienced a specific procedure."
      ),
      desc_second: ko.i18n(
        "const.eventsList.addProcedureOccurrence.desc_second",
        "Exit cohort based on procedures."
      ),
    },
    addSpecimen: {
      title: ko.i18n("const.eventsList.addSpecimen.title", "Add Specimen"),
      desc: ko.i18n(
        "const.eventsList.addSpecimen.desc",
        "Find patients based on Specimen."
      ),
      desc_second: ko.i18n(
        "const.eventsList.addSpecimen.desc_second",
        "Find patients based on Specimen."
      ),
    },
    addVisit: {
      title: ko.i18n("const.eventsList.addVisit.title", "Add Visit"),
      desc: ko.i18n(
        "const.eventsList.addVisit.desc",
        "Find patients based on visit information."
      ),
      desc_second: ko.i18n(
        "const.eventsList.addVisit.desc_second",
        "Exit cohort based on visit information."
      ),
    },
    addAgeCriteria: {
      title: ko.i18n(
        "const.eventsList.addAgeCriteria.title",
        "Add Age Criteria"
      ),
      desc: ko.i18n(
        "const.eventsList.addAgeCriteria.desc",
        "Filter events based on age."
      ),
    },
    addEventStartDateCriteria: {
      title: ko.i18n(
        "const.eventsList.addEventStartDateCriteria.title",
        "Add Event Start Date Criteria"
      ),
      desc: ko.i18n(
        "const.eventsList.addEventStartDateCriteria.desc",
        "Filter Events by Start Date."
      ),
    },
    addEventEndDateCriteria: {
      title: ko.i18n(
        "const.eventsList.addEventEndDateCriteria.title",
        "Add Event End Date Criteria"
      ),
      desc: ko.i18n(
        "const.eventsList.addEventEndDateCriteria.desc",
        "Filter Events by End Date."
      ),
    },
    addRaceCriteria: {
      title: ko.i18n(
        "const.eventsList.addRaceCriteria.title",
        "Add Race Criteria"
      ),
      desc: ko.i18n(
        "const.eventsList.addRaceCriteria.desc",
        "Filter events based on Gender."
      ),
    },
    addEthnicityCriteria: {
      title: ko.i18n(
        "const.eventsList.addEthnicityCriteria.title",
        "Add Ethnicity Criteria"
      ),
      desc: ko.i18n(
        "const.eventsList.addEthnicityCriteria.desc",
        "Filter events based on Ethnicity."
      ),
    },
    addDemographic: {
      title: ko.i18n(
        "const.eventsList.addDemographic.title",
        "Add Demographic"
      ),
      desc: ko.i18n(
        "const.eventsList.addDemographic.desc",
        "Filter events based on demographic criteria."
      ),
    },
  };

  const initialEventList = [
    'addConditionEra',
    'addConditionOccurrence',
    'addDeath',
    'addDeviceExposure',
    'addDoseEra',
    'addDrugEra',
    'addDrugExposure',
    'addMeasurement',
    'addObservation',
    'addObservationPeriod',
    'addPayerPlanPeriod',
    'addProcedureOccurrence',
    'addSpecimen',
    'addVisit'
  ];
  const censoringEventList = [
    'addConditionEra',
    'addConditionOccurrence',
    'addDeath',
    'addDeviceExposure',
    'addDoseEra',
    'addDrugEra',
    'addDrugExposure',
    'addMeasurement',
    'addObservation',
    'addPayerPlanPeriod',
    'addProcedureOccurrence',
    'addSpecimen',
    'addVisit'
  ];
  const eraAttributesList = [
    'addFirstDiagnosis',
    'addAgeAtStart',
    'addAgeAtEnd',
    'addGender',
    'addStartDate',
    'addEndDate',
    'addConditonCount',
    'addLength',
    'addNested',
  ];
  const occurrenceAttributesList = [
    'addFirstDiagnosis',
    'addAge',
    'addGender',
    'addStartDate',
    'addEndDate',
    'addType',
    'addVisit',
    'addStopReason',
    'addSourceConcept',
    'addProviderSpecialty',
    'addNested',
  ];
  const deathAttributesList = [
    'addAge',
    'addGender',
    'addDate',
    'addType',
    'addSourceConcept',
    'addNested',
  ];
  const deviceAttributesList = [
    'addFirstDiagnosis',
    'addAge',
    'addGender',
    'addStartDate',
    'addEndDate',
    'addType',
    'addVisit',
    'addUniqueId',
    'addQuantity',
    'addSourceConcept',
    'addProviderSpecialty',
    'addNested',
  ];
  const doseAttributesList = [
    'addFirstDiagnosis',
    'addAgeAtStart',
    'addAgeAtEnd',
    'addGender',
    'addStartDate',
    'addEndDate',
    'addUnit',
    'addLength',
    'addValue',
    'addNested',
  ];
  const drugAttributesList = [
    'addFirstDiagnosis',
    'addAgeAtStart',
    'addAgeAtEnd',
    'addGender',
    'addStartDate',
    'addEndDate',
    'addLength',
    'addConditonCount',
    'addNested',
  ];
  const measurementAttributesList = [
    'addFirstDiagnosis',
    'addAge',
    'addGender',
    'addDate',
    'addType',
    'addVisit',
    'addOperator',
    'addValue',
    'addValueAsConcept',
    'addUnit',
    'addAbnormal',
    'addRangeLow',
    'addRangeHigh',
    'addRangeLowRatio',
    'addRangeHighRatio',
    'addProviderSpecialty',
    'addSourceConcept',
    'addNested'
  ];
  const drugexposureAttributesList = [
    'addFirstDiagnosis',
    'addAge',
    'addGender',
    'addStartDate',
    'addEndDate',
    'addType',
    'addVisit',
    'addStopReason',
    'addRefills',
    'addQuantity',
    'addDaysSupply',
    'addRoute',
    'addEffective',
    'addUnit',
    'addLotNumber',
    'addSource',
    'addProviderSpecialty',
    'addNested',
  ];
  const observationAttributesList = [
    'addFirstDiagnosis',
    'addAge',
    'addGender',
    'addDate',
    'addType',
    'addVisit',
    'addValue',
    'addValueAsString',
    'addValueAsConcept',
    'addQualifier',
    'addUnit',
    'addSourceConcept',
    'addProviderSpecialty',
    'addNested',
  ];
  const observationPeriodAttributesList = [
    'addFirstDiagnosis',
    'addAgeAtStart',
    'addAgeAtEnd',
    'addUserDefined',
    'addStartDate',
    'addEndDate',
    'addType',
    'addLength',
    'addNested',
  ];
  const payerPlanAttributesList = [
    'addFirstDiagnosis',
    'addAgeAtStart',
    'addAgeAtEnd',
    'addLength',
    'addGender',
    'addUserDefined',
    'addStartDate',
    'addEndDate',
    'addPayerConcept',
    'addPlanConcept',
    'addSponsorConcept',
    'addStopReasonConcept',
    'addPayerSourceConcept',
    'addPlanSourceConcept',
    'addSponsorSourceConcept',
    'addStopReasonSourceConcept',
    'addNested',
  ];

  const procedureOccurrenceAttributesList = [
    'addFirstDiagnosis',
    'addVisit',
    'addGender',
    'addAge',
    'addType',
    'addSourceConcept',
    'addProviderSpecialty',
    'addDate',
    'addQuantity',
    'addModifier',
    'addNested',
  ];

  const specimenAttributesList = [
    'addFirstDiagnosis',
    'addGender',
    'addNested',
    'addAge',
    'addType',
    'addDate',
    'addQuantity',
    'addUnit',
    'addAnatomicSite',
    'addDiseaseStatus',
    'addSourceId',
  ];

  const visitAttributesList = [
    'addFirstDiagnosis',
    'addGender',
    'addStartDate',
    'addEndDate',
    'addLength',
    'addAge',
    'addType',
    'addSourceConcept',
    'addProviderSpecialty',
    'addPlaceService',
    'addPlaceServiceLocation',
    'addPlaceServiceDistance',
    'addNested',
  ];

  const AddDemographic = {
    text: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.demographic.text",
        "Add Demographic"
      )
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.demographic.description",
        "Filter events based on demographic criteria."
      )
    ),
    type: CriteriaTypes.DEMOGRAPHIC,
  };
  const AddConditionEra = {
    text: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.condition-era.text",
        "Add Condition Era"
      )
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.condition-era.description",
        "Find patients with specific condition era."
      )
    ),
    type: CriteriaTypes.CONDITION_ERA,
  };
  const AddConditionOccurrence = {
    text: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.condition-occurrence.text",
        "Add Condition Occurrence"
      )
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.condition-occurrence.tedescriptionxt",
        "Find patients with specific conditions."
      )
    ),
    type: CriteriaTypes.CONDITION_OCCURRENCE,
  };
  const AddDeath = {
    text: ko.unwrap(
      ko.i18n("cc.viewEdit.design.subgroups.add.death.text", "Add Death")
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.death.description",
        "Find patients based on death."
      )
    ),
    type: CriteriaTypes.DEATH,
  };
  const AddDeviceExposure = {
    text: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.device-exposure.text",
        "Add Device Exposure"
      )
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.device-exposure.description",
        "Find patients based on device exposure."
      )
    ),
    type: CriteriaTypes.DEVICE_EXPOSURE,
  };
  const AddDoseEra = {
    text: ko.unwrap(
      ko.i18n("cc.viewEdit.design.subgroups.add.dose-era.text", "Add Dose Era")
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.dose-era.description",
        "Find patients with dose eras."
      )
    ),
    type: CriteriaTypes.DOSE_ERA,
  };
  const AddDrugEra = {
    text: ko.unwrap(
      ko.i18n("cc.viewEdit.design.subgroups.add.drug-era.text", "Add Drug Era")
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.drug-era.description",
        "Find patients with drug eras."
      )
    ),
    type: CriteriaTypes.DRUG_ERA,
  };
  const AddDrugExposure = {
    text: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.drug-exposure.text",
        "Add Drug Exposure"
      )
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.drug-exposure.description",
        "Find patients with exposure to specific drugs or drug classes."
      )
    ),
    type: CriteriaTypes.DRUG_EXPOSURE,
  };
  const AddLocationRegion = {
    text: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.location-region.text",
        "Add Location Region"
      )
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.location-region.description",
        "Find patients within geographical area."
      )
    ),
    type: CriteriaTypes.LOCATION_REGION,
  };
  const AddMeasurement = {
    text: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.measurement.text",
        "Add Measurement"
      )
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.measurement.description",
        "Find patients based on measurements."
      )
    ),
    type: CriteriaTypes.MEASUREMENT,
  };
  const AddObservation = {
    text: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.observation.text",
        "Add Observation"
      )
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.observation.description",
        "Find patients based on observations."
      )
    ),
    type: CriteriaTypes.OBSERVATION,
  };
  const AddObservationPeriod = {
    text: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.observation-period.text",
        "Add Observation Period"
      )
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.observation-period.description",
        "Find patients based on observation periods."
      )
    ),
    type: CriteriaTypes.OBSERVATION_PERIOD,
  };
  const AddPayerPlanPeriod = {
    text: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.payer-plan-period.text",
        "Add Payer Plan Period"
      )
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.payer-plan-period.description",
        "Find patients based on Payer Plan Period."
      )
    ),
    type: CriteriaTypes.PAYER_PLAN_PERIOD,
  };
  const AddProcedureOccurrence = {
    text: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.procedure-occurrence.text",
        "Add Procedure Occurrence"
      )
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.procedure-occurrence.description",
        "Find patients that experienced a specific procedure."
      )
    ),
    type: CriteriaTypes.PROCEDURE_OCCURRENCE,
  };
  const AddSpecimen = {
    text: ko.unwrap(
      ko.i18n("cc.viewEdit.design.subgroups.add.specimen.text", "Add Specimen")
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.specimen.description",
        "Find patients based on specimen."
      )
    ),
    type: CriteriaTypes.SPECIMEN,
  };
  const AddVisit = {
    text: ko.unwrap(
      ko.i18n("cc.viewEdit.design.subgroups.add.visit.text", "Visit")
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.visit.description",
        "Find patients based on visit information."
      )
    ),
    type: CriteriaTypes.VISIT,
  };
  const AddGroup = {
    text: ko.unwrap(
      ko.i18n("cc.viewEdit.design.subgroups.add.group.text", "Add Group")
    ),
    selected: false,
    description: ko.unwrap(
      ko.i18n(
        "cc.viewEdit.design.subgroups.add.group.description",
        "Add a group to combine criteria using and/or relationships."
      )
    ),
    type: CriteriaTypes.GROUP,
  };

  const AddCriteriaActions = [
    AddDemographic,
    AddConditionEra,
    AddConditionOccurrence,
    AddDeath,
    AddDeviceExposure,
    AddDoseEra,
    AddDrugEra,
    AddDrugExposure,
    AddLocationRegion,
    AddMeasurement,
    AddObservation,
    AddObservationPeriod,
    AddPayerPlanPeriod,
    AddProcedureOccurrence,
    AddSpecimen,
    AddVisit,
    AddGroup,
  ];

  const AddWindowedCriteriaActions = [
    AddDemographic,
    AddConditionEra,
    AddConditionOccurrence,
    AddDeath,
    AddDeviceExposure,
    AddDoseEra,
    AddDrugEra,
    AddDrugExposure,
    AddLocationRegion,
    AddMeasurement,
    AddObservation,
    AddObservationPeriod,
    AddPayerPlanPeriod,
    AddProcedureOccurrence,
    AddSpecimen,
    AddVisit,
  ];

  const getListCriteria = setCriteria(criteria);

  return {
    initialEventList: getListCriteria(initialEventList, 'initial'),
    censoringEventList: getListCriteria(censoringEventList, 'censoring'),
    eraAttributes: getListCriteria(eraAttributesList, 'era', 'era'),
    occurrenceAttributes: getListCriteria(occurrenceAttributesList, 'occurrence', 'occurrence'),
    deathAttributes: getListCriteria(deathAttributesList, 'death', 'death'),
    deviceAttributes: getListCriteria(deviceAttributesList, 'device', 'device'),
    doseAttributes: getListCriteria(doseAttributesList, 'dose', 'dose'),
    drugAttributes: getListCriteria(drugAttributesList, 'drug', 'drug'),
    drugexposureAttributes: getListCriteria(drugexposureAttributesList, 'drugexposure', 'drugexposure'),
    measurementAttributes: getListCriteria(measurementAttributesList, 'measurement', 'measurement'),
    observationAttributes: getListCriteria(observationAttributesList, 'observation', 'observation'),
    observationPeriodAttributes: getListCriteria(observationPeriodAttributesList, 'observationperiod', 'observationperiod'),
    payerPlanAttributes: getListCriteria(payerPlanAttributesList, 'payerplan', 'payerplan'),
    procedureOccurrenceAttributes: getListCriteria(procedureOccurrenceAttributesList, 'procedureoccurrence', 'procedureoccurrence'),
    specimenAttributes: getListCriteria(specimenAttributesList, 'specimen', 'specimen'),
    visitAttributes: getListCriteria(visitAttributesList, 'visit', 'visit'),

    CriteriaTypes,
    AddCriteriaActions,
    AddWindowedCriteriaActions,
    eventsList,
  };
});