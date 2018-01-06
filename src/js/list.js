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
					$(this).find('i').html('——');
					
				}
			});
			
		})();
		//text
		(function(){
			var goodsArr = [];
			for(var i = 1;i<41;i++){
				var obj ={
					
					src:"../images/"+i+".jpg",
					price:i+"1",
					goodName:"黯然销魂第"+i+'个版本',
					name:"九转还魂丹版本第1"+i+"个版本，吃了还你10年的青春靓丽，专业研发人员老谢谢，通过千峰质检",
					talk:'1'+i
				};
				goodsArr.push(obj);
			}
			var goods = document.getElementById('goods');
			var ul = document.createElement('ul');
			ul.innerHTML = goodsArr.map(function(item){
				return `<li>
								<img src="${item.src}"/>
								<p class="price">价格是￥${item.price}/件</p>
								<p class="name">${item.name}</p>
								<p class="talk"><i class="iconfont icon-dianzan"></i>1药网自营 <span>评价（${item.talk}）</span></p>
								<div class="smb">
									<div>
										+
									</div>
									<div>
										<input type="text" value="1"/>
									</div>
									<div>
										-
									</div>
									<button class="fr"><i class="iconfont icon-gouwuche"></i>加入购物车</button>
								</div>
							</li>`
			}).join("");
			goods.appendChild(ul);
			
			console.log(JSON.stringify(goodsArr));
		})();
	});
	
});