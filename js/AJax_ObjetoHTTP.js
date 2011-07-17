//Objeto HTTP Request
function getHTTPrequest(){

	 var xmlhttp=false;
	 
		try
		{
			xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e)
		{
			try
			{
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(E) 
			{
				xmlhttp=false;
			}
		}
		
		if (!xmlhttp && typeof XMLHttpRequest!='undefined') {

			xmlhttp=new XMLHttpRequest(); 
		
		
		}

		return xmlhttp;

}

//Cargar Los pots Para news
function newsHome(){

	//Obtengo mi objeto httprequest
	http=getHTTPrequest();
	
	//abro una coneion asincronima via get
	http.open("GET","./engine/posts.php",true);
	
	//accedo al eventos que cuando te ready que realice esta funcion
	http.onreadystatechange = function(){
	
		//si el estado es 4 avanzara
		if(http.readyState==4){
			
			//si el status es 200 avanzara
			if(http.status==200){
			
				cuerpo=document.getElementById("postsCuerpo");
				documentXML=http.responseXML.getElementsByTagName("titulo");
				
				for(y=0;y<documentXML.length;y++){
				
				//recupero todos los tag del xml
					idNode=http.responseXML.getElementsByTagName("id")[y].childNodes[0].nodeValue;
					tituloNode=http.responseXML.getElementsByTagName("titulo")[y].childNodes[0].nodeValue;
					detalleNode=http.responseXML.getElementsByTagName("detalle")[y].childNodes[0].nodeValue;
					posteadorNode=http.responseXML.getElementsByTagName("posteador")[y].childNodes[0].nodeValue;
					photosNode=http.responseXML.getElementsByTagName("photos")[y].childNodes[0].nodeValue;
					fechaNode=http.responseXML.getElementsByTagName("fecha")[y].childNodes[0].nodeValue;
					
					//creo mi elemento div donde estaras todos los post 
					divPost=document.createElement("div");
					divPost.className="divPost";
					divPost.innerHTML="<p><a href=newsdetails.php?id="+idNode+" style='text-decoration:none'>"+tituloNode+"</a></p>"+"<p>"+detalleNode+"</p>"+"<p>"+posteadorNode+"</p>"+"<p>"+photosNode+"</p>"+"<p>"+fechaNode+"</p>"+idNode;
					
					//agrego el div al div potscuerpo
					cuerpo.appendChild(divPost);
					
				}
				
				
			}
		
		}
	
	}
	//No enviara valores ya que se enviaran por get (via url)
	http.send(null);

}













