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
mix.postCss('resources/css/colors/aqua.css','public/css')
mix.postCss('resources/css/colors/blue.css','public/css')
mix.postCss('resources/css/colors/green-b.css','public/css')
mix.postCss('resources/css/colors/green.css','public/css')
mix.postCss('resources/css/colors/grey.css','public/css')
mix.postCss('resources/css/colors/lime.css','public/css')
mix.postCss('resources/css/colors/orange.css','public/css')
mix.postCss('resources/css/colors/pink.css','public/css')
mix.postCss('resources/css/colors/purple.css','public/css')
mix.postCss('resources/css/colors/red.css','public/css')
mix.postCss('resources/css/colors/yellow.css','public/css')


mix.postCss('resources/css/animate.css','public/css')
mix.postCss('resources/css/bootstrap-responsive.css','public/css')
mix.postCss('resources/css/bootstrap.css','public/css')
mix.postCss('resources/css/boxed.css','public/css')
mix.postCss('resources/css/flexslider.css','public/css')
mix.postCss('resources/css/ie.css','public/css')
mix.postCss('resources/css/main.css','public/css')
mix.postCss('resources/css/one-page.css','public/css')
mix.postCss('resources/css/prettyPhoto.css','public/css')
mix.postCss('resources/css/responsiveslides.css','public/css')
mix.postCss('resources/css/rev-settings.css','public/css')
mix.postCss('resources/css/style.css','public/css')
mix.postCss('resources/css/switcher.css','public/css')
mix.postCss('resources/css/wide-screen.css','public/css')
mix.postCss('resources/css/wide.css','public/css')


// javascript
mix.js('resources/js/js/bootstrap.min.js', 'public/js')
mix.js('resources/js/js/contact.js', 'public/js')
mix.js('resources/js/js/custom.js', 'public/js')
mix.js('resources/js/js/easing.js', 'public/js')
mix.js('resources/js/js/ender.js', 'public/js')
mix.js('resources/js/js/jquery.flexslider-min.js', 'public/js')
mix.js('resources/js/js/jquery.isotope.min.js', 'public/js')
mix.js('resources/js/js/jquery.lazyload.js', 'public/js')
mix.js('resources/js/js/jquery.min.js', 'public/js')
mix.js('resources/js/js/jquery.prettyPhoto.js', 'public/js')
mix.js('resources/js/js/jquery.ui.totop.js', 'public/js')
mix.js('resources/js/js/responsiveslides.min.js', 'public/js')
mix.js('resources/js/js/rev-setting-1.js', 'public/js')
mix.js('resources/js/js/selectnav.js', 'public/js')
mix.js('resources/js/js/switcher.js', 'public/js')


mix.js('resources/js/bootstrap.min.js', 'public/js')
mix.js('resources/js/contact.js', 'public/js')
mix.js('resources/js/custom.js', 'public/js')
mix.js('resources/js/easing.js', 'public/js')
mix.js('resources/js/ender.js', 'public/js')
mix.js('resources/js/html5shiv.js', 'public/js')
mix.js('resources/js/jquery.countdown.js', 'public/js')
mix.js('resources/js/jquery.flexslider-min.js', 'public/js')
mix.js('resources/js/jquery.isotope.min.js', 'public/js')
mix.js('resources/js/jquery.lazyload.js', 'public/js')
mix.js('resources/js/jquery.min.js', 'public/js')
mix.js('resources/js/jquery.prettyPhoto.js', 'public/js')
mix.js('resources/js/jquery.smooth-scroll.min.js', 'public/js')
mix.js('resources/js/jquery.ui.totop.js', 'public/js')
mix.js('resources/js/responsiveslides.min.js', 'public/js')
mix.js('resources/js/rev-setting-1.js', 'public/js')
mix.js('resources/js/selectnav.js', 'public/js')
mix.js('resources/js/switcher.js', 'public/js')


    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps();
