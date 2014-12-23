if (Meteor.isClient) {
Template.maps.rendered = function(){
	Session.set('load',true)
	initialize();
	       
}
function initialize(){
	//var chicago = new google.maps.LatLng(40.8154089, -73.9582765);
	var mapOptions = {
            zoom: 16,
	    
          //  center: chicago
        };
      
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
     var Route104A = [
                    new google.maps.LatLng(40.8154089,-73.9582765),
                    new google.maps.LatLng(40.8148811,-73.9578152),
                    new google.maps.LatLng(40.815279,-73.9569461),
                    new google.maps.LatLng(40.8155632,-73.9565599),
                    new google.maps.LatLng(40.8140529,-73.9530838),
                    new google.maps.LatLng(40.8123801,-73.9531374),
                    new google.maps.LatLng(40.8107966,-73.9542532),
                    new google.maps.LatLng(40.815555,-73.958416),
                    new google.maps.LatLng(40.802757,-73.9676964)
                    ];
        var R104A = new google.maps.Polyline({
                        path: Route104A,
                        geodesic: true,
                        strokeColor: '#470047',
                        strokeOpacity: 1.0,
                        strokeWeight: 4
                        });
        R104A.setMap(map);
        var Route4 = [
                new google.maps.LatLng(40.816440,-73.9580297),
                new google.maps.LatLng(40.8042919,-73.9668274),
                new google.maps.LatLng(40.7971124,-73.9496613)
        ];
        var R4 = new google.maps.Polyline({
            path: Route4,
            geodesic: true,
            strokeColor: '#3366FF',
            strokeOpacity: 1.0,
            strokeWeight: 4
        });
        R4.setMap(map);
        var Route11A = [
            new google.maps.LatLng(40.8011733,-73.9652395),
            new google.maps.LatLng(40.8189733,-73.9522362),
            new google.maps.LatLng(40.8210843,-73.957386)
        ];
        var R11A = new google.maps.Polyline({
        path: Route11A,
        geodesic: true,
        strokeColor: '#E6B85C',
        strokeOpacity: 1.0,
        strokeWeight: 4
        });
        R11A.setMap(map);

        var Route11B = [
            new google.maps.LatLng(40.803025,-73.9639091),
            new google.maps.LatLng(40.8017906,-73.9610338),
            new google.maps.LatLng(40.7998739,-73.9624071)
            ];
        var R11B = new google.maps.Polyline({
        path: Route11B,
        geodesic: true,
        strokeColor: '#E6B85C',
        strokeOpacity: 1.0,
        strokeWeight: 4
        });
        R11B.setMap(map);
        var Route60 = [
            new google.maps.LatLng(40.8043894,-73.9374304),
            new google.maps.LatLng(40.810821,-73.9527082),
            new google.maps.LatLng(40.8117305,-73.9547682),
            new google.maps.LatLng(40.809294,-73.9593172),
            new google.maps.LatLng(40.8105612,-73.9622784),
            new google.maps.LatLng(40.8030169,-73.9676964)
        ]
        var R60 = new google.maps.Polyline({
            path: Route11B,
            geodesic: true,
            strokeColor: '#000052',
            strokeOpacity: 1.0,
            strokeWeight: 4
        });
        R60.setMap(map);
        var Route5 = [
            new google.maps.LatLng(40.8175118,-73.9607549),
            new google.maps.LatLng(40.8167161,-73.9613128),
            new google.maps.LatLng(40.8163426,-73.9618921),
            new google.maps.LatLng(40.8160178,-73.9622784),
            new google.maps.LatLng(40.8156768,-73.9624822),
            new google.maps.LatLng(40.8152383,-73.962729),
            new google.maps.LatLng(40.8142964,-73.9631796),
            new google.maps.LatLng(40.8130135,-73.9638662),
            new google.maps.LatLng(40.8126399,-73.9639306),
            new google.maps.LatLng(40.8118117,-73.9639306),
            new google.maps.LatLng(40.8113245,-73.9640379)
        ]

        var R5 = new google.maps.Polyline({
            path: Route5,
            geodesic: true,
            strokeColor: '#800000',
            strokeOpacity: 1.0,
            strokeWeight: 4
        });
        R5.setMap(map);
        var Route5A = [
            new google.maps.LatLng(40.8113245,-73.9640379),
            new google.maps.LatLng(40.8106261,-73.9645529),
            new google.maps.LatLng(40.8094893,-73.9653683),
            new google.maps.LatLng(40.808807,-73.9658189),
            new google.maps.LatLng(40.8082712,-73.966527),
            new google.maps.LatLng(40.8069719,-73.9674926),
            new google.maps.LatLng(40.805136,-73.9683938),
            new google.maps.LatLng(40.8023591,-73.9702821)
]

        var R5A = new google.maps.Polyline({
            path: Route5A,
            geodesic: true,
            strokeColor: '#800000',
            strokeOpacity: 1.0,
            strokeWeight: 4
        });
        R5A.setMap(map);
        var Route5B = [
new google.maps.LatLng(40.8113245,-73.9640379),
new google.maps.LatLng(40.8114219,-73.9638877),
new google.maps.LatLng(40.8128023,-73.9629006),
new google.maps.LatLng(40.8136306,-73.9622784),
new google.maps.LatLng(40.8139554,-73.9621711),
new google.maps.LatLng(40.814199,-73.9621067),
new google.maps.LatLng(40.8148811,-73.9615703),
new google.maps.LatLng(40.8153033,-73.9613557),
new google.maps.LatLng(40.815693,-73.9612699),
new google.maps.LatLng(40.8160341,-73.961184),
new google.maps.LatLng(40.8164563,-73.9612699),
new google.maps.LatLng(40.8167161,-73.9613128),
new google.maps.LatLng(40.8175118,-73.9607549)
]

var R5B = new google.maps.Polyline({
    path: Route5B,
    geodesic: true,
    strokeColor: '#800000',
    strokeOpacity: 1.0,
    strokeWeight: 4
  });
R5B.setMap(map);
pos104 =Meteor.subscribe('getposition');
var A = Meteor.subscribe ('getlength'); 
for(k = 0;k <A;k++){
var lat = pos104[1].latitude;
var lon = pos104[1].longitude;

var pos105 = new google.maps.LatLng(lat,lon);                                                                                      
var busmarker = new google.maps.Marker({
            map: map,
            position:pos105,
            content: '104'
	});
}
   if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {	
                var pos = new google.maps.LatLng(position.coords.latitude,
                position.coords.longitude);
	       
                var marker = new google.maps.Marker({
                    map: map,
                    position: pos,
                    content: 'You are here'
                });



                map.setCenter(pos);
                

            }, function() {
                handleNoGeolocation(true);
            });
        } else {
            // Browser doesn't support Geolocation
            handleNoGeolocation(false);
        }
    }

    function handleNoGeolocation(errorFlag) {
        if (errorFlag) {
            var content = 'Error: The Geolocation service failed.';
        } else {
            var content = 'Error: Your browser doesn\'t support geolocation.';
        }

        var options = {
            map: map,
            position: new google.maps.LatLng(60, 105),
            content: content
        };

        var infowindow = new google.maps.InfoWindow(options);
        map.setCenter(options.position);

}    
    
    
}

 if (Meteor.isServer) {
    var response;
    var length;
    var position=[];
    Buslocation = new Mongo.Collection("buslocation");
    Meteor.startup(function(){
             Meteor.setInterval(function(){apipull();}, 15000);
	      getposition();
	       // Meteor.setInterval(function(){getposition();},16000);                      
 });
function apipull(){
    response = HTTP.get('http://bustime.mta.info/api/siri/vehicle-monitoring.json?key=5d7007e1-d0e7-4871-99a7-c6013b3ed18a&OperatorRef=MTA&LineRef=MTA%20NYCT_M104&');
        Buslocation.insert(response);
}
Meteor.publish('getposition',function()          
{                                                              
    length = Buslocation.findOne().data.Siri.ServiceDelivery.VehicleMonitoringDelivery[0].VehicleActivity.length;                             
    for (i = 0; i < length; i++){
	position[i]= Buslocation.findOne().data.Siri.ServiceDelivery.VehicleMonitoringDelivery[0].VehicleActivity[i].MonitoredVehicleJourney.VehicleLocation
	    }
    console.log(psoition);
    return position;
});
function getposition()
	       {
      	   length = Buslocation.findOne().data.Siri.ServiceDelivery.VehicleMonitoringDelivery[0].VehicleActivity.length;
	       for (i = 0; i < length; i++){
       	       position[i]= Buslocation.findOne().data.Siri.ServiceDelivery.VehicleMonitoringDelivery[0].VehicleActivity[i].MonitoredVehicleJourney.VehicleLocation
			   }
		   console.log(position);
	       }

Meteor.publish('getlength',function()
	       {
		   length = Buslocation.findOne().data.Siri.ServiceDelivery.VehicleMonitoringDelivery[0].VehicleActivity.length;
		   return length;
	       });
      	       			
}
