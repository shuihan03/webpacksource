
        (function(modules) {
          function require(fileName) {
            const fn = modules[fileName];
            const module = { exports:{}};
            fn(require, module, module.exports)
            return module.exports
          }
          require('/Users/gaojian124/Documents/demo/webpacksource/webpacksource/src/index.js')
        })({'/Users/gaojian124/Documents/demo/webpacksource/webpacksource/src/index.js' : function(require, module, exports) {"use strict";

var _greeting = require("./greeting.js");

document.write((0, _greeting.greeting)("森林"));},'./greeting.js' : function(require, module, exports) {// greeting.js
// export function greeting(name) {
//     return "你好" + name;
//   }
"use strict";},})
    