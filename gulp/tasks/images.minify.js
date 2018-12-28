'use strict';

module.exports = function() {
    $.gulp.task('images:minify', function() {
        return $.gulp.src($.config.dev + '/images/**/*.*', { since: $.gulp.lastRun('images:minify') })
            .pipe($.gp.imagemin())
            .pipe($.gulp.dest($.config.build + '/images'));
    });
};