var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var browserSync = require("browser-sync").create();

gulp.task("html-min",function(){
    
    var src = "./views/*.html"
    var dest = "./public/views";
    return gulp.src(src)
        .pipe($.htmlmin({collapseWhitespace : true}))
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({stream:true}));
    
});

gulp.task("less-to-css",function(){
    
    var src="./src/css/css.less";
    var dest = "./public/css"
    return gulp.src(src)
        .pipe($.sourcemaps.init())  
        .pipe($.less())
        .pipe($.autoprefixer())
        .pipe($.cssmin())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({stream:true}));
    
});

gulp.task('ng-min', function () {
    
    var src = "./src/js/**/*.js";
    var dest = "./public/js";
    return gulp.src(src)
        .pipe($.sourcemaps.init()) 
        .pipe($.ngmin())
        .pipe($.uglify())
        .pipe($.concat('angular.js'))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({stream:true}));
    
});

gulp.task("bundle-js-libs", function(){

    var src = ['./public/libs/angular/angular.min.js',
               './public/libs/angular-ui-router/release/angular-ui-router.min.js',
               './public/libs/angular-animate/angular-animate.min.js',
               './public/libs/jquery/dist/jquery.min.js',
               './public/libs/toastr/toastr.min.js'
              ];
    var dest = "./public/js";
    return gulp.src(src)
        .pipe($.concat("bundle-js-libs.js"))
        .pipe(gulp.dest(dest));
    
});

gulp.task("bundle-css-libs", function(){
    
    var src = ['./public/libs/normalize-css/normalize.css',
               './public/libs/toastr/toastr.min.css'
              ];
    var dest = "./public/css";
    return gulp.src(src)
        .pipe($.concat("bundle-css-libs.css"))
        .pipe($.cssmin())
        .pipe(gulp.dest(dest));
});

gulp.task("nodemon", function(){
    return $.nodemon({
        script : "server.js"
    });
});

gulp.task("watch-all", ["nodemon"], function () {
    
    browserSync.init({
        proxy: "localhost:3000"
        , port: 5000
        , notify: true
        , open: false
    }); 
    gulp.watch("./views/*.html",["html-min"]);
    gulp.watch("./src/css/*.less",["less-to-css"]);
    gulp.watch("./src/js/*.js",["ng-min"]);
   
    
});
