// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data=require('./6-alternative-flavor.js');
const fun=require('./7-mind-grenade.js');
// const data = require('./06-alternative-flavor')
// require('./07-mind-grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
// console.log(names);

// sayHi(names.sushil);
// sayHi('sushil');

console.log(fun);