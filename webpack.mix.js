const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


// .css
mix.postCss('resources/css/colors/orange.css','public/css')
mix.postCss('resources/css/font-awesome/css/font-awesome.css','public/css')
mix.postCss('resources/css/bootstrap-responsive.css','public/css')
mix.postCss('resources/css/bootstrap.css','public/css')
mix.postCss('resources/css/cp.css','public/css')
mix.postCss('resources/css/flexslider.css','public/css')
mix.postCss('resources/css/main.css','public/css')
mix.postCss('resources/css/prettyPhoto.css','public/css')
mix.postCss('resources/css/responsiveslides.css','public/css')
mix.postCss('resources/css/site.css','public/css')
mix.postCss('resources/css/styles.css','public/css')
mix.postCss('resources/css/switcher.css','public/css')
mix.postCss('resources/css/tailwind.css','public/css')
mix.postCss('resources/css/wide-screen.css','public/css')
mix.postCss('resources/css/','public/css')

// javascript
mix.js('resources/js/app.js', 'public/js')
mix.js('resources/js/bootstrap.js', 'public/js')
mix.js('resources/js/bootstrap.min.js', 'public/js')
mix.js('resources/js/cp.js', 'public/js')
mix.js('resources/js/custom.js', 'public/js')
mix.js('resources/js/easing.js', 'public/js')
mix.js('resources/js/ender.js', 'public/js')
mix.js('resources/js/jquery.flexslider-min.js', 'public/js')
mix.js('resources/js/jquery.flexslider.min.js', 'public/js')
mix.js('resources/js/jquery.lazyload.js', 'public/js')
mix.js('resources/js/jquery.min.js', 'public/js')
mix.js('resources/js/jquery.prettyPhoto.js', 'public/js')
mix.js('resources/js/jquery.ui.totop.js', 'public/js')
mix.js('resources/js/rev-setting-1.js', 'public/js')
mix.js('resources/js/selectnav.js', 'public/js')
mix.js('resources/js/site.js', 'public/js')
mix.js('resources/js/switcher.js', 'public/js')

    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();
