require(['config'], function() {
	require(['jquery', 'carousel', 'common', 'base'], function($, slided, com,base) {
		$('#head').load('./baseHead.html',function(){
			
			base.headHover();
		});
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
					$(this).find('i').html('—');
					
				}
			});
			
		})();
		//底部导航点击
		(function(){
			var $page = $('#pageBox');
			$page.on('click','span',function(){
				$(this).addClass('active').siblings().removeClass('active');
				console.log(this);
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
									<div class="push">
										+
									</div>
									<div>
										<input type="text" value="1"/>
									</div>
									<div class="cut">
										-
									</div>
									<button class="fr"><i class="iconfont icon-gouwuche"></i>加入购物车</button>
								</div>
							</li>`
			}).join("");
			goods.appendChild(ul);
			var $ul = $('#goods ul');
			$ul.on('click','img',function(){
				location.href = './../html/datalist.html'
			});
			
			$('.push').on('click',function(){
				$(this).siblings().find('input').val(function(num,num2){
					console.log(num,num2);
					return num2*1+1;
				});
			});
			$('.cut').on('click',function(){
				$(this).siblings().find('input').val(function(idex,num2){
					if(num2>0){
						return num2*1-1;
						
					}else{
						return 0;
					}
				});
			});
			//购物车特效，很炫很酷
			$ul.on('click','button',function(){
				var $currentLi = $(this).closest('li');
				var $img = $currentLi.children('img');
				var $copyImg = $img.clone();
				var $buyCar = $('.buyCarLink');
				$('.carcount').html(function(a,b){
					console.log(a,b);
					return b*1+1;
				});
				
				$copyImg.css({
					position:'absolute',
					left:$img.offset().left,
					top:$img.offset().top,
					width:$img.width()
				});
				$copyImg.appendTo('body');
				
				$copyImg.animate({
					left:$buyCar.offset().left+100,
					top:$buyCar.offset().top,
					width:50
				},'slow',function(){
					$copyImg.remove();
				});
				
			});
			
			
			
		})();
	});
	
});