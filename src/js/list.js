require(['config'], function() {
	require(['jquery', 'carousel', 'common', 'base'], function($, slided, com,base) {
		base.headHover();
		base.backTop();
		base.nav2();
		base.cirle();
		//手工琴特效
		(function(){
			var $itemChoose = $('.itemChoose');
			var $list_ul = $('.list_ul');
			$itemChoose.on('click','h3',function(){
				if($(this).hasClass('show')){
					$(this).removeClass('show').next('ul').slideUp();
					$(this).find('i').html('+');
				}else{
					$(this).addClass('show').next('ul').slideDown();
					$(this).find('i').html('-');
					
				}
			});
			
		})();
		//text
		(function(){
			var goodsArr = [];
			for(var i = 0;i<28;i++){
				var obj ={
					id:"g"+i,
					src:"../images/g"+i+".jpg",
					price:i+"0"+i,
					name:"九转还魂丹版本"+i,
					talk:i+'1'
				};
				goodsArr.push(obj);
			}
			var goods = document.getElementById('goods');
			var ul = document.createElement('ul');
			ul.innerHTML = goodsArr.forEach(function(){})
			console.log(goodsArr);
		})();
	});
	
});