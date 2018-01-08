require(['config'],function(){
	require(['common','jquery'],function(com,$){
		//1.表单的tab标签的切换
		(function() {
			var $tabTitle = $('.tab-title');
			var $tabItem = $('.item');
			var $commLogin = $('#commonLogin');
			var $quickLogin = $('#quickLogin');
	
			//表单的tab切换
			$tabItem.on('click', function() {
				$(this).find('a').addClass('active');
				$(this).siblings().find('a').removeClass('active');
				if($tabItem.children()[0].classList.contains('active')) {
					$commLogin.show();
					$quickLogin.hide();
				} else {
					$commLogin.hide();
					$quickLogin.show();
				}
			})
			
		})();
		//2.手机号的验证
		(function(){
			var $user = $('#phoneNum4QuickLogin');
			
			var $iempty = $('#phoneNum4QuickLogin_empty');
			
			function isMobilePhone(value) {
				if(value.search(/^(\+\d{2,3})?\d{11}$/) == -1)
					return false;
				else
					return true;
			}
			
			function checkMobilePhone(telphone) {
				if(telphone == '' || !isMobilePhone(telphone)) {
					
					
					$iempty.show();
				} else {
					
					
					$iempty.hide();
				}
			};
			
			$user.on('blur', function() {
				var telphone = this.value;
				checkMobilePhone(telphone);
			});
			
			$('#btnSubmit').on('click',function(){
				var username = $('#userName').val();
				var password = $('#userPass').val();
				if(username==''){
					alert('用户名不能为空')
				}else{
					$.ajax({
						type:"get",
						url:"../api/login.php",
						data:{
							username:username,
							password:password
						},
						dataType:'text',
						success:function(res){
							alert(res);
						},
					});
					
				}
			});
		})()
		//3.生成随机四位验证码
		function randomNumber(min,max){
		    var randomNumber = parseInt((Math.random()*(max-min)+1)+min);
		    return randomNumber;
		};
		function getRanNum(){
   			 var str ='0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';
   			 var idx;
    		var res = '';
		    for(var i = 0;i<4;i++){
		            idx =randomNumber(0,str.length-1);
		            res+=str[idx];
		            }
		            console.log(res);
		        return res;
		}
		var res1 = getRanNum();
		$('#changecode').on('click',function(){
			var res1 = getRanNum();
			$('#vcd_tatus').html(res1);
		});
		console.log(res1);
		$('#vcd_tatus').html(res1);
	})
})
