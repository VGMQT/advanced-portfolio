'use strict';

module.exports = function() {
  $.gulp.task('sass', function() {
    return $.gulp.src($.config.dev + '/styles/main.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sassGlob())
      .pipe($.gp.sass()).on('error', $.gp.notify.onError({ title: 'Styles' }))
      .pipe($.gp.autoprefixer({ browsers: $.config.prefixBrowsers }))
      .pipe($.gp.csso())
      .pipe($.gp.rename('main.min.css'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.build + '/css'))
      .pipe($.browserSync.stream());
  });
};