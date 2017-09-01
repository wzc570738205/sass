var gulp = require('gulp');//拷贝文件


gulp.task("ss",function(){
	gulp.src("*").pipe(gulp.dest("D:/phpStudy/WWW/sasaWeb3"));
		
});

gulp.task('testless',function(){
	gulp.src('aa.html').pipe(gulp.dest('D:/phpStudy/WWW/sasaWeb'));
});
gulp.task('all',function(){//copy这些项目收文件到服务器下
	gulp.src(['*/**/*','index.html','!node_modules/**/*','!*.json','!*.project']).pipe(gulp.dest('D:/phpStudy/WWW/sasaWeb'));
});
gulp.task('watch',function(){//监听所有文件
	gulp.watch(['*/**/*','index.html','!node_modules/**/*','!*.json','!*.project'],['all']);
});
gulp.task('sass',function(){//编译sass为css
	gulp.src('sass/*.{scss,sass}').pipe(gulp.dest('D:/phpStudy/WWW/sasaWeb/sass'));
});
gulp.task('script',function(){//把所有js合并并压缩，然后复制在js目录下
	gulp.src(['js/**/*'])
	.pipe(concat('all.js'))//合并文件并起名
	.pipe(gulp.dest('D:/phpStudy/WWW/sasaWeb/js'))//复制在js目录下
	.pipe(uglify())//压缩文件
	.pipe(rename('all-min.js'))//重新起名为new.js
	.pipe(gulp.dest('D:/phpStudy/WWW/sasaWeb/js'))//复制在js目录下
});

