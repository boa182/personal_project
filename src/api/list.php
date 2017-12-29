<?php
	include 'connect.php';

	// 分页
	$page = isset($_GET['page']) ? $_GET['page'] : 1;
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 10;

	// SQL语句
	$sql = "select * from goods limit ".($page-1)*$qty .",".$qty;

	// 获取查询结果
	$res = $conn->query($sql);

	// 使用查询结果集
	$rows = $res->fetch_all(MYSQLI_ASSOC);

	// 格式化数据
    $result = array(
    	'pageNo'=>$page,
    	'qty'=>$qty,
    	'total'=>$conn->query('select count(*) from goods')->fetch_row()[0],
    	'data'=>$rows,
    );
    // 输出，用json字符串做一下中介
	echo json_encode($result,JSON_UNESCAPED_UNICODE);


	//关闭连接
	$conn->close();
?>