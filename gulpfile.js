var gulp = require('gulp'),
   uglify = require('gulp-uglify'),
   gulpif = require('gulp-if'),
   sprity = require('sprity')

gulp.task('minify', function () {
   gulp.src('js/index.js')
      .pipe(uglify())
      .pipe(gulp.dest('build'))
});

// generate sprite.png and _sprite.scss
gulp.task('sprites', function () {
  return sprity.src({
    src: './images/**/*.{png,jpg}',
    style: './sprite.css',
    // ... other optional options
    // for example if you want to generate scss instead of css
    
  })
  .pipe(gulpif('*.png', gulp.dest('./dist/img/'), gulp.dest('./dist/css/')))
});