require(['config'],function(){
	require(['common','jquery'],function(){
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
		
	})
})
