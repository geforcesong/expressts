var webpack = require('webpack');
const package = require('./package.json');

module.exports = {
    entry: './web/views/about/client/main.ts',
    output: {
        path: './public/build',
        filename: `app.${package.version}.bundle.js`
    },
    module: {
        loaders: [
            { test: /\.component.ts$/, loader: 'ts!angular2-template' },
            { test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts' },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.css$/, loader: 'raw' },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loaders: ["raw-loader", "less-loader"]
            }
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