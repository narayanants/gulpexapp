const gulp = require('gulp'),
      imagemin = require('gulp-imagemin'),
      uglify = require('gulp-uglify'),
      sass = require('gulp-sass');
      

/**
 * TOP LEVEL FUNCTIONS
 *   gulp.task() - Define tasks
 *   gulp.src()  - Point to files to use
 *   gulp.dest() - Points to the folder to output
 *   gulp.watch() - Watch files and folders for changes
 */

// Logs Message
gulp.task('message',()=>{
    return console.log('Gulp is running!');
});

//Copy all .html files
gulp.task('copyHtml',()=>{
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist')); 
});


//optimize  Images
gulp.task('imageMin',()=>{
   gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

// Minify JS

gulp.task('minify',()=>{
    gulp.src('src/js/*')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Compile Sass
gulp.task('sass',()=>{
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('default',['message','copyHtml','imageMin','minify','sass']);