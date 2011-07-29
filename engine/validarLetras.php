<?php
function parseToXML($htmlStr) 
	{ 
		$xmlStr=str_replace('<','&lt;',$htmlStr); 
		$xmlStr=str_replace('>','&gt;',$xmlStr); 
		$xmlStr=str_replace('"','&quot;',$xmlStr); 
		$xmlStr=str_replace("'",'&#39;',$xmlStr); 
		$xmlStr=str_replace("&",'&amp;',$xmlStr); 
		$xmlStr=str_replace("ñ",'&#241;',$xmlStr);
		$xmlStr=str_replace("Ñ",'&Ntilde;',$xmlStr);
		$xmlStr=str_replace("á",'&#225;',$xmlStr);
		$xmlStr=str_replace("é",'&#233;',$xmlStr);
		$xmlStr=str_replace("í",'&#237;',$xmlStr);
		$xmlStr=str_replace("ó",'&#243;',$xmlStr);
		$xmlStr=str_replace("ú",'&#250;',$xmlStr);
		$xmlStr=str_replace("Á",'&#193;',$xmlStr);
		$xmlStr=str_replace("É",'&Eacute;',$xmlStr);
		$xmlStr=str_replace("Í",'&Iacute;',$xmlStr);
		$xmlStr=str_replace("Ó",'&Oacute;',$xmlStr);
		$xmlStr=str_replace("Ú",'&Uacute;',$xmlStr);
		return $xmlStr; 
	} 
?>