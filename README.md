# 壹药网多页面应用（仅供个人学习参考）
## 技术栈 html+css/css3+jquery+requiredjs+bootstrap+php+gulp
### 一、如何跑通项目
- 把yyw.sql文件导入数据库
- 打开Wampserver64配置端口
```
  //步骤是apache->httpd-vhosts.conf->写下下面的代码
 listen 81
  <VirtualHost *:81>
    ServerName localhost
    DocumentRoot F:\111\src
    <Directory  "F:\111\src/">
      Options +Indexes +Includes +FollowSymLinks +MultiViews
      AllowOverride All
      Require local
	</Directory>
</VirtualHost>
```
- 在浏览器输入localhost：81 就ok了
### 二、项目中遇到的困难
#### 1、使用gulp编译scss->css
- 安装与运行（安装了nodejs环境）</br>
npm install --global gulp </br>
- 本地安装gulp </br>
作为项目的开发依赖（devDependencies）安装： </br>
npm install --save-dev gulp </br>
- 安装插件  </br>
  npm install --save gulp-sass  </br>
- 创建gulpfile.js文件
```
//require()模块化
//引入gulp模块,得到一个对象或者函数
var gulp = require('gulp');
var sass = require('gulp-sass');

var path = {
	  sass:'./src/sass/*.scss'
}
//通过任务实现sass-》css
gulp.task('compileSass',function(){
	  gulp.src(path.sass).pipe(sass()).pipe(gulp.dest('./src/css'))
	
});
// 自动化任务
// 监听sass文件修改，自动编译
gulp.task('jtSass', function() {
	  // 监听这个文件，当文件有修改时，执行响应任务
	  gulp.watch(path.sass, ['compileSass']);
});
```
- 在命令行输入 gulp compileSass
