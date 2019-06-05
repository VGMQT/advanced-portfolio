'use strict';

module.exports = function() {
  $.gulp.task('images', function() {
    return $.gulp.src([$.config.dev + '/images/**/*.*', '!' + $.config.dev + '/images/sprites/**/**.*'])
        .pipe($.gulp.dest($.config.build + '/images'));
  });
};