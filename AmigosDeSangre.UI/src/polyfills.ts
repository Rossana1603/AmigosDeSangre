import 'core-js/es6';
import 'core-js/es7/reflect';

require('zone.js/dist/zone');
require('web-animations-js/web-animations.min.js');

if (process.env.ENV !== 'production') {
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
