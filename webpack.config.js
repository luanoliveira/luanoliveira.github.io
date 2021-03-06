// webpack.config.js
var Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    .enableSassLoader()

    .addEntry('app', './assets/js/app.js')

    // ...
;

module.exports = Encore.getWebpackConfig();