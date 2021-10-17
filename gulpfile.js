var gulp = require("gulp");

var browserSync = require("browser-sync").create();

gulp.task("server", function (cb) {
  browserSync.init({
    open: "external",
    host: "classhelper.com",
    port: "80",
    proxy: "classhelper.com/",
    browser: "chrome",
    watch: true,
  });
  cb();
});
gulp.task("reloadBrowser", function (cb) {
  console.log("Reloading Browser");
  browserSync.reload();
  cb();
});
