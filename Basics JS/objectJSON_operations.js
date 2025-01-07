// Object and JSON operations
let obj = {name: "John", age: 30, city: "New York"};

//object.keys() method
// The Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
console.log(Object.keys(obj)); // ["name", "age", "city"]

//object.values() method
// The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

console.log(Object.values(obj)); // ["John", 30, "New York"]    

//JSON.stringify() method
// The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

let str = JSON.stringify(obj);
console.log(str); // {"name":"John","age":30,"city":"New York"}

//JSON.parse() method
// The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.

console.log(JSON.parse(str)); // {name: "John", age: 30, city: "New York"}