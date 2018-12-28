'use strict';

module.exports = function() {
  $.gulp.task('images', function() {
    return $.gulp.src($.config.dev + '/images/**/*.*')
      .pipe($.gulp.dest($.config.build + '/images'));
  });
};