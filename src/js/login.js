;
(function($) {
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
	//生成随机四位数字
	var random = randomNL(4);
	console.log(random);

})(jQuery);