require.config({
	// 默认data-main文件所在的目录
	// baseUrl:'js',

	// 别名/虚拟路径
	paths:{
		'jquery':'../lib/jquery-3.2.1',
		
		'carousel':'../lib/ft-carousel.min'
	},
	shim:{
		// 设置依赖
		carousel:['jquery']
	}
});
