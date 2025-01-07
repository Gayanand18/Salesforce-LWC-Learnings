// Spread Operator

// Spread Operator is used to split up array elements or object properties.

//1. Array
var arr = ["a", "b", "c"];
console.log(arr); // ["a", "b", "c"]
// array index starts from 0
console.log(arr[0]); // a
console.log(arr[1]); // b

//2. Object
var obj = {
    name: "John",
    age: 25,
    "full name": "John Doe"
}
console.log(obj); // {name: "John", age: 25}
console.log(obj.age); // 25
console.log(obj["age"])

console.log(obj["full name"]); // John Doe
//console.log(obj.full name); // error
obj.hobbies = "cricket"
console.log(obj); // {name: "John", age: 25, hobbies: "cricket"}



// Uses of Spread Operator

// 1. Expanding of String
let greeting = "Hello Everyone"
let charList = [...greeting]
console.log(charList); // ["H", "e", "l", "l", "o", " ", "E", "v", "e", "r", "y", "o", "n", "e"]
console.log(charList[0]); // H
console.log(charList[10]); // y

//2. combining of arrays
let arr1 = ["amazon", "flipkart"]
let arr2 = ["myntra", "jabong"]
let arr3 = [...arr1, ...arr2]
console.log(arr3); // ["amazon", "flipkart", "myntra", "jabong"]

//3. Adding values to an array
let arr4 = ["apple", "banana"]
let arr5 = [...arr4, "mango"]
console.log(arr5); // ["apple", "banana", "mango"]

//4. combining of objects
let obj1 = {
    name: "John",
    age: 25,
    date: "12-12-2012"
}   
let obj2 = {name: "Doe", age: 30, gender: "Male"}
let obj3 = {...obj1, ...obj2}
console.log(obj3); // {name: "Doe", age

//5. Shallow copy
var arr10 = ["x", "y", "z"]
arr10.push(20)
var arr11 = arr10
arr11.push(30)
console.log(arr10); // ["x", "y", "z", 20, 30]
console.log(arr11); // ["x", "y", "z", 20, 30]
//Note: arr10 and arr11 are pointing to the same memory location so if we change one array then the other array will also get changed.
//To avoid this we can use spread operator

var arr12 = ["x", "y", "z"]
var arr13 = [...arr12]
arr13.push(30)
console.log(arr12); // ["x", "y", "z"]
console.log(arr13); // ["x", "y", "z", 30]

//6. Nested copy
var arrObj = [{name: "John", age: 25}]
var arrObj1 = [...arrObj]
console.log(arrObj1); // [{name: "John", age: 25}]
arrObj1[0].name = "Doe"
console.log(arrObj1); // [{name: "Doe", age: 25}]
console.log(arrObj); // [{name: "Doe", age: 25}]

//Note: shallow copy only works at one level datastructure, it does not work for nested datastructure.

// Hack for Nested copy
var arrObj2 = [{name: "John", age: 25}]
var arrObj3 = JSON.parse(JSON.stringify(arrObj2))
console.log(arrObj3); // [{name: "John", age: 25}]
arrObj3[0].name = "Doe"
console.log(arrObj3); // [{name: "Doe", age: 25}]
console.log(arrObj2); // [{name: "John", age: 25}]
//Note: JSON.parse(JSON.stringify(arrObj2)) is used to create a deep copy of an object.
