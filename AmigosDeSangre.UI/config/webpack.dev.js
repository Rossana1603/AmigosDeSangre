var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:3000',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        helpers.webpackHtmlCreatorDev(""),
        helpers.webpackHtmlCreatorDev("local"),
        helpers.webpackHtmlCreatorDev("dev"),
        helpers.webpackHtmlCreatorDev("qa"),
        helpers.webpackHtmlCreatorDev("prod")
    ],
    sassLoader: {
        data: "$relativeUrl: 'currentwebapp/';"
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
