var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts',
        app: './src/main.ts',
        images:'./src/images.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts', '.scss', '.css']
    },
    externals: {
        "angular": "angular"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "file-loader?name=[name].[ext]",

            },
            {
                test: /\.scss$/,
                include: [/node_modules/],
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader')
            },
             {
                test: /\.scss$/,
                exclude: [/node_modules/],
                loaders: ['raw-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        })

    ]
};
