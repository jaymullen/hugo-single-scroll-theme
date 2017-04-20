var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require("gulp-autoprefixer")

    // Compile SCSS files to CSS
    gulp.task("scss", function () {
        gulp.src("assets/scss/**/*.scss")
            .pipe(sass({
                outputStyle : "compressed"
            }))
            .pipe(autoprefixer({
                browsers : ["last 20 versions"]
            }))
            .pipe(gulp.dest("static/css"))
    })

    gulp.task("css", function(){
      gulp.src("assets/css/**/*.css")
          .pipe(gulp.dest("static/css"))
    });

    gulp.task("js", function(){
        gulp.src("assets/js/**/*.js")
            .pipe(gulp.dest("static/js"))
    })

    // Watch asset folder for changes
    gulp.task("watch", ["scss"], function () {
        gulp.watch("assets/scss/**/*", ["scss"])
        gulp.watch("assets/css/**/*", ["css"])
        gulp.watch("assets/js/**/*", ["js"])
    })

    // Set watch as default task
    gulp.task("default", ["watch"])
