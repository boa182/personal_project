<?php
	// 引入文件，连接数据库
	include 'connect.php';

	// 获取传递过来的数据
	$username = isset($_GET['username']) ? $_GET['username']: '';
	$password = isset($_GET['password']) ? $_GET['password'] : '';

	// 密码加密
	$password = md5($password);

	// 编辑sql语句
	$sql1 =  "select username from user where username='$username'";


	// 在mySQL中新建查询
	$conn->query($sql1);

	$res =$conn->query($sql1);

	// 获取查询结果
	$res = $res->fetch_all(MYSQLI_ASSOC);

	// 如果返回的结果为空，即用户名没有被注册，则写入数据。
	if(!$res){
	echo "该用户名还没有注册";

	}else{
		$sql2 =  "select * from user where username='$username' and password='$password'";

		$res2 =$conn->query($sql2)->fetch_all(MYSQLI_ASSOC);

		if(!$res2){
			echo "密码错误";
		}else{
			echo "登录成功";
		}


	}




	$conn->close();

?>