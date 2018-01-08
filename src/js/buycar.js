require(['config'],function(){
	require(['jquery', 'carousel', 'common','base','zoom'], function($, slided, com,base,zoom) {
		$('#head').load('./baseHead.html',function(){
			base.headHover();
		});
		//cookie和ajax请求
		var cookieArr = com.getCookie('goodslist');
		cookieArr = cookieArr ? JSON.parse(cookieArr) : [];
		var goodsid = [];
		cookieArr.forEach(function(item){
			var obj = {};
			obj.id = item.id;
			goodsid.push(obj);
		});
		goodsid = JSON.stringify(goodsid);
		console.log(cookieArr,goodsid);
		
		if(cookieArr==[]){
			$('.nothing').show();
			$('.inner').hide();
		}else{
			$('.nothing').hide();
			$('.inner').show();
			
		};
		var p = new Promise(function(resolve){
			$.ajax({
				type:"get",
				url:"../api/buycar.php",
				dataType:'json',
				data:{
					id:goodsid
				},
				success:function(res){
					resolve(res);
				}
			});
		})
		p.then(function(res){
			var str = $.map(res.data,function(items){
				//获取每个商品的数量
				var qty = (function qty(){
					for(var i = 0;i<cookieArr.length;i++){
						if(items.gid==cookieArr[i].id){
							return cookieArr[i].qty;
						}
					}
				})();
				
				return `<tr id=${items.gid}>
								<td><input type="checkbox" /></td>
								<td><img src="${items.Pic180}"/><span>${items.name}</span></td>
								<td data-price="${items.MarketPrice}">￥${items.MarketPrice}</td>
								<td>
									<button class="cut">-</button>
									<input type="text" value="${qty}"/>
									<button class="push">+</button>
								</td>
								<td>0.04kg</td>
								<td>有货</td>
								<td class='countGoodsPrice'>￥${qty*items.MarketPrice}元</td>
								<td>
									<button>收藏</button>
									<button class="del">删除</button>
								</td>
						</tr>`
				
			}).join('');
			
			$('tbody').html(str);
			//处理商品数量
			$('tbody').on('click','.cut',function(e){
				e.stopPropagation();
				var $input = $(this).siblings('input');
				var $curTd =  $(this.closest('td'));
				var price = $curTd.prev().attr('data-price');
				var $curId = $(this).closest('tr').attr('id');
				console.log($input[0],$curTd[0],price,$curId);
				
				$input.val(function(i,oldvalue){
					//点击时数量减一
					if(oldvalue<=1){
						return 1
					}
					return --oldvalue
				});
				//根据数量变化改变总价
				$curTd.siblings('.countGoodsPrice').html('￥'+$input.val()*price);
				
				//把数量放进cookie保存
				cookieArr.forEach(function(items){
					if($curId == items.id){
						items.qty = $input.val();
					}
				})
				base.setCookie('goodslist',cookieArr);
			}).on('click','.push',function(e){
				e.stopPropagation();
				var $input = $(this).siblings('input');
				var $curTd =  $(this.closest('td'));
				var price = $curTd.prev().attr('data-price');
				var $curId = $(this).closest('tr').attr('id');
				$input.val(function(i,oldvalue){					
					return ++oldvalue
				})
				//根据数量变化改变总价
				$curTd.siblings('.countGoodsPrice').html('￥'+$input.val()*price);
				//把数量放进cookie保存
				cookieArr.forEach(function(items){
					if($curId == items.id){
						items.qty = $input.val();
					}
				})
				base.setCookie('goodslist',cookieArr);
				
			}).on('click','.del',function(e){
				e.stopPropagation();
				var $tr = $(this).closest('tr');
				var $curId = $tr.attr('id');
				cookieArr.forEach(function(items,i){
					if($curId == items.id){
						cookieArr.splice(i,1);
					}
				})
				base.setCookie('goodslist',cookieArr);
				$tr.remove();
			})
		})
		
		
	});
	
});