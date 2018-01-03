require.config({
	paths:{
		'jquery':'../lib/jquery-3.2.1',
		'carousel':'../lib/ft-carousel.min',
		'common':'common'
	},
	shim:{
		carousel:['jquery']
	}
});

require(['jquery','carousel','common'],function($,slided,com){
	

//	首页传参的传参
//	  (function(){
//		var $wrap = $('#warp1');
//		var $a = $wrap.find('a');
//		$a.on('click',function(){
//			location.href = 'html/datalist.html';
//			
//		})
//	})();
	 
	 //时钟走动
	 (function(){
	 	var $clock_m = $('.clock-m');
	 	var deg = 0;
	 	setInterval(function(){
	 		deg++;
	 		$clock_m[0].style.transform = 'rotateZ('+deg+'deg)'
	 	},100)
	 	
	 })();
	 
	//aside的圆圈跳动
	(function(){
		var $cirle = $('.aside_bottom .cirle');
		$cirle.on('mouseenter',function(){
			$(this).animate({
				top:'-5px',
				
			},100,function(){
				$(this).animate({
					top:0,
				})
			})
		})
	})();
	//大轮播图
	(function(){
		$('#carousel_big').FtCarousel();
	})();
	//nav2的动画hover
	(function(){
		$('.nav_2').on('mouseover','li',function(){
			$(this).animate({
				left:10
			});
		}).on('mouseleave','li',function(){
			$(this).animate({
				left:0
			});
		})
	})();
	//头部的hover
	(function(){
		var $myyaowang = $('#myyaowang');
		var $phoneApp = $('#phoneApp');
		var $menu_bd_panel = $('.menu_bd_panel')
		var $menu_bd_app = $('.menu_bd_app');
		var $user_province = $('#user_province');
		$user_province.on('mouseover',function(){
			$(this).siblings('i').removeClass('icon-arrow2-bottom').addClass('icon-jiantou-copy');
		
		}).on('mouseleave',function(){
			$(this).siblings('i').addClass('icon-arrow2-bottom').removeClass("icon-jiantou-copy");

		});
		$user_province.siblings().on('mouseenter',function(){
			$(this).siblings('i').removeClass('icon-arrow2-bottom').addClass('icon-jiantou-copy');
			
		}).on('mouseleave',function(){
			$(this).siblings('i').addClass('icon-arrow2-bottom').removeClass("icon-jiantou-copy");
		});
		$myyaowang.on('mouseenter',function(){
			$myyaowang.addClass('down').find('i').removeClass('icon-arrow2-bottom').addClass('icon-jiantou-copy');
			
		});
		$menu_bd_panel.on('mouseleave',function(){
			$myyaowang.removeClass('down').find('i').addClass('icon-arrow2-bottom').removeClass("icon-jiantou-copy");

		});
		
		$phoneApp.on('mouseenter',function(){
			$phoneApp.addClass('down');
		}).on('mouseleave',function(){
			$phoneApp.removeClass('down');
			
		});
	})();

	
})
