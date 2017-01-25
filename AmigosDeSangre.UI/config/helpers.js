var path = require('path');
var _root = path.resolve(__dirname, '..');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var environmentUrls = require("./includes/environmentUrls.json");
var cssincludes = require("./includes/cssincludes.json");
var jsincludes = require("./includes/jsincludes.json");

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}


function webpackHtmlCreatorProd(environment) {
    return new HtmlWebpackPlugin({
        filename:"/" +( environment ? "index-" + environment + ".html" : "index.html"),
        template: "./src/index.ejs",
        environmentUrl: environmentUrls[environment],
        environment:environment,
        cssincludes: cssincludes,
        jsincludes: jsincludes
    });
};

function webpackHtmlCreatorDev(environment) {
    return new HtmlWebpackPlugin({
        filename:environment ? "index-" + environment + ".html" : "index.html",
        template: "./src/index.ejs",
        environmentUrl: environmentUrls[environment],
        environment:environment,
        cssincludes: cssincludes,
        jsincludes: jsincludes
    });
};
exports.root = root;
exports.webpackHtmlCreatorDev = webpackHtmlCreatorDev;
exports.webpackHtmlCreatorProd = webpackHtmlCreatorProd;

