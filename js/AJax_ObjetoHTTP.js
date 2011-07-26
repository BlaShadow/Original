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
				
				
					try{
					
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
						divPost.innerHTML="<p class='tituloPost'><a href=newsdetails.php?id="+idNode+" style='text-decoration:none'><b>"+ucFirst(tituloNode)+
						"</b></a></p>"+"<p class='detallesPost'>"+ucFirst(detalleNode.substring(0,120))+"....</p>"+
						"<p class='fechaPost'>"+fechaNode+"</p>";
						
						if(document.getElementById("session").value=="true"){ 
						
							divPost.innerHTML+="<a align='center' onclick=\"borrarNew("+idNode+",this)\" href='#' class='borrarPost'>Borrar</a>";
						
						}
						divPost.innerHTML+="<div style='clear:both'></div>";
						//agrego el div al div potscuerpo
						cuerpo.appendChild(divPost);
						
					}catch(e){}	
					
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

function login(nick,pass){

	http=getHTTPrequest();
	
	http.open("GET","./engine/login.php?nick="+nick+"&pass="+pass,true);
	
	http.onreadystatechange=function(){
	
		if(http.readyState==4){
		
			if(http.status==200){
			
				if(http.responseText=="ok"){
				
				$("#loginMaster").hide("slow"); 
					//document.getElementById("loginMaster").style.display="none";
					document.getElementById("masterLog").style.display="block";
				
				}else{
				alert(http.responseText);
					alert("Fail");
				
				}
			
			}
		
		}
	
	};
	
	http.send(null);

}

function validarNews(){

	validar=false;
	
	
	if(document.noticias.titulo.value=="" || document.noticias.detalles.value==""){
	
		document.noticias.titulo.style.border="solid red 2px";
		document.noticias.detalles.style.border="solid red 2px";
		alert("Llenar Todos los Campos");
		validar=false;
	
	}else{
	
		if(document.noticias.titulo.value.length < 20 || document.noticias.detalles.value.length < 40){
		
			document.noticias.titulo.style.border="solid red 2px";
			document.noticias.detalles.style.border="solid red 2px";
			validar=false;
			document.noticias.titulo.focus;
			alert("Datos Insuficientes Para una Noticia!!!");
			
		
		}else{
		
			validar=true;
		
		}
	
	}
	
	return validar;

}

function borrarNew(id,div){
	
	borr=confirm("Seguro de Borrar?");
	
	if(borr){
	
	HTTPBorrar = getHTTPrequest();
	
	HTTPBorrar.open("GET","engine/borrarNews.php?id="+id,true);
	
	HTTPBorrar.onreadystatechange = function(){
	
		if(HTTPBorrar.status==200 && HTTPBorrar.readyState==4){
		
			if(HTTPBorrar.responseText=="ok"){
			
				div = div.parentNode;
				document.getElementById("postsCuerpo").removeChild(div);
		
			}else{
			
				alert("Error De Coneccion");
			
			}
		
		}
	
	}
	
	HTTPBorrar.send(null);
	
	}

}





