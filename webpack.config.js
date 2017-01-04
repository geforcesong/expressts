var webpack = require('webpack');
module.exports = {
    entry: './web/views/about/client/main.ts',
    output: {
        path: './public/build',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.component.ts$/, loader: 'ts!angular2-template'},
            {test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts'},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.css$/, loader: 'raw'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './web/views/about/about.ejs'
        // })
    ]
};