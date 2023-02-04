const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .setPublicPath('./')
    .js('src/js/app.js', 'public/assets/js')
    .sass('src/scss/app.scss', 'public/assets/css')
    .disableNotifications();

if (mix.inProduction()) {
    mix.version()
}

// mix.browserSync('probe.test');