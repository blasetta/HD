/* Metadati in test non viene utilizzata è solo un salvataggio ed un deposito di cose */
(function() {
FxApp.x1MD={
    "M_BND":{"mi":
	[ 
	{"id":"VM_TAB","outdes":"Archivio","acl":"NULL" 
	   ,"mi":[{"id":"M1","url":"BND_CPV_CPG","outdes":"CPV"} 
	        , {"id":"VM_ESAMI","url":"BND_MEDEV_CPG","outdes_it":"Dispositivi Medici", "outdes":"Medical Devices"} 
			,{"id":"VM_FESAMI","url":"BND_CND_CPG","outdes":"CND"} 
			,{"id":"VM_COUPON","url":"BND_SOGG_CPG","outdes":"Soggetti"} 
			] } 
	,{"id":"VM_SVIL","outdes":"Sviluppo","acl":"SVILUPPO" 
	   ,"mi":[{"id":"VM_MD","url":"VV_MD_CPG","outdes":"Metadati"} 
	   ,{"id":"VM_CAT","url":"VV_CATALOG_CPG","outdes":"Lista Tabelle"}
	        ]  
	}
	]}
  , "SELFORM_BASE_TBL": { "toolbar" : { "te" : [ { "ACL" : "NULL", "outdes" : "Ricerca", "icon" : "glyphicon-search", "cmd" : "V.go()" }
     , { "outdes" : "Clear Form", "icon" : "glyphicon-repeat", "cmd" : "V.clear()" } ] } 
}
,"VV_FESAMI_CPG":{ "BODY": {
        "WCOMP": [
            { "ID": "WLE", "CODE_XML":"WFESAMI" , "COMP_CLASS": "wrap"
                , "q": "VV_FESAMI_QRY,VV_ESCREDITI_QRY", "k": "ESAMI,CREDITI" , "lazy":"0,0", "Template": "VListaEsami"
                ,"views":
            {"PRICE" : { "template":"VPriceTables"}
              ,"SENDES" : { "template":"SendEsame", "codeq": "VV_MYDEST_QRY", "codek": "V_MYDEST" , "cache" : false, controller:"PreInvio"  }
            }}
        ]
    }
    }
/* Pagina del Profilo dell'utente */
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
    "DATASOURCE": "jdbc/temp_medibox",
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
	
 	
};

}).call(this);