require(['config'], function() {
	require(['jquery', 'carousel', 'common', 'base'], function($, slided, com, base) {
		$('#head').load('./baseHead.html', function() {

			base.headHover();
		});
		base.backTop();
		base.nav2();
		base.cirle();
		//进入页面获取cookie，在此基础上增加cookie
		var cookieArr = com.getCookie('goodslist');
		cookieArr = cookieArr ? JSON.parse(cookieArr) : [];

		//手工琴特效
		(function() {
			var $itemChoose = $('.itemChoose');
			var $list_ul = $('.list_ul');
			$itemChoose.on('click', 'h3', function() {
				if($(this).hasClass('show')) {
					$(this).removeClass('show').next('ul').slideUp();
					$(this).find('i').html('+');
				} else {
					$(this).addClass('show').next('ul').slideDown();
					$(this).find('i').html('—');

				}
			});

		})();
		//ajax数据生成商品列表
		(function() {

			function fenye(page, qty) {
				var $ul = $('#goods ul');
				$ul.html("");
				$.ajax({
					type: "get",
					url: "../api/list.php",
					dataType: "json",
					data: {
						page: page,
						qty: qty,
					},
					success: function(res) {
						var goodsArr = res.data;

						var goods = document.getElementById('goods');
						var ul = document.createElement('ul');
						ul.innerHTML = goodsArr.map(function(item) {
							return `<li id="${item.gid}">
										<img src="${item.Pic180}"/>
										<p class="price">价格是￥${item.SalePrice}/件</p>
										<p class="name">${item.goodName}</p>
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

						//生成页码
						var pageNum = Math.ceil(res.total / res.qty);
						var $pageBox = $('#pageBox');
						var str = '';
						for(i = 1; i <= pageNum; i++) {
							if(i == page) {
								str += `<span class="active">${i}</span>`
							} else {
								str += `<span>${i}</span>`

							}
						}
						$pageBox.html(str)

						var $ul = $('#goods ul');

						//传参到详情页
						$ul.on('click', 'img', function() {
							var id = $(this).closest('li').attr('id');
							location.href = './../html/datalist.html?id=' + id
						});
						//商品按钮的加减
						$('.push').on('click', function() {
							$(this).siblings().find('input').val(function(num, num2) {
								console.log(num, num2);
								return num2 * 1 + 1;
							});
						});
						$('.cut').on('click', function() {
							$(this).siblings().find('input').val(function(idex, num2) {
								if(num2 > 0) {
									return num2 * 1 - 1;

								} else {
									return 0;
								}
							});
						});
						//购物车特效，很炫很酷
						$ul.on('click', 'button', function() {
							
							var $currentLi = $(this).closest('li');
							var $img = $currentLi.children('img');
							var $copyImg = $img.clone();
							var $buyCar = $('.buyCarLink');
							var id = $(this).closest('li').attr('id');
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
							console.log(cookieArr);
							base.setCookie('goodslist',cookieArr);
							$('.carcount').html(function(a, b) {
								console.log(a, b);
								return b * 1 + 1;
							});

							$copyImg.css({
								position: 'absolute',
								left: $img.offset().left,
								top: $img.offset().top,
								width: $img.width()
							});
							$copyImg.appendTo('body');

							$copyImg.animate({
								left: $buyCar.offset().left + 100,
								top: $buyCar.offset().top,
								width: 50
							}, 'slow', function() {
								$copyImg.remove();
							});

						});
					}
				});

			}
			fenye(1, 70)
			//点击页码重新加载商品信息		
			$('#pageBox').on('click', 'span', function() {

				var page = this.innerHTML;
				//当前页面设置高亮
				$(this).addClass('active').siblings().removeClass('active');
				fenye(page, 70)

			});

		})();
	});

});