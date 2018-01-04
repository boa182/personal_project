require(['config'],function(){
	require(['common','jquery'],function(){
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
			}
			
			$user.on('blur', function() {
				var telphone = this.value;
				checkMobilePhone(telphone);
			})
		})()
		
	})
})
