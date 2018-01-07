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

		var cookieArr = com.getCookie('goodslist');
		cookieArr = cookieArr ? JSON.parse(cookieArr) : [];
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
	(function(){
		//ajax请求
		var id = location.search.match(/\d+/)[0];
		var p = new Promise(function(resolve){
			$.ajax({
				type:"get",
				url:"../api/datalist.php",
				data:'id='+id,
				dataType:'json',
				success:function(res){
					
					resolve(res);
				}
			});
			
		});
		p.then(function(res){
			var item = res[0];
			var str =`<div class="fr">
						<h1><span>自营</span>${item.name}</h1>
						<div class="priceBox">
							<span>药房价:</span>
							<span>￥&nbsp;${item.SalePrice}.00</span>
							<span><del>${item.MarketPrice}.00</del></span>						
						</div>
						<div class="linkBox">
							<button id="btnCar"><i class="iconfont icon-gouwuche"></i>加入购物车</button>
							<input type="text" placeholder="请输入电话"/>
							<button>药师回拨</button>
							<p>
								本品为处方药，凭处方购买！如需咨询，请拨打400-007-0958或在线咨询，1号大药房实体店为您服务。
							</p>
							<i></i>
							<a>100%正品</a>
							<i></i>
							<a>满79包邮</a>
							<i></i>
							<a>药监认证</a>
						</div>
					<div class="appBox">
						<img src="http://s.maiyaole.com/images/product/app_code.jpg">
						<img src="http://s.maiyaole.com/images/product/app_code.jpg">
						<p>用1药网APP下单 享更多优惠&nbsp;&nbsp;&nbsp;&nbsp;电话问诊专家
三分钟连线专业医生</p>
					</div>
				</div>
				<div class="magnifier fl" id="magnifier1">
					<div class="magnifier-container">
						<div class="images-cover"></div>
						<!--当前图片显示容器-->
						<div class="move-view"></div>
						<!--跟随鼠标移动的盒子-->
					</div>
					<div class="magnifier-assembly">
						<div class="magnifier-btn">
							<span class="magnifier-btn-left">&lt;</span>
							<span class="magnifier-btn-right">&gt;</span>
						</div>
						<!--按钮组-->
						<div class="magnifier-line">
							<ul class="clearfix animation03">
								<li>
									<div class="small-img">
										<img src=${item.Pic180} />
									</div>
								</li>
								<li>
									<div class="small-img">
										<img src="../images/2.jpg" />
									</div>
								</li>
								<li>
									<div class="small-img">
										<img src="../images/3.jpg" />
									</div>
								</li>
								<li>
									<div class="small-img">
										<img src="../images/4.jpg" />
									</div>
								</li>
								<li>
									<div class="small-img">
										<img src="../images/5.jpg" />
									</div>
								</li>
							</ul>
						</div>
						<!--缩略图-->
					</div>
					<div class="magnifier-view"></div>
					<!--经过放大的图片显示容器-->
				</div>
 `	
   			$('#box').html(str);
//			$('#box').html(function(a,b){
//				 return b = str;
//				 
//			});
			//放大镜
			(function () {
	
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
			
			
			var $Img = $('.images-cover').find('img');
			//加入购物车
			$('#btnCar').on('click',function(){
				console.log($Img);
				console.log(11)
				var $copyImg = $Img.clone();
				var $buyCar = $('.buyCarLink');
				
				console.log(cookieArr)
//				//生成cookie
				var id = location.search.match(/\d+/)[0];
				cookieArr.push({
								id: id,
								qty: 1
							});
				if(cookieArr.length > 1) {
					for(i = 0; i <= cookieArr.length - 2; i++) {
			
						// 如果有相同项，就把相同项删除
						if(cookieArr[cookieArr.length - 1].id == cookieArr[i].id) {
							cookieArr.pop();
							cookieArr[i].qty++;
							break
						}

					}

				}

				console.log(1111111111111)
				base.setCookie('goodslist',cookieArr);
					$('.carcount').html(function(a, b) {
						console.log(a, b);
						return b * 1 + 1;
					});
//				
				
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
						width:200,
						height:200
					},'slow',function(){
						$copyImg.remove();
					});
			});
			
		});
		
	})();
		
		
		
		
		
		
		
		
		
	});
	
});