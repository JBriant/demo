wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"com.hrdb.Department": {
			"liveService": false,
			"internal": false,
			"service": "hrdb",
			"fields": {
				"budget": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": false
				},
				"deptcode": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"deptid": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": true
				},
				"employees": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"type": "com.hrdb.Employee",
					"isList": true,
					"required": false
				},
				"location": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"name": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"q1": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": false
				},
				"q2": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": false
				},
				"q3": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": false
				},
				"q4": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": false
				},
				"tenantid": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": false
				}
			}
		},
		"com.hrdb.Employee": {
			"liveService": false,
			"internal": false,
			"service": "hrdb",
			"fields": {
				"birthdate": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 9,
					"fieldSubType": null,
					"type": "java.util.Date",
					"isList": false,
					"required": false
				},
				"city": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 6,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"department": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"type": "com.hrdb.Department",
					"isList": false,
					"required": false
				},
				"eid": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": true
				},
				"employee": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"type": "com.hrdb.Employee",
					"isList": false,
					"required": false
				},
				"employees": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 14,
					"fieldSubType": null,
					"type": "com.hrdb.Employee",
					"isList": true,
					"required": false
				},
				"firstname": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"lastname": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"picurl": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 10,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"state": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 7,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"street": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"tenantid": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 12,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": false
				},
				"twitterid": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 11,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"vacations": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 13,
					"fieldSubType": null,
					"type": "com.hrdb.Vacation",
					"isList": true,
					"required": false
				},
				"zip": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 8,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				}
			}
		},
		"com.hrdb.User": {
			"liveService": false,
			"internal": false,
			"service": "hrdb",
			"fields": {
				"password": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"role": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				},
				"tenantid": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": false
				},
				"userid": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": true
				},
				"username": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"type": "java.lang.String",
					"isList": false,
					"required": false
				}
			}
		},
		"com.hrdb.Vacation": {
			"liveService": false,
			"internal": false,
			"service": "hrdb",
			"fields": {
				"employee": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"type": "com.hrdb.Employee",
					"isList": false,
					"required": true
				},
				"enddate": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"type": "java.util.Date",
					"isList": false,
					"required": false
				},
				"id": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": true
				},
				"startdate": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"type": "java.util.Date",
					"isList": false,
					"required": false
				},
				"tenantid": {
					"include": [],
					"noChange": [],
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"type": "java.lang.Integer",
					"isList": false,
					"required": false
				}
			}
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"org.joda.time.LocalDateTime": {
			"internal": true,
			"primitiveType": "DateTime"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};