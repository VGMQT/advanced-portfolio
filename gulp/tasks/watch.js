'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    // $.gulp.watch($.config.dev + '/js/**/*.js', $.gulp.series('js:app-lint'));
    $.gulp.watch($.config.dev + '/js/**/*.js', $.gulp.series('js:app-minify'));
    $.gulp.watch([$.config.dev + '/styles/**/*.scss', $.config.dev + '/styles/**/*.sass'], $.gulp.series('sass'));
    // $.gulp.watch($.config.dev + '/*.html', $.gulp.series('html'));
    $.gulp.watch($.config.dev + '/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch($.config.dev + '/fonts/**/*.*', $.gulp.series('fonts'));
    $.gulp.watch($.config.dev + '/images/**/*.*', $.gulp.series('images'));
  });
};