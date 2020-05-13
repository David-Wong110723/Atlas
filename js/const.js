define([
	'knockout',
	'appConfig',
	],
	(
		ko,
		config,
	) => {

		const minChartHeight = 300;
		const treemapGradient = ["#c7eaff", "#6E92A8", "#1F425A"];
		const defaultDeciles = ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80-89", "90-99"];
		const timeAtRiskCohortDate = [{
			name: ko.i18n('ple.spec.options.cohortStartDate', 'cohort start date'),
			id: false,
		  }, {
			name: ko.i18n('ple.spec.options.cohortEndDate', 'cohort end date'),
			id: true
		}];

		const relatedSourcecodesOptions = {
			Facets: [{
				'caption': ko.i18n('const.relatedSourcecodesOptions.vocabulary', 'Vocabulary'),
				'binding': function (o) {
					return o.VOCABULARY_ID;
				}
			}, {
				'caption': ko.i18n('const.relatedSourcecodesOptions.invalidReason', 'Invalid Reason'),
				'binding': function (o) {
					return o.INVALID_REASON_CAPTION;
				}
			}, {
				'caption': ko.i18n('const.relatedSourcecodesOptions.class', 'Class'),
				'binding': function (o) {
					return o.CONCEPT_CLASS_ID;
				}
			}, {
				'caption': ko.i18n('const.relatedSourcecodesOptions.domain', 'Domain'),
				'binding': function (o) {
					return o.DOMAIN_ID;
				}
			}]
		};

		const getRelatedSourcecodesColumns = (sharedState, context) => [{
			title: '',
			render: (s, p, d) => {
				var css = '';
				var icon = 'fa-shopping-cart';
				var tag = 'i'
				if (sharedState.selectedConceptsIndex[d.CONCEPT_ID] == 1) {
					css = ' selected';
				}
				if (!context.canEditCurrentConceptSet()) {
					css += ' readonly';
					tag = 'span';
				}
				return '<' + tag + ' class="fa ' + icon + ' ' + css + '"></' + tag + '>';
			},
			orderable: false,
			searchable: false
		}, {
			title:  ko.i18n('const.relatedSourcecodesColumns.id', 'Id'),
			data: 'CONCEPT_ID'
		}, {
			title: ko.i18n('const.relatedSourcecodesColumns.code', 'Code'),
			data: 'CONCEPT_CODE'
		}, {
			title: ko.i18n('const.relatedSourcecodesColumns.name', 'Name'),
			data: 'CONCEPT_NAME',
			render: function (s, p, d) {
				var valid = d.INVALID_REASON_CAPTION == 'Invalid' ? 'invalid' : '';
				return '<a class="' + valid + '" href=\"#/concept/' + d.CONCEPT_ID + '\">' + d.CONCEPT_NAME + '</a>';
			}
		}, {
			title: ko.i18n('const.relatedSourcecodesColumns.class', 'Class'),
			data: 'CONCEPT_CLASS_ID'
		}, {
			title: ko.i18n('const.relatedSourcecodesColumns.standardConceptCaption', 'Standard Concept Caption'),
			data: 'STANDARD_CONCEPT_CAPTION',
			visible: false
		}, {
			title: ko.i18n('const.relatedSourcecodesColumns.domain', 'Domain'),
			data: 'DOMAIN_ID'
		}, {
			title: ko.i18n('const.relatedSourcecodesColumns.vocabulary', 'Vocabulary'),
			data: 'VOCABULARY_ID'
		}];

		const apiPaths = {
			role: (id = '') => `${config.api.url}role/${id}`,
			roleUsers: roleId => `${config.api.url}role/${roleId}/users`,
			permissions: () => `${config.api.url}permission`,
			rolePermissions: roleId => `${config.api.url}role/${roleId}/permissions`,
			relations: (roleId, relation, ids = []) => `${config.api.url}role/${roleId}/${relation}/${ids.join('+')}`,
			jobs: () => `${config.api.url}job/execution?comprehensivePage=true`,
			job: (id) => `${config.api.url}job/${id}`,
			jobByName: (name,  type) => `${config.api.url}job/type/${type}/name/${name}`,
		};

		const applicationStatuses = {
			initializing: 'initializing',
			running: 'running',
			noSourcesAvailable: 'no-sources-available',
			failed: 'failed',
		};

		const generationStatuses = {
			STARTED: 'STARTED',
			STARTING: 'STARTING',
			RUNNING: 'RUNNING',
			COMPLETED: 'COMPLETED',
			FAILED: 'FAILED',
			PENDING: 'PENDING',
		};

		const newEntityNames = {
			characterization: ko.i18n('const.newEntityNames.characterization', 'New Characterization'),
			featureAnalysis: ko.i18n('const.newEntityNames.featureAnalysis', 'New Feature Analysis'),
			cohortDefinition: ko.i18n('const.newEntityNames.cohortDefinition', 'New Cohort Definition'),
			incidenceRate: ko.i18n('const.newEntityNames.incidenceRate', 'New Incidence Rate Analysis'),
			pathway: ko.i18n('const.newEntityNames.pathway', 'New Cohort Pathway'),
			ple: ko.i18n('const.newEntityNames.ple', 'New Population Level Estimation Analysis'),
			conceptSet: ko.i18n('const.newEntityNames.conceptSet', 'New Concept Set'),
			plp: ko.i18n('const.newEntityNames.plp', 'New Patient Level Prediction Analysis'),
		};

		const pluginTypes = {
			COHORT_REPORT: 'atlas-cohort-report',
			PROFILE_WIDGET: 'atlas-profile-widget',
		};

		const sqlDialects = {
			MSSQL: {
				title: "MSSQL Server",
				dialect: "sql server",
			},
			MSAPS: {
				title: "MS APS",
				dialect: "pdw",
			},
			ORACLE: {
				title: "Oracle",
				dialect: "oracle",
			},
			POSTGRESQL: {
				title: "PostgreSQL",
				dialect: "postgresql",
			},
			REDSHIFT: {
				title: "Amazon Red Shift",
				dialect: "redshift",
			},
			IMPALA: {
				title: "Impala",
				dialect: "impala",
			},
			NETEZZA: {
				title: "Netezza",
				dialect: "netezza",
			},
			BIGQUERY: {
				title: "Big Query",
				dialect: "bigquery",
			},
			HIVE: {
				title: "Apache Hive",
				dialect: "hive",
			},
		};

		return {
			minChartHeight,
			treemapGradient,
			defaultDeciles,
			relatedSourcecodesOptions,
			getRelatedSourcecodesColumns,
			apiPaths,
			applicationStatuses,
			generationStatuses,
			timeAtRiskCohortDate,
			newEntityNames,
			pluginTypes,
			sqlDialects,
    };
  }
);