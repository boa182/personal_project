require(['config'],function(){
	require(['jquery', 'carousel', 'common','base'], function($, slided, com,base) {
	
		//	首页传参的传参
		//	  (function(){
		//		var $wrap = $('#warp1');
		//		var $a = $wrap.find('a');
		//		$a.on('click',function(){
		//			location.href = 'html/datalist.html';
		//			
		//		})
		//	})();
		//头部的hover
		base.headHover();
		//返顶效果
		base.backTop();
		
		//底部的tab标签切换
		(function(){
			var $linkBox = $('.linkBox');
			var $lis = $linkBox.find('li');
			var $fshop = $('.fshop');
			var $friendly = $('.friendly');
			$lis.on('mouseenter',function(){
				$(this).addClass('cur').siblings().removeClass('cur');
				if($lis[0].classList.contains('cur')){
					$fshop.show();
					$friendly.hide();
				}else{
					$fshop.hide();
					$friendly.show();
				}
			})
		})();
		//时钟走动
		(function() {
			var $clock_m = $('.clock-m');
			var deg = 0;
			setInterval(function() {
				deg++;
				$clock_m[0].style.transform = 'rotateZ(' + deg + 'deg)'
			}, 100)
	
		})();
	
		//圆圈跳动的动画
		(function() {
			var $cirle = $('.aside_bottom .cirle');
			$('#commitC').on('mouseenter','li',function(){
				$(this).animate({
					top:'-20px'
				},100,function(){
					$(this).animate({
						top: 0,
					},30)
				})
			})
			
			$cirle.on('mouseenter', function() {
				$(this).animate({
					top: '-5px',
	
				}, 100, function() {
					$(this).animate({
						top: 0,
					})
				})
			})
		})();
		//大小轮播图
		(function() {
			$('#carousel_big').FtCarousel();
			$('.smallCarousel').FtCarousel();
		})();
		//nav2的动画hover
		(function() {
			$('.nav_2').on('mouseover', 'li', function() {
				$(this).animate({
					left: 10
				}, 300);
			}).on('mouseleave', 'li', function() {
				$(this).animate({
					left: 0
				}, 300);
			})
		})();

		
		
	})
})

