"use strict";

require("core-js/modules/es.array.flat");

require("core-js/modules/es.array.unscopables.flat");

var x = [[1, 2, 3], [1, 2, 3]];
console.log(x.flat());