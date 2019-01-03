global.temp = "a";
console.log(1, temp);
const file_load = require("./subfile02.js");
console.log(2, temp);

/**
* result
* 1 'a'
* 3 'a'
* 4 'b'
* 2 'b'
*/
