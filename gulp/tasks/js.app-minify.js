'use strict';

module.exports = function() {
  $.gulp.task('js:app-minify', function() {
    return $.gulp.src($.config.appJS)
      .pipe($.gp.babel({
        presets: ['@babel/env']
      }))
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('app.js'))
      .pipe($.gp.minify({
        ext:{
          min:'.min.js'
        },
        noSource: true
      }))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.build + '/js'));
  });
};