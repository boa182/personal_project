require(['config'],function(){
	require(['jquery', 'carousel', 'common','base','zoom'], function($, slided, com,base,zoom) {
		$('#head').load('./baseHead.html',function(){
			base.headHover();
		});
		//cookie和ajax请求
		var cookieArr = com.getCookie('goodslist');
		cookieArr = cookieArr ? JSON.parse(cookieArr) : [];
		
		if(cookieArr==[]){
			$('.nothing').show();
			$('.inner').hide();
		}else{
			$('.nothing').hide();
			$('.inner').show();
			var goodsId = [];
			cookieArr.forEach(function(item){
				goodsId.push(item.id);
			});
			ajz(goodsId);
			console.log(goodsId);
		};
		function ajz(goodsId){
			
			var str ="";
			
			goodsId.forEach(function(item){
				$.ajax({
					type:"get",
					url:"../api/buycar.php",
					data:{
						id:item
					},
					success:function(res){
						console.log(JSON.parse(res));
						var res = JSON.parse(res);
						str+=`<tr id=${res[0].gid}>
								<td><input type="radio" /></td>
								<td><img src="${res[0].Pic180}"/><span>${res[0].name}</span></td>
								<td>￥${res[0].MarketPrice}</td>
								<td>
									<button class="cut">-</button>
									<input type="text" value="1"/>
									<button class="push">+</button>
								</td>
								<td>0.04kg</td>
								<td>有货</td>
								<td>￥322.00</td>
								<td>
									<button>收藏</button>
									<button class="del">删除</button>
								</td>
							</tr>`
						$('tbody').html(str);
						$('.del').on('click',function(){
							var $tr = $(this).closest('tr');
							var $curId = $tr.attr('id');
							
							cookieArr.forEach(function(items,i){
								if($curId==items.id){
									cookieArr.splice(i,1);
		
									
								}
							})
							//重新写入删除后的id
							base.setCookie('goodslist',cookieArr);
							$tr.remove();
						});
						$('.push').on('click',function(){
							var val = $(this).siblings('input');
							val.val(function(a,b){
								return b*1+1
							})
							
						});
						$('.cut').on('click',function(){
							var val = $(this).siblings('input');
							val.val(function(a,b){
								if(b>0){
									
									return b*1-1
								}else{
									return 0
								}
							})
						});
					}
				});
			});
		};
		
		
		
	});
	
});