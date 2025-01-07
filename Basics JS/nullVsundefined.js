// Equality Comparison
// There are 2 types : 1. Normal comparison 2. Strict comparison\

//1. Normal comparison : == Only compares the values
//2. Strict comparison : === Compares the values and the types

// Normal comparison
console.log( 3 == 3); // true
console.log( 3 == '3'); // true
console.log( 3 == '4'); // false


// Strict comparison
console.log( 3 === 3); // true
console.log( 3 === '3'); // false
console.log( 3 === '4'); // false


// Null vs Undefined
// Null : It is a value that represents no value
// Undefined : It is a type that represents the absence of a value

var x
console.log(x); // undefined

var y = null
console.log(y); // null

console.log(x == y); // true
console.log(x === y); // false