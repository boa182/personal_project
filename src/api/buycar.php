<?php
	include 'connect.php';

	$id = isset($_GET['id']) ? $_GET['id'] : '';
	$id = json_decode($id);

	//遍历数组，提取id
	$a = array_map(function($items){
		return $items->id;
	}, $id);
	// 组合成SQL语句
	$a = implode(",", $a);
	$a = '('.$a.')';

	
	// // 编写SQL语句
	$sql = "select * from goods where id in".$a;

	// 新建查询
	$res = $conn->query($sql);

	// 获取查询结果
	$rows = $res->fetch_all(MYSQLI_ASSOC);

	// 格式化数据
    $result = array(
    	'data'=>$rows,
    );

	echo json_encode($result,JSON_UNESCAPED_UNICODE);


	//关闭连接
	$conn->close();
?>