
//require()模块化
//引入gulp模块,得到一个对象或者函数
var gulp = require('gulp');
var sass = require('gulp-sass');

var path = {
	sass:'./src/sass/*.scss'
}
//通过任务实现saa-》css
gulp.task('compileSass',function(){
	gulp.src(path.sass).pipe(sass()).pipe(gulp.dest('./src/css'))
	
});
// 自动化任务
// 监听sass文件修改，自动编译
gulp.task('jtSass', function() {
	// 监听这个文件，当文件有修改时，执行响应任务
	gulp.watch(path.sass, ['compileSass']);
});