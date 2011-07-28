function inicio()
	{
				var latlng = new google.maps.LatLng(18.90,-70.40);

				var myOptions = {
				zoom: 8,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
				var map = new google.maps.Map(document.getElementById("body"), myOptions);

		GDownloadUrl("xmlDoc.php", function(data) {

			var xml = GXml.parse(data);
			var caso = xml.documentElement.getElementsByTagName("barberia");
			for(var i = 0;i < caso.length;i++){

				var nombreNeg = caso[i].getAttribute("negocio");
				var direccion = caso[i].getAttribute("direccion");
				var telefono = caso[i].getAttribute("telefono");				
				var email = caso[i].getAttribute("email");	
				var url = caso[i].getAttribute("url");
				var zone = new google.maps.LatLng(parseFloat(caso[i].getAttribute("Latitud")),
													parseFloat(caso[i].getAttribute("Longitud")));
				createMarker(map,zone,nombreNeg,direccion, telefono, email, url);
			}
		});

	//creo un maker para markar un centro del mapa para que el usuario se oriente
				marker = new google.maps.Marker({
				position: latlng, 
				map: map
				});
	//agrego un eventos para cxuando se cambie el centro del mapa			
				google.maps.event.addListener(map, 'center_changed', function() {
				var pos = map.getCenter();
				document.getElementById("lat").innerHTML = pos.lat().toFixed(6);
				document.getElementById("lon").innerHTML = pos.lng().toFixed(6);
				moveMaker(pos);
				});

	}

//esta fucion se llmara si el centro se cambia para setear el marker
function moveMaker(pos) {

	marker.setPosition(pos);

}

	function createMarker(map,zone,nombreNeg,direccion, telefono, email, url){
		var image = new google.maps.MarkerImage("img/razor6.jpg", new google.maps.Size(42, 52));
		var marker= new google.maps.Marker({
			position: zone,
			map: map,
			title:"Barberias",
			icon: image,
		});
		var infoWin = new google.maps.InfoWindow({
			content:"<b>" + nombreNeg + "</b> </br>" + direccion + "</b> </br>" + telefono + "</b> </br>" + email + "</b> </br>" + url
		}); 


		//llamada al evento mouseover en el marcador
		google.maps.event.addListener(marker,'mouseover',function(){
			infoWin.open(map,marker);

		});

		//llamada al evento mouseout del marcador
		google.maps.event.addListener(marker, 'mouseout', function(){
			infoWin.close(map,marker);
		});
	}	

//document created by El Dave	