<?php
	include 'connect.php';
	
	$sql = "select * from banner";
	
	$res = $conn->query($sql)->fetch_all(MYSQLI_ASSOC);
	
	echo json_encode($res,JSON_UNESCAPED_UNICODE)
	
	
	
?>