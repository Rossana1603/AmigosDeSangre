var helpers = require('./helpers');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['', '.ts', '.js', '.scss', '.json', '.css']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.scss$/,
                include: [/node_modules/],
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader')
            }, {
                test: /\.scss$/,
                exclude: [/node_modules/],
                loaders: ['raw-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader?limit=1000' }
        ]
    },
    sassLoader: {
        data: "$relativeUrl: 'currentwebapp/';"
    }
}
