var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('../DeployFolder/Content/'),
        publicPath: '',//'/Content/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    htmlLoader: {
        minimize: false 
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),
        helpers.webpackHtmlCreatorProd(""),
        helpers.webpackHtmlCreatorProd("local"),
        helpers.webpackHtmlCreatorProd("dev"),
        helpers.webpackHtmlCreatorProd("qa"),
        helpers.webpackHtmlCreatorProd("prod")
    ],
     sassLoader: {
        data: "$relativeUrl: '../ModuleMVC/Content/YourFolder/';"
    }
});
