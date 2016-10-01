// this is to enable ES6 in node by running it through Babel
// basically, we are creating a browser-like environment for

require ('babel-register')
require ('babel-polyfill')

global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
