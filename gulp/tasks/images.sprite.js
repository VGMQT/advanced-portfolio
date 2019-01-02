'use strict';

module.exports = function() {
  $.gulp.task('images:sprite', function() {
    const spriteData = $.gulp.src($.config.dev + '/images/sprites/png/*.png')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        imgPath: '/images/sprites/png/sprite.png',
        cssFormat: 'scss'
      }));

    const cssStream = spriteData.css
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.dev + '/styles/misc'));

    return $.merge(cssStream);
  });
};