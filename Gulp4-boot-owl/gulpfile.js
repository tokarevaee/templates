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

gulp.task("styleb", function () {
  return gulp.src("source/sass/bootstrap/bootstrap.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("source/css"))
    .pipe(minify())
    .pipe(rename("bootstrap.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("styleot", function () {
  return gulp.src("source/sass/OwlCarousel/owl.theme.default.scss")
      .pipe(plumber())
      .pipe(sass())
      .pipe(gulp.dest("source/css"))
      .pipe(minify())
      .pipe(rename("owl.theme.default.min.css"))
      .pipe(gulp.dest("build/css"))
      .pipe(server.stream());
});

gulp.task("styleo", function () {
  return gulp.src("source/sass/OwlCarousel/owl.carousel.scss")
      .pipe(plumber())
      .pipe(sass())
      .pipe(gulp.dest("source/css"))
      .pipe(minify())
      .pipe(rename("owl.carousel.min.css"))
      .pipe(gulp.dest("build/css"))
      .pipe(server.stream());
});

const stripCssComments = require('gulp-strip-css-comments');

gulp.task("style", function () {
  return gulp.src("source/sass/style.scss")
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
 return gulp.src("source/js/**/*.js")
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

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.parallel("style"));
  gulp.watch("source/*.html", gulp.parallel("html"));
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

var run = require("gulp4-run-sequence");

gulp.task("build", function (done) {
  run(
    "clean",
    "copy",
    "jsmin",
    "style",
      'styleo',
      'styleot',
      "styleb",
      "html",
      "minify",
    done()
  );
});
