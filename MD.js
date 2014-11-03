/* Metadati in test - attenzione con le query .. devono essere caricate per forza */
(function() {
FxApp.x1MD={
    "M_BND":{"mi":
	[ 
	 {"id":"MHD1","outdes":"Soggetti","acl":"NULL", fico:"fa-user-md"
	 ,"mi":[{"id":"MT_ASL","url":"BND_ASL_CPG","outdes":"ASL", "outdes_it":"ASL"} 
	   /*,{"id":"VM_CAT","url":"VV_CATALOG_CPG","outdes":"Lista Tabelle"}*/
	        ]  
	 }
	,{"id":"MHD2","outdes":"Farmaci","acl":"NULL", fico:"fa-h-square"
	,"mi":[{"id":"PD1","url":"PHARMA_A_N_CPG","outdes":"Farmaci Classe A"} 
	        , {"id":"PD2","url":"PHARMA_H_N_CPG","outdes":"Farmaci Classe H"}
			]
	}
	,{"id":"MHD3","outdes":"Dispositivi Medici","acl":"NULL", fico:"fa-medkit"
	,"mi":[{"id":"M1","url":"BND_CPV_CPG","outdes":"CPV"} 
	        , {"id":"VM_ESAMI","url":"BND_MEDEV_CPG","outdes_it":"Dispositivi Medici", "outdes":"Medical Devices"} 
			,{"id":"VM_FESAMI","url":"BND_CND_CPG","outdes":"CND"} 
			,{"id":"VM_COUPON","url":"BND_SOGG_CPG","outdes":"Soggetti"} 
			]
	}
	,{"id":"MHD4","outdes":"Gare","acl":"NULL", fico:"fa-hospital-o"}	
	,{"id":"VM_SVIL","outdes":"Sviluppo","acl":"SVILUPPO" 
	   ,"mi":[{"id":"VM_MD","url":"MD_CPG","outdes":"Metadati", "outdes_it":"Metadati"} 
	   //,{"id":"VM_CAT","url":"VV_CATALOG_CPG","outdes":"Lista Tabelle"}
	        ]  
	}
	]}
  , "SELFORM_BASE_TBL": { "toolbar" : { "te" : [ { "ACL" : "NULL", "outdes" : "Ricerca", "icon" : "glyphicon-search", "cmd" : "V.go()" }
     , { "outdes" : "Clear Form", "icon" : "glyphicon-repeat", "cmd" : "V.clear()" } ] } } 
	 

/* **** PHARMA_A_N  Metadati  PHARMA_H_N_QRY */	
,"PHARMA_H_N_CPG" : {
  "BODY": {
       "WCOMP": {
        "ID": "REP1",
        "COMP_CLASS": "RelReport",
        "XML_SELECTION": "PHARMA_H_N_QRY",
        "SHOW": "Y"
      }
  }
} 
,"PHARMA_A_N_CPG" : {
  "BODY": {
    "WCOMP": {
      "ID": "SF1",
      "COMP_CLASS": "SelForm",
      "XML_SELECTION": "BND_CPV_SF",
      "XSL_HTML": "SelFormCol",
      "TARGET_COMP": "REP1",
      "VANISH": "N",
      "SHOW": "Y",
      "Toolbar": "SELFORM_BASE_TBL",
      "WCOMP": {
        "ID": "REP1",
        "COMP_CLASS": "RelReport",
        "XML_SELECTION": "PHARMA_A_N_QRY",
        "SHOW": "Y"
      }
    }
  }
}

 ,"PHARMA_A_N_QRY": { "parms": {
    "title": "Farmaci di Classe A"
  },
  "DATASOURCE": "jdbc/BANDIDS",
  "RECPAG": "10",
  "QUERY": "select * from MV_AIFA_PHARMA_A_NC",
  "rf": [
    {
      "N": "2","CODE": "DITTA",
      "outdes": "DITTA",
      "outdes_en": "DITTA", "outhformat": "TEXT",
      "outlen": "100"
    },
    {
      "N": "11","CODE": "GRUPPO_EQUIVALENZA",
      "outdes": "GRUPPO_EQUIVALENZA",
      "outdes_en": "GRUPPO_EQUIVALENZA",
      "outlen": "100"
    },
    {
      "N": "10","CODE": "PREZZO",
      "outdes": "PREZZO",
      "outdes_en": "PREZZO",
      "outlen": "22", "outhformat": "TEXT",
      "outformat": "NI"
    },
    {
      "N": "9","CODE": "LISTATRASPARENZA",
      "outdes": "LISTATRASPARENZA",
      "outdes_en": "LISTATRASPARENZA",
      "outlen": "100",
      "outhformat": "TEXT"
    },
    {
      "N": "8","CODE": "M3_O",
      "outdes": "M3_O",
      "outdes_en": "M3_O",
      "outlen": "100",
      "outhformat": "TEXT"
    },
    {
      "N": "4","CODE": "PRINCIPIO_ATTIVO",
      "outdes": "PRINCIPIO_ATTIVO",
      "outdes_en": "PRINCIPIO_ATTIVO",
      "outlen": "100",
      "outhformat": "TEXT"
    },
    {
      "N": "5", "CODE": "CODICE_AIC",
      "outdes": "CODICE_AIC",
      "outdes_en": "CODICE_AIC",
      "outlen": "100",
      "outhformat": "TEXT"
    },
    {
      "N": "1", "CODE": "N",
      "outdes": "N",
      "outdes_en": "N",
      "outlen": "22",
      "outformat": "NI",
      "outhformat": "TEXT"
    },
    {
      "N": "7","CODE": "CODICE_GRUPPO_EQUIV",
      "outdes": "CODICE_GRUPPO_EQUIV",
      "outdes_en": "CODICE_GRUPPO_EQUIV",
      "outlen": "100",
      "outhformat": "TEXT"
    },
    {
      "N": "3","CODE": "DENOMINAZIONE_CONF",
      "outdes": "DENOMINAZIONE_CONF",
      "outdes_en": "DENOMINAZIONE_CONF",
      "outlen": "100",
      "outhformat": "TEXT"
    },
    {
      "N": "6","CODE": "LISTA_REGIONE",
      "outdes": "LISTA_REGIONE",
      "outdes_en": "LISTA_REGIONE",
      "outlen": "100",
      "outhformat": "TEXT"
    }
  ]
}	 

/* **** BND_ASL_CPG  Metadati  */	 
,"BND_ASL_CPG" : {
  "BODY": {
    "WCOMP": [
      {
        "ID": "WRA",
        "COMP_CLASS": "wrap",
        "q": "ASLMAP_QRY",
        "k": "ASLDATA",
        "Template": "AT_ASLMap",
        "cache": 1
      }
    ]
  }
}	 

/* **** MD_CPG  Metadati  */	 
,"MD_CPG" :  {
  "BODY": {
    "WCOMP": {
      "ID": "SF1",
      "COMP_CLASS": "SelForm",
      "XML_SELECTION": "MD_SF",
      "TARGET_COMP": "REP1",
      "VANISH": "N",
      "SHOW": "Y",
      "Toolbar": "SELFORM_BASE_TBL",
      "WCOMP": {
        "ID": "REP1",
        "COMP_CLASS": "RelReport",
        "XML_SELECTION": "MD_QRY",
        "SHOW": "N",
        "Toolbar": "MD_TBL"
      }
    }
  }
}
/* **** Toolbar per Metadati IMPORTANTE  */
,"MD_TBL" :{"toolbar":{ "te": [ 
{ "outdes": "Query MD", "cmd": "V.newQueryMD()" }
, { "outdes": "Pagina SelRep", "cmd": "V.newSelRep()" }
,{"outdes": "new Selform", "cmd": "V.newSelForm()" }
,{"outdes": "new Toolbar", "cmd": "V.newToolbar()" }
,{"outdes": "new Page Container", "cmd": "V.newWrap()" } 
]}}
/* **** Selform per Metadati (da modificare)  */
,"MD_SF" : {"queries":
             {"QNAME":"MD_QRY","groups":{"ID":1,"GOP":"AND","SF":"CODE"}}
	,"SelFields":
	  {"CODE":{"value":"","CODE":"MJ_CODE","FOP":"LIKE","outdes":"Codice","outlen":30,"outhformat":"TEXT"}}
	,"parms":{"title":"Metadata"}
}
/* **** Query Metadati Oracle Json  
,"MD_QRY" : {
  "parms":""
    ,"RECPAG":"20"
    ,"DATASOURCE": "jdbc/MDX_BNDDS"
    ,"QUERY": "select MJ_CODE, MJ_ACL, MJ_MD from MDJ"
       ,"rf":[
	      {"N":10,"CODE":"MJ_CODE","outdes":"CODE","outhformat":"text","outlen":30,"table":1,"key":"unique","required":1}
		 ,{"N":20,"CODE":"MJ_ACL","outdes":"ACL","outhformat":"text","outlen":30,"table":1}
		 ,{"N":30,"CODE":"MJ_MD","outdes":"MD","outhformat":"textarea","outlen":500,"table":1,"required":1}
		 ],"TABLES":"1"
}*/

/* **** (TODO modifica) Pagina del Profilo dell'utente */
,"VV_UPROFILE_CPG" :  { "BODY": { "WCOMP": [ 
{ "ID": "WRA", "COMP_CLASS": "wrap", "Template": "AT_UPROFILE" 
, "q": "VV_UACQUI_QRY", "k": "UACQUI" , "lazy":"0", "cache" : false
,"views": {"UEDIT" : { "template":"AT_EDPROFILE", "codeq": "VV_CURRUTENTE_QRY", "codek": "V_edUT" , "cache" : false}    }
}
]}}
,"VV_CURRUTENTE_QRY": {
    "parms": {
        "title": "Edit User data"
    },
    "DATASOURCE": "jdbc/????",
    "RECPAG": "1",
    "QUERY": "select USERID, nome, cognome, email,  ifnull(billingFirstName,nome) billingFirstName, ifnull(billingSurname,cognome) billingSurname, billingAddressStreet,  billingAddressCap, billingAddressCity, billingAddressState, billingAddressNation, billingcodicefiscale  from temp_medibox.utente where USERID='#SEC_USERID#' limit 1",
    "TABLES": "temp_medibox.utente",
    "rf": [
        {
            "N": "1",
            "CODE": "USERID",
            "outdes": "USERID",
            "outlen": "30",
            "outhformat": "TEXT","outformat": "H",
            "table": 1,
            "key": "unique"
        },
        {
            "N": "2",
            "CODE": "nome",
            "outdes": "Nome",
            "outdes_en": "Name",
            "outlen": "30",
            "outhformat": "TEXT",
            "table": 1
        },
        {
            "N": "5",
            "CODE": "cognome",
            "outdes": "Cognome",
            "outdes_en": "Surname",
            "outlen": "30",
            "outhformat": "TEXT",
            "table": 1
        },
        {
            "N": "10",
            "CODE": "email",
            "outdes": "email",
            "outlen": "20",
            "outhformat": "TEXT",
            "table": 1
        },
        {
            "N": "20",
            "CODE": "billingFirstName",
            "outdes": "Nome in Ricevuta",
            "outdes_en": "Name",
            "outlen": "20",
            "outhformat": "TEXT",
            "table": 1
        },
        {
            "N": "30",
            "CODE": "billingSurname",
            "outdes": "Cognome-Rag Sociale",
            "outdes_en": "billingSurname",
            "outlen": "100",
            "outhformat": "TEXT",
            "table": 1
        },
        {
            "N": "40",
            "CODE": "billingAddressStreet",
            "outdes": "Indirizzo",
            "outdes_en": "billingAddressStreet",
            "outlen": "30",
            "outhformat": "TEXT",
            "table": 1
        },
        {
            "N": "50",
            "CODE": "billingAddressCity",
            "outdes": "Città",
            "outdes_en": "billingAddressCity",
            "outlen": "30",
            "outhformat": "TEXT",
            "table": 1
        },
        {
            "N": "60",
            "CODE": "billingAddressCap",
            "outdes": "CAP",
            "outdes_en": "billingAddressCap",
            "outlen": "10",
            "outhformat": "TEXT",
            "table": 1
        },
        {  
            "N": "70",
            "CODE": "billingAddressState",
            "outdes": "Provincia",
            "outdes_en": "State",
            "outlen": "10",
            "outhformat": "TEXT",
            "table": 1
        },
        {  
            "N": "80",
            "CODE": "billingAddressNation",
            "outdes": "Nazione",
            "outdes_en": "billingAddressNation",
            "outlen": "10",
            "outhformat": "TEXT",
            "table": 1
        },
        {
            "N": "90",
            "CODE": "billingcodicefiscale",
            "outdes": "billingcodicefiscale",
            "outdes_en": "billingcodicefiscale",
            "outlen": "25",
            "outhformat": "TEXT",
            "table": 1
        }

    ]
}
,"BND_CPV_CPG":
{
  "BODY": {
    "WCOMP": {
      "ID": "SF1",
      "COMP_CLASS": "SelForm",
      "XML_SELECTION": "BND_CPV_SF",
      "XSL_HTML": "SelFormCol",
      "TARGET_COMP": "REP1",
      "VANISH": "N",
      "SHOW": "Y",
      "Toolbar": "SELFORM_BASE_TBL",
      "WCOMP": {
        "ID": "REP1",
        "COMP_CLASS": "RelReport",
        "XML_SELECTION": "BND_CPV_QRY",
        "SHOW": "Y"
      }
    }
  }
}
,"BND_CPV_QRY":
{
  "parms": "",
  "DATASOURCE": "jdbc/BANDIDS",
  "RECPAG": "20",
  "rf": [
    {
      "N": 10,
      "CODE": "LV",
      "outdes": "LV",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 20,
      "CODE": "CODE",
      "outdes": "CODE",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 30,
      "CODE": "DESCR",
      "outdes": "DESCR",
      "outhformat": "text",
      "outlen": 30
    }
  ]
}
,"BND_CPV_SF":
{
  "SelFields": {
    "DESCR": {
      "value": "",
      "CODE": "DESCR",
      "FOP": "CONTAINS",
      "UPPER": "Y",
      "UCASE": "Y",
      "domain": "DESCR",
      "outdes": "Description",
      "outlen": 30,
      "FIELDTYPE": "VARCHAR2",
      "outhformat": "TEXT"
    }
  },
  "parms": {
    "title": "Ricerca CPV"
  },
  "queries": {
    "QNAME": "BND_CPV_QRY",
    "groups": {
      "ID": 1,
      "GOP": "AND",
      "SF": "DESCR"
    }
  }
}

// Medical Devices
, "BND_MEDEV_CPG" : 
{
  "BODY": {
    "WCOMP": {
      "ID": "SF1",
      "COMP_CLASS": "SelForm",
      "XML_SELECTION": "BND_MEDEV_SF",
      "XSL_HTML": "SelFormCol",
      "TARGET_COMP": "REP1",
      "VANISH": "N",
      "SHOW": "Y",
      "Toolbar": "SELFORM_BASE_TBL",
      "WCOMP": {
        "ID": "REP1",
        "COMP_CLASS": "RelReport",
        "XML_SELECTION": "BND_MEDEV_QRY",
        "SHOW": "Y"
      }
    }
  }
}
, "BND_MEDEV_QRY":
{
  "parms": {
    "rtitle": "Medical Device",
    "rtitle_it": "Dispositivi Medici"
  },
  "DATASOURCE": "jdbc/BANDIDS",
  "RECPAG": "25",
  "rf": [
    {
      "N": 10,
      "CODE": "ID",
      "outdes": "ID",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 20,
      "CODE": "CLASSIFICAZIONE_CND",
      "outdes": "CLASSIFICAZIONE_CND",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 30,
      "CODE": "DESCRIZIONE_CND",
      "outdes": "DESCRIZIONE_CND",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 40,
      "CODE": "DENOMINAZIONE_COMMERCIALE",
      "outdes": "DENOMINAZIONE_COMMERCIALE",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 50,
      "CODE": "CODICE_CATALOGO_FABBR_ASS",
      "outdes": "CODICE_CATALOGO_FABBR_ASS",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 60,
      "CODE": "FABBRICANTE_ASSEMBLATORE",
      "outdes": "FABBRICANTE_ASSEMBLATORE",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 70,
      "CODE": "PIVA",
      "outdes": "PIVA",
      "outhformat": "text",
      "outlen": 30
    }
  ]
}
,"BND_MEDEV_SF":
{
  "SelFields": {
    "CLASSIFICAZIONE_CND": {
      "value": "",
      "CODE": "CLASSIFICAZIONE_CND",
      "FOP": "LIKE",
      "UPPER": "Y",
      "UCASE": "Y",
      "domain": "CLASSIFICAZIONE_CND",
      "outdes": "CND Code",
      "outlen": 30,
      "FIELDTYPE": "VARCHAR2",
      "outhformat": "TEXT"
    },
    "DENOMINAZIONE_COMMERCIALE": {
      "value": "",
      "CODE": "DENOMINAZIONE_COMMERCIALE",
      "FOP": "LIKE",
      "UPPER": "Y",
      "UCASE": "Y",
      "domain": "DENOMINAZIONE_COMMERCIALE",
      "outdes": "Descrizione Commerciale",
      "outlen": 30,
      "FIELDTYPE": "VARCHAR2",
      "outhformat": "TEXT"
    },
    "DESCRIZIONE_CND": {
      "value": "",
      "CODE": "DESCRIZIONE_CND",
      "FOP": "LIKE",
      "UPPER": "Y",
      "UCASE": "Y",
      "domain": "DESCRIZIONE_CND",
      "outdes": "Descr CND",
      "outlen": 30,
      "FIELDTYPE": "VARCHAR2",
      "outhformat": "TEXT"
    },
    "FABBRICANTE_ASSEMBLATORE": {
      "value": "",
      "CODE": "FABBRICANTE_ASSEMBLATORE",
      "FOP": "LIKE",
      "UPPER": "Y",
      "UCASE": "Y",
      "domain": "FABBRICANTE_ASSEMBLATORE",
      "outdes": "Produttore",
      "outlen": 30,
      "FIELDTYPE": "VARCHAR2",
      "outhformat": "TEXT"
    }
  },
  "parms": {
    "title": "Medical Device",
    "title_it": "Dispositivi Medici"
  },
  "queries": {
    "QNAME": "BND_MEDEV_QRY",
    "groups": {
      "ID": 1,
      "GOP": "AND",
      "SF": [
        "CLASSIFICAZIONE_CND",
        "DESCRIZIONE_CND",
        "DENOMINAZIONE_COMMERCIALE",
        "FABBRICANTE_ASSEMBLATORE"
      ]
    }
  }
}

// CND
,"BND_CND_CPG":
{
  "BODY": {
    "WCOMP": {
      "ID": "SF1",
      "COMP_CLASS": "SelForm",
      "XML_SELECTION": "BND_CND_SF",
      "XSL_HTML": "SelFormCol",
      "TARGET_COMP": "REP1",
      "VANISH": "N",
      "SHOW": "Y",
      "Toolbar": "SELFORM_BASE_TBL",
      "WCOMP": {
        "ID": "REP1",
        "COMP_CLASS": "RelReport",
        "XML_SELECTION": "BND_CND_QRY",
        "SHOW": "Y"
      }
    }
  }
}
,"BND_CND_SF":
{
  "SelFields": {
    "CND_CODE": {
      "value": "",
      "CODE": "CND_CODE",
      "FOP": "LIKE",
      "UPPER": "Y",
      "UCASE": "Y",
      "domain": "CND_CODE",
      "outdes": "CND Code",
      "outlen": 30,
      "FIELDTYPE": "VARCHAR2",
      "outhformat": "TEXT"
    },
    "CND_DES": {
      "value": "",
      "CODE": "CND_DES",
      "FOP": "LIKE",
      "UPPER": "Y",
      "UCASE": "Y",
      "domain": "CND_DES",
      "outdes": "Descr CND",
      "outlen": 30,
      "FIELDTYPE": "VARCHAR2",
      "outhformat": "TEXT"
    }
  },
  "parms": {
    "title": "CND",
    "title_it": "CND"
  },
  "queries": {
    "QNAME": "BND_CND_QRY",
    "groups": {
      "ID": 1,
      "GOP": "AND",
      "SF": [
        "CND_CODE",
        "CND_DES"
      ]
    }
  }
}
,"BND_CND_QRY":
{
  "parms": "",
  "DATASOURCE": "jdbc/BANDIDS",
  "RECPAG": "25",
  "rf": [
    {
      "N": 10,
      "CODE": "CND_LEV",
      "outdes": "CND_LEV",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 20,
      "CODE": "CND_CODE",
      "outdes": "CND_CODE",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 30,
      "CODE": "CND_PADRE",
      "outdes": "CND_PADRE",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 40,
      "CODE": "CND_DES",
      "outdes": "CND_DES",
      "outhformat": "text",
      "outlen": 30
    }
  ]
}
//Soggetti
,"BND_SOGG_CPG":
{
  "BODY": {
    "WCOMP": {
      "ID": "SF1",
      "COMP_CLASS": "SelForm",
      "XML_SELECTION": "BND_SOGG_SF",
      "XSL_HTML": "SelFormCol",
      "TARGET_COMP": "REP1",
      "VANISH": "N",
      "SHOW": "Y",
      "Toolbar": "SELFORM_BASE_TBL",
      "WCOMP": {
        "ID": "REP1",
        "COMP_CLASS": "RelReport",
        "XML_SELECTION": "BND_SOGG_QRY",
        "SHOW": "Y"
      }
    }
  }
}
,"BND_SOGG_QRY":
{
  "parms": "",
  "DATASOURCE": "jdbc/BANDIDS",
  "RECPAG": "25",
  "rf": [
    {
      "N": 10,
      "CODE": "COD",
      "outdes": "COD",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 20,
      "CODE": "NOME",
      "outdes": "NOME",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 30,
      "CODE": "INDIRIZZO",
      "outdes": "INDIRIZZO",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 40,
      "CODE": "CITTA",
      "outdes": "CITTA",
      "outhformat": "text",
      "outlen": 30
    },
    {
      "N": 50,
      "CODE": "PROV",
      "outdes": "PROV",
      "outhformat": "text",
      "outlen": 30
    }
  ]
}
,"BND_SOGG_SF": 
{
  "SelFields": {
    "CITTA": {
      "value": "",
      "CODE": "CITTA",
      "FOP": "LIKE",
      "UPPER": "Y",
      "UCASE": "Y",
      "domain": "CITTA",
      "outdes": "Città",
      "outlen": 30,
      "FIELDTYPE": "VARCHAR2",
      "outhformat": "TEXT"
    },
    "COD": {
      "value": "",
      "CODE": "COD",
      "FOP": "LIKE",
      "UPPER": "Y",
      "UCASE": "Y",
      "domain": "COD",
      "outdes": "PIVA",
      "outlen": 30,
      "FIELDTYPE": "VARCHAR2",
      "outhformat": "TEXT"
    },
    "INDIRIZZO": {
      "value": "",
      "CODE": "INDIRIZZO",
      "FOP": "LIKE",
      "UPPER": "Y",
      "UCASE": "Y",
      "domain": "INDIRIZZO",
      "outdes": "Indirizzo",
      "outlen": 30,
      "FIELDTYPE": "VARCHAR2",
      "outhformat": "TEXT"
    },
    "NOME": {
      "value": "",
      "CODE": "NOME",
      "FOP": "LIKE",
      "UPPER": "Y",
      "UCASE": "Y",
      "domain": "NOME",
      "outdes": "Nome",
      "outlen": 30,
      "FIELDTYPE": "VARCHAR2",
      "outhformat": "TEXT"
    },
    "PROV": {
      "value": "",
      "CODE": "PROV",
      "FOP": "LIKE",
      "UPPER": "Y",
      "UCASE": "Y",
      "domain": "PROV",
      "outdes": "Provincia",
      "outlen": 30,
      "FIELDTYPE": "VARCHAR2",
      "outhformat": "TEXT"
    }
  },
  "parms": {
    "title": "Subjects",
    "title_it": "Soggetti"
  },
  "queries": {
    "QNAME": "BND_SOGG_QRY",
    "groups": {
      "ID": 1,
      "GOP": "AND",
      "SF": [
        "COD",
        "NOME",
        "INDIRIZZO",
        "CITTA",
        "PROV"
      ]
    }
  }
}	
};
}).call(this);