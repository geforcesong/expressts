var resolve = require('path').resolve;
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: {
        index: [
            resolve(__dirname, 'web', 'views', 'home', 'client', 'main.js')
        ]
    },
    output: {
        path: resolve(__dirname, 'public', 'assets'),
        filename: '[name].bundle.js'
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel?{"presets":["es2015"]}',
                exclude: /node_modules/
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel?{"presets":["es2015"]}',
            css: 'vue-style!css!postcss!less'
        }
    },
    postcss: function() {
        return [];
    },
    resolve: {
        root: [
            resolve(__dirname),
            resolve(__dirname, 'www')
        ],
        extensions: [
            '',
            '.js',
            '.vue'
        ]
    },
    plugins:[
        new CopyWebpackPlugin([
            { from: 'node_modules/bootstrap/dist/js/bootstrap.min.js', to: 'libs/bootstrap/bootstrap.min.js' },
            { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'libs/bootstrap/bootstrap.min.css' },
            { from: 'node_modules/jquery/dist/jquery.min.js', to: 'libs/jquery/jquery.min.js' }
        ])
    ]
};
