// Modules Import and Export
//Importing a module

// import minus, { PI, add } from './moduleExport.js'
// console.log(PI); // 3.14159265359
// console.log(add(2, 3)); // 5
// console.log(minus(5, 2)); // 3


// for importing everything from a module, use the * as syntax
import * as Utils from './moduleExport.js'
console.log(Utils.PI); // 3.14159265359
console.log(Utils.add(2, 3)); // 5
console.log(Utils.minus(5, 2)); // 3