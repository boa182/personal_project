define(['jquery'],function($){
	return{
		/**
		 * [生成随机颜色]
		 * @return {String} [(255,255,0)]
		 */
		randomColor:function (){
			var r,g,b;
			r=this.randomNum(0,255);
			g=this.randomNum(0,255);
			b=this.randomNum(0,255);
			var rgb = "rgb("+r+','+g+','+b+')';
			return rgb;
		},



		/**
		 * [生成随机整数]
		 * @param  {[Num]} min [最小值]
		 * @param  {Num} max [最大值]
		 * @return {Num]}     [10000]
		 */
		randomNum:function (min,max){
			var num = Math.floor(Math.random()*(max-min+1))+min;
			return num;
		},



		/**
		 * [去除数组中的重复项]
		 * @param  {Array} arr [原数组]
		 * @return {Array}     [返回一个新数组]
		 */
		noRepeat:function (arr){
			var obj = {},arr1 = [];
				for(i=0;i<arr.length;i++){
					if(obj[arr[i]]===undefined){
						obj[arr[i]]=1;
						arr1.push(arr[i]);					
					}				
				}
			return arr1;
		},



		/**
		 * [统计数组中每一项出现的次数,有去重和统计出现次数的功能]
		 * @param  {Array} arr [需要统计的数组]
		 * @return {Object}     [统计结果,obj中的属性为JSON字符串，提取时要用JSON.parse方法]
		 */
		 arrObject:function(arr){
			var obj = {};
			for(i=0;i<=arr.length-1;i++){
				if(!obj[JSON.stringify(arr[i])]){
					obj[JSON.stringify(arr[i])] = 1;
				}else{
					obj[JSON.stringify(arr[i])]++;
				}
			}
			return obj;
		},

		/**
		 * [数组中的对象去重，并且统计对象出现的次数qty,写进数组的对象中]
		 * @author jhua 2017-05-18
		 * @param  {[Array]} arr [需要处理的数组]
		 * @return {[Array]}     [返回一个新数组，去重，统计并添加qty。]
		 */
		addQty:function (arr){
			var obj = {};
			var arr1=[];
			for(i=0;i<=arr.length-1;i++){
				if(!obj[JSON.stringify(arr[i])]){
					obj[JSON.stringify(arr[i])] = 1;
				}else{
					obj[JSON.stringify(arr[i])]++;
				}
			}
			for(var attr in obj){
				arr1.push(JSON.parse(attr));
				arr1[arr1.length-1].qty = obj[attr];
			}
			return arr1;
		},


		/**
		 * [生成随机小写字母数字组合的验证码]
		 * @param  {Num} num [生成验证码的长度]
		 * @return {String}     [验证码]
		 */
		randomNL:function (num){
			var res = '';
			var arr1 = ['0','1','2','3','4','5','6','7','8','9','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
			for(i=0;i<num;i++){
				var a = this.randomNum(0,arr1.length-1);
				res +=arr1[a]; 
			}
			return res;
		},



		/**
		 * [获取元素样式的方法，兼容ie8-]
		 * @param  {Element} ele  [要获取样式的节点]
		 * @param  {String} attr [css属性]
		 * @return {String}      [返回css属性对应的样式]
		 */
		getStyle:function (ele,attr){
			// 保存最终样式
			var res;
			if(window.getComputedStyle){
				res = getComputedStyle(ele)[attr];
			}else if(ele.currentStyle){
				res = ele.currentStyle[attr];
			}else{
				res = ele.style[attr];
			}

			return res;
		},
		// var box = document.getElementById('box')
		// getStyle(box,'background-color')




		/**
		 * [给元素添加事件，兼容IE8以下浏览器]
		 * @param {Node} 	 ele     [需要绑定事件的元素]
		 * @param {String} 	 type    [事件类型]
		 * @param {Function} handler [事件处理函数]
		 * @param {Boolean}  capture [是否捕获]
		 */
		addEvent:function (ele,type,handler,capture){
			// 判断是否支持事件监听
			// 标准浏览器
			if(ele.addEventListener){
				ele.addEventListener(type,handler,capture);
			}

			// IE8-
			else if(ele.attachEvent){
				ele.attachEvent('on' + type,handler);
			}

			// 传统绑定事件方式
			else{
				ele['on' + type] = handler;
			}
		},
		// addEvent(box,'click',function(){},true)



		//cookie操作
		//写入，读取，删除

		/**
		 * [写入和修改（同名修改内容）cookie]
		 * @param  {[String]} name    [cookie名]
		 * @param  {[String]} value   [cookie值]
		 * @param  {[Date]} expires [cookie过期时间]
		 * @param  {[String]} path    [cookie保存路径]
		 */
		setCookie:function (name,value,expires,path){
			var str_cookie = name+'='+value;

			if(expires){
				str_cookie +=';expires='+expires;
			}

			if(path){
				str_cookie +=';path='+path;
			}

			document.cookie = str_cookie;
		},

		/**
		 * [删除cookie]
		 * @param  {[string]} name [要删除的cookie的name]
		 * @param  {[string]} path [要删除‘/’目录下的cookie就就上‘/’，否则删除的是自己的目录下的cookie]
		 */
		removeCookie:function (name,path){
			var now = new Date();
			now.setDate(now.getDate()-5);
			if(path){	
				this.setCookie(name,null,now,path)
			}else if(!path){
				this.setCookie(name,null,now)
			}
			
		},


		/**
		 * [获取cookie值]
		 * @param  {[String]} name [需要获取的cookie名]
		 * @return {[String]}      [返回对应cookie的值]
		 */
		getCookie:function (name){
			var cookies = document.cookie;
			if(!cookies){
				return '';
			}

			var res = '';
			var arr = cookies.split('; ');
			arr.forEach(function(item){
				var temp = item.split('=');
				if(temp[0] === name){
					res = temp[1];
				}
			});

			return res;
		},


		/**
		 * [缓冲动画函数]
		 * @param  {[Node]}   Node     [要绑定动画的节点]
		 * @param  {[Object]}   obj    [要改变的属性与属性值的目标值,用对象保存{width:200,opcity:0.8,'font-size':20}]
		 * @param  {Function} callback [回调函数，用于链式动画, function(){animate(Node,obj)}  ]
		 */
		animate:function (Node,obj,callback){
			var timerLen = 0;
			for(var attr in obj){
				// 用于链式动画，统计前面动画个数
				timerLen++
				createTimer(attr);
			}
			
			function createTimer(attr){
				var target = obj[attr];


				//根据节点和属性改名，每个节点的属性都有自己专属的label,这样清除定时器时就不会乱。
				var timerName = attr + 'timer';


				// 每次设置定时器时先清除该节点该属性的定时器，避免多个定时器 作用在同一属性下。
				clearInterval(Node[timerName])


				// 设置该属性该节点的定时器
				Node[timerName]=setInterval(function(){


					// 每次执行都获取当前该属性的属性值,注意有单位
					var current =this.getStyle(Node,attr);


					// 提取单位，用于后面拼接字符串
					var arr = current.match(/[a-z]+$/i);

					// 判断没单位的属性返回空字符串
					var unit = arr ? arr[0] : '';

					// 提取当前属性的数值
					var current = parseFloat(current);

					// 根据目标属性值和当前值，设置速度的缓冲
					var speed =(target-current)/10;

					// 把速度设置为整数，避免最后速度太小时，属性值改变太慢。
					// 考虑速度可能为负值的情况。
					speed= speed > 0 ? Math.ceil(speed):Math.floor(speed);
					if(attr ==='opacity'){
						speed = speed>0 ? 0.1 : -0.1;
					}

					// 设置计算后的新的属性值
					Node.style[attr] = current+speed+unit;


					// 清除定时器的条件，保险起见写2个，2个意思一样的。				
					if(speed==0 || current==target){
						clearInterval(Node[timerName]);
						Node.style[attr] = target+unit;
						// 当所有动画完成后才执行回调函数
						timerLen--			
						if(typeof callback==='function'&&timerLen===0){
							callback();
						}						
					}


				},30)		
			}

		},

		/**
		 * [ajax请求]
		 * @param  {[Object]} options [
		 *                            	ajax({
											url:'api/weibo_like.php',   //**必须写,要简单处理一下后面不要带有参数，避免出现2个city的情况
											type:'get',					//可以不写。默认是get
											async:true,					//可以不写。默认是ture
											data:{id:1},				//可以不写。后端就不会根据此筛选数据
											callback:function(res){		//**必须写，用于接受后端的返回值
													//处理数据			//写的话要求属性名必须相同
											}
										})
		  																
		    							]
		 * @return {[eachType]}     res    [以参数的形式传进回调函数中，已经经过JSON转换处理]
		 */
		ajax:function (options){

			// 默认参数
			var defaults = {
				// 请求类型
				type:'get',

				// 是否异步
				async:true
			}

			// 扩展默认参数
			for(var attr in options){
				defaults[attr] = options[attr];
			}

			var opt = defaults;


			var xhr = null;

			try{
				xhr = new XMLHttpRequest();
			}catch(error){
				try{
					xhr = new ActiveXObject("Msxml2.XMLHTTP");
				}catch(err){
					try{
						xhr = new ActiveXObject("Microsoft.XMLHTTP");
					}catch(e){
						alert('你不适合浏览这个网站，请下载google浏览器')
					}
				}
				
			}

			xhr.onreadystatechange = function(){
				if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
					if(typeof opt.callback === 'function'){//[]{}
						var res = xhr.responseText;

						// if(/^[\[\{}]/.test(xhr.responseText)){
						// 	res = JSON.parse(xhr.responseText);
						// }


						// 自动转换json字符串
						try{
							res = JSON.parse(res);
						}catch(err){
							res = res;
						}

						opt.callback(res);
					}
				}
			}

			// 处理数据
			// {id:20,msg:'xx'} => 'id=20&msg=xx'
			var params = '';
			if(opt.data){
				for(var attr in opt.data){
					params += attr + '=' + opt.data[attr] + '&';
				}

				// 去掉最后一个&
				params = params.slice(0,-1);
			}
			
			// 判断get/post请求，以便传递参数
			if(opt.type === 'get'){
				opt.url += '?' + params;
			}

			xhr.open(opt.type,opt.url,opt.async);

			if(opt.type === 'post'){
				xhr.setRequestHeader('content-type',"application/x-www-form-urlencoded");
			}else{
				params = null;
			}

			xhr.send(params);
		},



		/**
		 * [判断数据类型]
		 * @param  {[data]} data [各种需要判断的数据类型]
		 * @return {[String]}      [判断结果]
		 */
		type:function (data){
			// [object Object]
			return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
		},
		// type(123) => 'number'
		// type({}) => 'object'
		// type([]) => 'array'
		// type(/aa/) => 'regexp'
		
		
		/**
		 * [blink description]
		 * @param  {obj} obj [$实例]
		 * @return {[type]}   [鼠标移上去有闪烁效果]
		 */
		blink:function(obj){
			obj.mouseenter(function(){
				
				$(this).stop(true).animate({opacity:0.8}).animate({opacity:1})
			})
		},

		// 定时器
		/**
		 * [timer description]
		 * @param  {[string]}   date ['2018-2-3 10:30:10']
		 * @param  {Function} fn   [回调函数，传进一个参数为一个倒计时字符串]
		 * @return {[type]}        [description]
		 */
		timer:function(date,fn){
			var timer
			time();
			$(window).focus(function(){
				time();
			})
			$(window).blur(function(){
				clearInterval(timer)
			})
			function time(){
				clearInterval(timer)
				timer = setInterval(function(){
					var setTime = Date.parse(date);
					var now = Date.now();
					var differ = setTime - now;
					
					if(differ <=0){
						
						clearInterval(timer);
						days='00';
						hours='00';
						minutes='00';
						deconds='00';
						res = `${days}天${hours}时${minutes}分${seconds}秒`
						return
					}
					// 得到相对与1970年1月1日8时的时间，减去8小时再减去1天
					// 下面获取的日时分秒直接就是2个日子相差的时间。
					differ =  new Date(differ-28800000-86400000)
					
					var days = differ.getDate()===31? 0 : differ.getDate();
					var hours = differ.getHours();
					var minutes = differ.getMinutes();
					var seconds = differ.getSeconds();

					days = ('' + days).length<2? '0'+days : days;
					hours =( '' + hours).length<2? '0'+hours : hours;
					minutes = ('' + minutes).length<2? '0'+minutes : minutes;
					seconds =( '' + seconds).length<2? '0'+seconds : seconds;
					
					
					res = `${days}天${hours}时${minutes}分${seconds}秒`

					
					fn(res);
				},1000)
				
			}
			 
		},

		// timer('2017-6-12 9:10:30')
		// return 02天12时30分30秒
	}
})