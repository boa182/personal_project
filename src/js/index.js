require(['config'],function(){
	require(['jquery', 'carousel', 'common'], function($, slided, com) {
	
		//	首页传参的传参
		//	  (function(){
		//		var $wrap = $('#warp1');
		//		var $a = $wrap.find('a');
		//		$a.on('click',function(){
		//			location.href = 'html/datalist.html';
		//			
		//		})
		//	})();
		//返顶效果
		(function(){
			window.onscroll = function(){
				//当前可视窗口的高度
				var h = $(window).height();
				var t = 508+$(document).scrollTop();
				if(t>h){
					$('.f_top').fadeIn();
			
				}else{
					$('.f_top').fadeOut();
				}
			
			};
			$('.f_top').on('click',function(){
				var timer2 = setInterval(function(){
					var scrolly = $(window).scrollTop();
					var speed = scrolly/10;
					scrolly-=speed;
					if(speed <= 0||scrolly ===0){
						clearInterval(timer2);
					}
					$(window).scrollTop(scrolly);
				},30)
			});
			
		})();
		
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
		//头部的hover
		(function() {
			var $myyaowang = $('.myyaowang');
			var $phoneApp = $('#phoneApp');
			var $menu_bd_panel = $('.menu_bd_panel')
			var $menu_bd_app = $('.menu_bd_app');
			var $user_province = $('#user_province');
			$user_province.on('mouseover', function() {
				$(this).siblings('i').removeClass('icon-arrow2-bottom').addClass('icon-jiantou-copy');
	
			}).on('mouseleave', function() {
				$(this).siblings('i').addClass('icon-arrow2-bottom').removeClass("icon-jiantou-copy");
	
			});
			$user_province.siblings().on('mouseenter', function() {
				$(this).siblings('i').removeClass('icon-arrow2-bottom').addClass('icon-jiantou-copy');
	
			}).on('mouseleave', function() {
				$(this).siblings('i').addClass('icon-arrow2-bottom').removeClass("icon-jiantou-copy");
			});
			
			
			$myyaowang.on('mouseenter', 'a',function() {
				$(this).addClass('down').find('i').removeClass('icon-arrow2-bottom').addClass('icon-jiantou-copy');
				$menu_bd_panel.show();
	
			}).on('mouseleave',function() {
				$(this).find('a').removeClass('down').find('i').addClass('icon-arrow2-bottom').removeClass("icon-jiantou-copy").find('ul').hide();
				$menu_bd_panel.hide();
		
			});
	
			$phoneApp.on('mouseenter', function() {
				$phoneApp.addClass('down');
			}).on('mouseleave', function() {
				$phoneApp.removeClass('down');
	
			});
		})();
		
	})
})

