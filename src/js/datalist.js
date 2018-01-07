require(['config'],function(){
	require(['jquery', 'carousel', 'common','base','zoom'], function($, slided, com,base,zoom) {
		$('#head').load('./baseHead.html',function(){
			
			base.headHover();
		});
		//返顶效果
		base.backTop();
		//nav2的动画hover
		base.nav2();
		base.cirle();
		//放大镜
		(function() {
	
			var magnifierConfig = {
				magnifier : "#magnifier1",//最外层的大容器
				width : 500,//承载容器宽
				height : 500,//承载容器高
				moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
				zoom : 5//缩放比例
			};

			var _magnifier = magnifier(magnifierConfig);

		/*magnifier的内置函数调用*/
		/*
			//设置magnifier函数的index属性
			_magnifier.setIndex(1);
	
			//重新载入主图,根据magnifier函数的index属性
			_magnifier.eqImg();
		*/
	})();
	//导航跳转
		(function(){
			var $nav1 = $('#nav');
			$nav1.on('click','li',function(){
				location.href = './../html/list.html';
				console.log(this);
				
			});
			var $nav2 = $('.nav_2');
			$nav2.on('click', 'li', function() {
				location.href = './../html/list.html';
				console.log(this);
			
			});
			
		})();
	//加入购物车
	(function(){
		var $Img = $('.images-cover').find('img');
		$('#btnCar').on('click',function(){
			var $copyImg = $Img.clone();
			var $buyCar = $('.buyCarLink');
			$copyImg.css({
                    position:'absolute',
                    left:$Img.offset().left,
                    top:$Img.offset().top,
                    width:$Img.width()
                });
            $copyImg.appendTo('body');
            $copyImg.animate({
					left:$buyCar.offset().left+500,
					top:$buyCar.offset().top,
					width:10,
					height:10
				},'slow',function(){
					$copyImg.remove();
				});
		});
	})();
		
		
		
		
		
		
		
		
		
	});
	
});