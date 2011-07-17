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

//primera letra mayuscula :)
function ucFirst(string) {
	return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
}

//Cargar Los pots Para news
function newsHome(start,end){

	//Obtengo mi objeto httprequest
	http=getHTTPrequest();
	
	//abro una coneion asincronima via get
	http.open("GET","./engine/posts.php?strar="+start+"&end="+end,true);
	
	//accedo al eventos que cuando te ready que realice esta funcion
	http.onreadystatechange = function(){
	
		//si el estado es 4 avanzara
		if(http.readyState==4){
			
			//si el status es 200 avanzara
			if(http.status==200){
			
				cuerpo=document.getElementById("postsCuerpo");
				cuerpo.innerHTML="";
				documentXML=Math.ceil(http.responseXML.getElementsByTagName("titulo").length/10);
				
				for(y=start;y<end;y++){
				
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
					divPost.innerHTML="<p><a href=newsdetails.php?id="+idNode+" style='text-decoration:none'>"+ucFirst(tituloNode)+"</a></p>"+"<p>"+ucFirst(detalleNode.substring(0,120))+"....</p>"+"<p>"+posteadorNode+"</p>"+"<p>"+photosNode+"</p>"+"<p>"+fechaNode+"</p>";
					
					//agrego el div al div potscuerpo
					cuerpo.appendChild(divPost);
					
				}
				
				paginadorDiv=document.getElementById("paginador");
				paginadorDiv.innerHTML="";	
				for(t=0;t<documentXML;t++){
				
					paginadorDiv.innerHTML=paginadorDiv.innerHTML+"<a href='#' onclick='newsHome("+t*10+","+(t+1)*10+")'><b>"+(t+1)+"</b></a>";
				//"+(t*10+)+","+(t*10+)+"
				}
				
				
			}
		
		}
	
	}
	//No enviara valores ya que se enviaran por get (via url)
	http.send(null);

}

//Agregar los comentarios a las noticias
function addComent(post,usuario,comentario){

	objeto=getHTTPrequest();
	
	objeto.open("GET","./engine/addcomentario.php?post="+post+"&usuario="+usuario+"&comentario="+comentario,true);
	
	objeto.onreadystatechange=function(){
	
		if(objeto.readyState==4){
		
			if(objeto.status==200){
			
				if(objeto.responseText==1){
				
					padreDiv=document.getElementById("comentariosPadre");
				
					hijoDiv=document.createElement("div");
					hijoDiv.className="comentario";
					hijoDiv.innerHTML="<p>"+usuario+"</p><p>"+comentario+"</p>";
					
					padreDiv.appendChild(hijoDiv);
				
				}
			
			}
		
		}
	
	}
	
	objeto.send(null);

}











