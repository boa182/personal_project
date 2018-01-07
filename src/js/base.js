define(['jquery', 'common'], function($, com) {
	return {
		headHover: function() {
			var $menu = $('.menu');
			var $userProvince = $('#user_province');
			$('#headerAllProvince').on('click','a',function(){
				$userProvince.html($(this).html());
			});
			$menu.on('mouseenter', function() {
				$(this).find('i').removeClass('icon-arrow2-bottom').addClass('icon-jiantou-copy');

			}).on('mouseleave', function() {
				$(this).find('i').removeClass('icon-jiantou-copy').addClass('icon-arrow2-bottom');
				$(this).find('li').removeClass('active');
			});
			$menu.on('mouseenter', 'li', function() {
				$(this).addClass('active').siblings().removeClass('active');

			});
			var $head = $('#head');
			$head.hover(function() {
				this.style.zIndex = '102';
			}, function() {
				this.style.zIndex = '0';

			});
		},
		//返顶效果
		backTop: function() {
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
		nav2: function() {
			//nav2的动画hover
			(function() {
				$('#nav').hover(function() {
					this.style.zIndex = '10000002';
					$('.nav_2')[0].style.zIndex = '10000002';
				}, function() {
					this.style.zIndex = '0';
					$('.nav_2')[0].style.zIndex = '0';
				});
				//				$('.nav_2').hover(function(){
				//					this.style.zIndex = '10000002';
				//				},function(){
				//					this.style.zIndex = '0';
				//				});
				//				
				$('.nav_2').on('mouseover', 'li', function() {
					$(this).animate({
						left: 10
					}, 300);
				}).on('mouseleave', 'li', function() {
					$(this).animate({
						left: 0
					}, 300);
				});
			})();
		},
		cirle: function() {
			//圆圈跳动的动画
			(function() {
				var $cirle = $('.aside_bottom .cirle');
				$('#commitC').on('mouseenter', 'li', function() {
					$(this).animate({
						top: '-20px'
					}, 100, function() {
						$(this).animate({
							top: 0,
						}, 30)
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
		},
		
		

	}
})