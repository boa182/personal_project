<?php
	//引入文件，连接数据库
	include 'connect.php';

	// 获取参数
	$id = isset($_GET['id'])? $_GET['id']:'';

	// 编写服务器查询语句
	$sql = "select * from goodlists where gid='$id'";

	// 新建查询,获取查询结果
	$res = $conn->query($sql)->fetch_all(MYSQLI_ASSOC);

	// 把结果返回前端，转化为json字符串
	echo json_encode($res,JSON_UNESCAPED_UNICODE)


?>