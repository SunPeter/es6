var gulp=require("gulp")
	traceur = require('gulp-traceur'),
	babel=require("gulp-babel")

gulp.task("es6",function  () {
	return gulp.src("learn/src/**/*.js")
		   .pipe(babel())
		   .pipe(gulp.dest("learn/dest"))
})

gulp.task("default",function(){
	gulp.watch("learn/src/**/*.js",["es6"])
})