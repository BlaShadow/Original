function mapaLoad()
	{
				var latlng = new google.maps.LatLng(18.90,-70.40);

				var myOptions = {
				zoom: 8,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
				var map = new google.maps.Map(document.getElementById("mapaNO"), myOptions);

	//creo un maker para markar un centro del mapa para que el usuario se oriente
				var image = new google.maps.MarkerImage("img/puntero.png", new google.maps.Size(42, 52));
				marker = new google.maps.Marker({
				position: latlng, 
				map: map,
				icon: image
				
				//longitudNegocio
				//latitudNegocio
				
				});
	//agrego un eventos para cxuando se cambie el centro del mapa			
				google.maps.event.addListener(map, 'center_changed', function() {
				var pos = map.getCenter();
				document.getElementById("latitudNegocio").value = pos.lat().toFixed(6);
				document.getElementById("longitudNegocio").value = pos.lng().toFixed(6);
				
				moveMaker(pos);
				});

	}

//esta fucion se llmara si el centro se cambia para setear el marker
function moveMaker(pos) {

	marker.setPosition(pos);

}