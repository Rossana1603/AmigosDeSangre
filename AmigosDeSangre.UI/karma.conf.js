module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine', 'intl-shim'],

        files: [{ pattern: './config/karma-test-shim.js', watched: false }],
        browserNoActivityTimeout: 200000,
        preprocessors: {
            './config/karma-test-shim.js': ['webpack', 'sourcemap']
        },

        webpack: require('./config/webpack.test'),

        webpackMiddleware: { stats: 'errors-only' },

        webpackServer: { noInfo: true },

        coverageReporter: {
            dir : 'coverage/',
            reporters: [
                { type: 'text-summary', subdir: 'PhantomJS' },
                { type: 'json', subdir: 'PhantomJS' },
                { type: 'html', subdir: 'PhantomJS' },
                { type: 'lcovonly', subdir: 'PhantomJS' }
            ]
             /*reporters: [
                { type: 'html', dir: 'coverage/html-js', subdir: '.' },
                { type: 'json', dir: 'coverage/json', subdir: '.' }
            ]*/
        },

        reporters: [ 'mocha', 'coverage' ],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    };

    config.set(_config);
};
