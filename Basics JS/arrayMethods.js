// Array Methods
// Array methods are built-in JavaScript methods that we can use on arrays. These methods help us to perform different operations on arrays. Some of the most commonly used array methods are:

let arr = [1, 2, 3, 4, 5];

// Syntax: arr.methodName(function(currentItem, index, actualArray) {
//     // code
// });

// map() - The map() method creates a new array with the results of calling a provided function on every element in the calling array.

let newArray = arr.map(function (currentItem, index, array) {
    console.log(`Current Item: ${currentItem} Index: ${index} Array: ${array}`);
    return currentItem * 2;
}
);
console.log(arr);
console.log(newArray);

// filter() - The filter() method creates a new array with all elements that pass the test implemented by the provided function.

let filteredValues = arr.filter(function (currentItem, index, array) {
    return currentItem > 3;
}
);
console.log(arr);
console.log(filteredValues);

// every() - The every() method tests whether all elements in the array pass the test implemented by the provided function.

let age = [32, 33, 16, 40];
let isAllAdult = age.every(function(currentItem){
    return currentItem >= 18;
})
console.log(isAllAdult);

// some() - The some() method tests whether at least one element in the array passes the test implemented by the provided function.

let isAnyAdult = age.some(function(currentItem){
    return currentItem >= 18;
})
console.log(isAnyAdult);

// sort() - The sort() method sorts the elements of an array in place and returns the sorted array.

var names = ['Harshit', 'Amit', 'Rahul', 'Rohit'];
console.log(names.sort());

// sorting of numbers
var numbers = [1, 3, 2, 5, 4, 12, 15, 18];
let sortedValue = numbers.sort(function(a, b){
    return a - b;
})
console.log(sortedValue);

// reduce() - The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

//syntax: arr.reduce(function(total, currentValue, currentIndex, array){
//     // code
// }, initialValue);    
//NOte: total is also called as accumulator.

let num = [12, 78, 45, 23, 56];
let sum = num.reduce(function(total, currentItem){
    return total + currentItem;
}, 0);
console.log(sum);

// forEach() - The forEach() method executes a provided function once for each array element.

num.forEach(function(currentItem){
    console.log(currentItem);
});