var webpack = require('webpack');
const package = require('./package.json');

module.exports = {
    entry: {
        'about':'./web/views/about/client/main.ts',
        'home':'./web/views/home/client/main.ts'
    },
    output: {
        path: './public/build',
        filename: `app.[name].${package.version}.bundle.js`
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
        new webpack.optimize.CommonsChunkPlugin(`common.${package.version}.js`)
    ]
};