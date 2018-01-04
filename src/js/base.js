define(['jquery','common'],function($,com){
	return{
		headHover:function(){
			var $menu = $('.menu');
			$menu.on('mouseenter',function(){
				$(this).find('i').removeClass('icon-arrow2-bottom').addClass('icon-jiantou-copy');
				
			}).on('mouseleave',function(){
				$(this).find('i').removeClass('icon-jiantou-copy').addClass('icon-arrow2-bottom');
				$(this).find('li').removeClass('active');
			});
			$menu.on('mouseenter','li', function() {
				$(this).addClass('active').siblings().removeClass('active');
			
			});
			
		},
		//返顶效果
		backTop:function(){
			window.onscroll = function() {
				//当前可视窗口的高度
				var h = $(window).height();
				var t = 488 + $(document).scrollTop();
				if(t > h) {
					$('.f_top').fadeIn();
		
				} else {
					$('.f_top').fadeOut();
				}
		
			};
			$('.f_top').on('click', function() {
				var timer2 = setInterval(function() {
					var scrolly = $(window).scrollTop();
					var speed = scrolly / 10;
					scrolly -= speed;
					if(speed <= 0 || scrolly === 0) {
						clearInterval(timer2);
					}
					$(window).scrollTop(scrolly);
				}, 30)
			});
			
		},
	}
})
