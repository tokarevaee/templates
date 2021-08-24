 "use strict";
 // npm install --save-dev gulp-strip-css-comments
 // npm install --save gulp-htmlmin
var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minify = require("gulp-csso");
var rename = require("gulp-rename");
const stripCssComments = require('gulp-strip-css-comments');
//
// gulp.task("styleb", function () {
//   gulp.src("source/sass/bootstrap/bootstrap-min.scss")
//     .pipe(plumber())
//     .pipe(sass())
//     .pipe(gulp.dest("source/css"))
//     .pipe(minify())
//     .pipe(rename("bootstrap-min.min.css"))
//     .pipe(gulp.dest("build/css"))
//     .pipe(server.stream());
// });

gulp.task("htmlmin", function() {
    return gulp.src("source/*.html")
        .pipe(htmlmin(
            {
                removeComments: true
            }
        ))
        .pipe(gulp.dest("build/"));
});

gulp.task("style", function () {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
      .pipe(stripCssComments())
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

var jsmin = require("gulp-jsmin");

gulp.task("jsmin", function () {
  gulp.src("source/js/**/*.js")
    .pipe(jsmin())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("build/js"));
});

 var htmlmin = require("gulp-htmlmin");

 gulp.task("minify", function() {
     return gulp.src("source/*.html")
         .pipe(htmlmin({collapseWhitespace: true,
             removeComments: true}))
         .pipe(gulp.dest("build/"));
 });

gulp.task("serve", function() {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("source/*.html",["html"]);
});

var imagemin = require("gulp-imagemin");

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")

  .pipe(imagemin([
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.jpegtran({progressive: true}),
    imagemin.svgo()
  ]))
    .pipe(gulp.dest("source/img"));
});

var webp = require("gulp-webp");

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
});

var svgstore = require("gulp-svgstore");
var cheerio = require("gulp-cheerio");
var replace = require("gulp-replace");

gulp.task("sprite", function () {
  return gulp.src("source/img/sprite/*.svg")

    .pipe(cheerio({
      run: function ($) {
        $("[fill]").removeAttr("fill");
        $("[stroke]").removeAttr("stroke");
        $("[style]").removeAttr("style");
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(replace('&gt;', '>'))
  .pipe(svgstore({
    inlineSvg: true
  }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"))
    .pipe(server.stream());
});

gulp.task("copy", function () {
  return gulp.src([
      "source/fonts/**/*",
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**",
      "source/js/**"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

var del = require("del");

gulp.task("clean", function () {
  return del("build");
});

var run = require("run-sequence");

gulp.task("build", function (done) {
  run(
"clean",
"copy",
"jsmin",
"style",
// "styleb",
"sprite",
"html",
  "minify",
    done
  );
});
