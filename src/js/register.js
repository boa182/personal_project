require(['config'],function(){
	require(['common','jquery'],function(){
		
		//1、用户名手机号码验证
		(function(){
			var $user = $('.u_name');
			var $itrue = $('.phone .i_true');
			var $iempty = $('.phone .i_empty');
			function isMobilePhone(value) {
				if(value.search(/^(\+\d{2,3})?\d{11}$/) == -1)
					return false;
				else
					return true;
			}
			function checkMobilePhone(telphone) {
				if(telphone == '' || !isMobilePhone(telphone)) {
					$user.addClass('empty');
					$itrue.hide();
					$iempty.show();
				} else {
					$itrue.show();
					$user.removeClass('empty');
					$iempty.hide();
				}
			}
			
			$user.on('blur',function(){
				var telphone = this.value;
				checkMobilePhone(telphone);
			})
		})();
		
		//2用户密码验证
		(function(){
			var $user = $('.pw1');
			var $pw2 = $('.pw2');
			var $password_tip = $('#password_tip');
			var $iempty = $('.pw .i_empty');
			var $itrue = $('.pw .i_true');
			var $btn = $('#registerButton');
			function checkPwd1(pwd1) {
				if(pwd1.search(/^.{6,20}$/) == -1) {
					$user.addClass('error');
					$iempty.show();
					$itrue.hide();
					
				} else {
					$user.removeClass('error');
					$iempty.hide();
					$pw2.removeAttr("disabled");
					$itrue.show();
					$btn.on('click',function(){
						var username = $('.u_name').val();
						var password = $('.pw1').val();
						console.log(username,password)
						$.ajax({
							type:"get",
							url:"../api/register.php",
							data:{
								username:username,
								password:password
							},
							dataType:'text',
							success:function(res){
								if(res=='用户名已注册'){
									alert(res);
									
								}else if(res=='注册成功'){
//									location.href='./../index.html'
								}
							}
						});
					});
				}
			}
			
			$user.on('focus',function(){
				$password_tip.show();
				$iempty.hide();
				$itrue.hide();
				
			}).on('blur',function(){
				$password_tip.hide();
				var pwd1 = this.value;
				checkPwd1(pwd1);
			})
			
		})();
		
		
		
		
		
		
	})
	
})