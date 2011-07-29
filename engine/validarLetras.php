<?php
function parseToXML($htmlStr) 
	{ 
		$xmlStr=str_replace('<','&lt;',$htmlStr); 
		$xmlStr=str_replace('>','&gt;',$xmlStr); 
		$xmlStr=str_replace('"','&quot;',$xmlStr); 
		$xmlStr=str_replace("'",'&#39;',$xmlStr); 
		$xmlStr=str_replace("&",'&amp;',$xmlStr); 
		$xmlStr=str_replace("�",'&#241;',$xmlStr);
		$xmlStr=str_replace("�",'&Ntilde;',$xmlStr);
		$xmlStr=str_replace("�",'&#225;',$xmlStr);
		$xmlStr=str_replace("�",'&#233;',$xmlStr);
		$xmlStr=str_replace("�",'&#237;',$xmlStr);
		$xmlStr=str_replace("�",'&#243;',$xmlStr);
		$xmlStr=str_replace("�",'&#250;',$xmlStr);
		$xmlStr=str_replace("�",'&#193;',$xmlStr);
		$xmlStr=str_replace("�",'&Eacute;',$xmlStr);
		$xmlStr=str_replace("�",'&Iacute;',$xmlStr);
		$xmlStr=str_replace("�",'&Oacute;',$xmlStr);
		$xmlStr=str_replace("�",'&Uacute;',$xmlStr);
		return $xmlStr; 
	} 
?>