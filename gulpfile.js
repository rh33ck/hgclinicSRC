"use strict";


const {src, dest, watch, series, parallel} = require("gulp");

// common
const browserSync = require("browser-sync").create();
const del = require("del");
const fileInclude = require("gulp-file-include");
const rename = require("gulp-rename");
// css
const sass = require("gulp-sass");
const gcmq = require("gulp-group-css-media-queries");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const cleanCss = require("gulp-clean-css");
// js
const uglify = require("gulp-uglify-es").default;
// images
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp"); // vulnerabilities
const webpHtml = require("gulp-webp-html");
const webpCss = require("gulp-webp-css");
// fonts
const ttf2woff = require("gulp-ttf2woff"); // 25 vulnerabilities
const ttf2woff2 = require("gulp-ttf2woff2");


const srcDir = "app";
const buildDir = "dist";
const globs = {
    src: {
        html: [srcDir + "/*.html", "!" + srcDir + "/_*.html"],
        scss: srcDir + "/scss/style.scss",
        js: srcDir + "/js/script.js",
        images: srcDir + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: srcDir + "/fonts/**/*.ttf", // ,eot,woff,woff2,svg
    },

    build: {
        html: buildDir + "/",
        css: buildDir + "/css/",
        js: buildDir + "/js/",
        images: buildDir + "/images/",
        fonts: buildDir + "/fonts/",
    },

    watch: {
        html: srcDir + "/**/*.html",
        scss: srcDir + "/scss/**/*.scss",
        js: srcDir + "/js/**/*.js",
        images: srcDir + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: srcDir + "/fonts/**/*.ttf", // ,eot,woff,woff2,svg
    },

    clean: buildDir + "/",
};


function serve(callback) {
    browserSync.init({
        server: {
            baseDir: buildDir + "/"
        },

        notify: false,
    });
}

function watchFiles(callback) {
    watch([globs.watch.html], html);
    watch([globs.watch.scss], scss);
    watch([globs.watch.js], js);
    watch([globs.watch.images], images);
    watch([globs.watch.fonts], fonts);
}

function clean(callback) {
    return del(globs.clean);
}

function html(callback) {
    return src(globs.src.html)
        .pipe(fileInclude({
            indent: true,
            // prefix: "@"
        }))
        .pipe(webpHtml())
        .pipe(dest(globs.build.html))
        .pipe(browserSync.stream());
}

function scss(callback) {
    return src(globs.src.scss)
        .pipe(sass())
        .pipe(gcmq())
        .pipe(autoprefixer({
            overrideBrowserslist: ["last 5 versions"],
            cascade: true
        }))
        .pipe(cssbeautify())
        .pipe(dest(globs.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(webpCss())
        .pipe(dest(globs.build.css))
        .pipe(browserSync.stream());
}

function js(callback) {
    return src(globs.src.js)
        .pipe(fileInclude({
            indent: true,
        }))
        .pipe(dest(globs.build.js))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(dest(globs.build.js))
        .pipe(browserSync.stream());
}

function images(callback) {
    return src(globs.src.images)
        .pipe(webp({
            quality: 70
        }))
        .pipe(dest(globs.build.images))
        .pipe(src(globs.src.images))
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3
        }))
        .pipe(dest(globs.build.images));
}

function fonts(callback) {
    src(globs.src.fonts)
        .pipe(ttf2woff())
        .pipe(dest(globs.build.fonts));
    return src(globs.src.fonts)
        .pipe(ttf2woff2())
        .pipe(dest(globs.build.fonts));
}


const build = series(clean, parallel(html, scss, js, images, fonts));
const main = parallel(build, watchFiles, serve);


exports.clean = clean;
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.build = build;
exports.main = main;
exports.default = main;
