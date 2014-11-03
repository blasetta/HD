var FxApp = FxApp || {}; 

function stylenomenu() {
   return {left:"0px", top:"50px"};
} 


/*Route e Modulo principale 
  Moduli:
  app - Template Flat
  RadixApp - NGX
  once - once binding (da togliere quando si passa ad Angular 1.3
*/
(function() {
  'use strict';
  //var servletName = "Dyna"; var url = '../ngx/'+servletName;
  var Mapp=angular.module('Mapp', ['app','RadixApp','once']);
  Mapp.config([
    '$routeProvider', function($routeProvider) {
	  var a=1;
      return $routeProvider.when('/', {
        redirectTo: '/home'
      }).when('/page/:xpage'
          , {templateUrl: 'FL_page', controller:'XPageCtrl' // puoi gestire anche il template specifico se vuoi /:xt dopo il codice della pagina
           , resolve:{
                  currpage: function ($route) {
                      return $route.current.params.xpage;
                  }
                 , istab: function () {return false;}
              }
              }).when('/Page/:xpage'
           , {templateUrl: 'FL_page', controller:'XPageCtrl' // puoi gestire anche il template specifico se vuoi /:xt dopo il codice della pagina
                      , resolve:{
                          currpage: function ($route) {
                              return $route.current.params.xpage;
                  }
            , istab:function () {return true;}
            }
          // Pagine da rifare ... probabilmente....
          }).when('/nmb/login', {
              templateUrl: 'pages/login.html'
          }).when('/nmb/signup', {
              templateUrl: 'pages/signup.html'
          }).when('/nmb/signin', {
              templateUrl: 'pages/signin.html'
          }).when('/nmb/404', { templateUrl: 'pages/404.html'}).when('/404', { templateUrl: 'pages/404.html'
          }).when('/nmb/500', {
              templateUrl: 'pages/500.html'
          }).when('/nmb/profile', {
              templateUrl: 'pages/profile.html'
          }).when('/nmb/blank', {
              templateUrl: 'pages/blank.html'
          }).when('/nmb/lock-screen', {
              templateUrl: 'pages/lock-screen.html'
		  }).when('/public', {
              redirectTo: '/nmb/public'	  
		  }).when('/nmb/public', {
              templateUrl: 'pages/public.html'  	  
          }).when('/dashboard', {
              templateUrl: 'pages/dashboard.html'        
		  }).when('/home', {
		   template: '<div ng-controller="choosectrl"></div>'
        }).otherwise({
        redirectTo: '/nmb/404'
      });
    }
    ]);
	
	 Mapp.controller('DashCtrl', [
    '$scope', function($scope) {
     
      $scope.comboData = [
        {
          Regione: 'Toscana',
          spesa:292,pop: 3.750511,spc: 78
        }, {
          Regione: 'Emilia',
          spesa:326,pop: 4.446354,spc: 73
        },  { 
          Regione: 'Friuli',
          spesa:74, pop: 1.229363,spc: 60
        }, {
          Regione: 'Liguria',
          spesa:88, pop: 1.591939,spc: 55
        }, {
          Regione: 'Abruzzo',
          spesa:73, pop: 1.333939,spc: 55
         }, {
          Regione: 'Lombardia',
          spesa:475, pop: 9.973397,spc: 48        
		  }, {
          Regione: 'Marche',
          spesa:63, pop: 1.553138,spc: 41    
         }, {
          Regione: 'Sicilia',
          spesa:209,pop: 5.094937,spc: 41      
         }, {
          Regione: 'Piemonte',
          spesa:171,pop: 4.436798,spc: 39 
         }, {
          Regione: 'Puglia',
          spesa:92, pop: 4.090266,spc: 22
		  }
		  , {
          Regione: 'Campania',
          spesa:132,pop: 5.869965,spc: 22    
		  }
		  ];
     } ] );
  
Mapp.controller('choosectrl', ['$scope','RServ','$location','Ajx',
    function($scope,RServ,$location,Ajx) {
        var r=RServ; $scope.r=r; r.test=istest; // no cache dei metadati
        //Se è loggato
		if (r.HpO && !isnull(r.HpO.SEC_EMAIL) && !isnull(r.HpO.SEC_USERID) && r.HpO.SEC_USERID!="anonym" ) {$location.url('/dashboard'); return;}
		var $cookieStore=r.getService("$cookieStore"); 
		var logincookie=$cookieStore.get(r.HpO.SEC_APPLICATION);
		if ( isnull(logincookie) || isnull(logincookie.SEC_EMAIL)) $location.url('/public');
		else $location.url('/dashboard');		 
    }]);
  

	 
}).call(this);


/* Funzioni aggiuntive standard */

function elapsed(tstart) {return new Date()-tstart;}


function  loadJQScript(path,n){
	$.getScript(path)
	.done(function( script, textStatus ) {
    console.log( path+" - loaded "+textStatus );
  })
  .fail(function( jqxhr, settings, exception ) {
  	console.log( path+" - not loaded "+exception );
    if (!n) loadJQScript(path,true); //2° try 
});
}


/* Add functions */

(function( fx ){
fx.app="BND";
FxApp.BND= function (code,scope) {
    var f={
          env: {env:"sql", burl:"../ngx", cana: true, GMaps:1, GMapsloaded:0 }
          ,i18n:{
                "test":{"it":"italiano","en":"english"}
            }
		,"ASLMAP" : {
		loadASL: function() {
var mypath = {
    path: google.maps.SymbolPath.CIRCLE, //'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
    fillColor: 'crimson',
    fillOpacity: 0.5,
    scale: 5,
    strokeColor: 'silver',
    strokeWeight: 1
  };
		var loadMap=function() {
		  // trasformo i dati in modo da creare i Marker della Map e le infoWindow
		  var mapmarkers=_.map(scope.store.d.ASLDATA, function(r) {
		   return {descr: (r.ASL_NOME+' '+r.ASL_REGIONE),  lat: r.ASL_LAT, lon: r.ASL_LONG, R: r.R, icon:mypath }; // aggiungere le icone
		  });
		 scope.service.showMarks(scope,mapmarkers);  
		 var infoWin=null; 
		};
		if (scope.store.d && scope.store.d.ASLDATA) loadMap(); //[1].ASL_NOME
		  else scope.$on('loaded_ASLDATA' , function() {
		    loadMap();
           }  
		  );
		}
        }		
	// esempio	TODO vanno cancellati	
       ,"V_edUT": { 
	     PinHpO: function() {
		  var rec=scope.DATA[0]; scope.V.saverec(rec); 
		  var H =scope.HpO; 
		  H.NAME=rec.nome;
		  H.SURNAME=rec.cognome;
		  H.CAP=rec.billingAddressCap;
		  H.CITTA=rec.billingAddressCity;
		  H.INDIRIZZO=rec.billingAddressStreet;
		  H.PROV=rec.billingAddressState;
		  H.SEC_EMAIL=rec.email;
		  scope.VVs.V.ViewHide('UEDIT'); 
		 }
	   }	   

    };
    return f[code]; 
    };
})( FxApp );




