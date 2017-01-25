Error.stackTraceLimit = Infinity;

require('core-js/es6');
require('reflect-metadata');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy'),
require('zone.js/dist/sync-test'),
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

//UnitTests need intl for Date
//solution based mainly on http://stackoverflow.com/questions/38811094/how-can-i-test-the-rendering-of-an-element-using-the-date-pipe-in-angular-2
require('karma-intl-shim');
var enUsLocaleData = require("./includes/en-us.json");
Intl.__addLocaleData(enUsLocaleData);

var appContext = require.context('../src', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);

var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(
    browser.BrowserDynamicTestingModule,
    browser.platformBrowserDynamicTesting()
);
