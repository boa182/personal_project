;(function($){
	//wrap的传参
	(function(){
		var $wrap = $('#warp1');
		var $a = $wrap.find('a');
		$a.on('click',function(){
			location.href = 'html/detalist.html';
			
		})
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
})(jQuery);
