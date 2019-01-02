'use strict';

module.exports = function() {
  $.gulp.task('js:app', function() {
    return $.gulp.src($.config.appJS)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.concat('app.js'))
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest($.config.build + '/js'));
  });
};