require(['config'],function(){
	require(['jquery', 'carousel', 'common','base','zoom'], function($, slided, com,base,zoom) {
		$('#head').load('./baseHead.html',function(){
			base.headHover();
		});
		//cookie和ajax请求
		var cookieArr = com.getCookie('goodslist');
		cookieArr = cookieArr ? JSON.parse(cookieArr) : [];
	});
	
});