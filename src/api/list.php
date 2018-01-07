<?php
	include 'connect.php';

	// 分页
	$page = isset($_GET['page']) ? $_GET['page'] : 1;
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 10;

	// SQL语句
	$sql = "select * from goodlists ";
	
	$sql .= ' limit '. $qty*($page-1) . ',' . $qty;

	//获取查询结果
	$result = $conn->query($sql);
	//使用查询结果集
	$row = $result->fetch_all(MYSQLI_ASSOC);
	//释放查询结果集
	$result->close();
	
	 // 格式化数据
    $res = array(
    	'page'=>$page,
    	'qty'=>$qty,
    	'total'=>$conn->query('select count(*) from goodlists')->fetch_row()[0],
    	'data'=>$row,
    );
	
	//把结果输出到前台
	echo json_encode($res,JSON_UNESCAPED_UNICODE);
	
	$conn->close();
?>