var resolve = require('path').resolve;
var webpack = require('webpack');

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
    }
};
