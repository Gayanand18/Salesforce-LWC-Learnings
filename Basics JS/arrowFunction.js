// Arrow Function
// Arrow function is a short-hand syntax for writing function expressions. It uses the => syntax. Arrow functions are anonymous and change the way this binds in functions.
// Arrow functions are best suited for non-method functions. They cannot be used as constructors and will throw an error when used with new.

//Example of normal function
// function abc(){
//     console.log("Hello World");
// }
// abc();


// changing above function to arrow function
// const abc = () => console.log("Hello World");
// abc()


// function sum(data){
//     let sum = data + 10
//     return sum
// }
// console.log(sum(10))

const sum = data => {
    let sum = data + 10
    return sum
}
console.log(sum(10))

// Arrow function with multiple parameters
const sums = (data1, data2) => {
    let sums = data1 + data2+ 5
    return sums
}
console.log(sums(10, 20))

const sum1 = (data1, data2) => data1 + data2+5
console.log(sum1(10, 20))

var arr = [1, 2, 3, 4, 5]
let newArr = arr.map((item) => item * 2)
console.log(newArr)


// Problem solved by Arrow Functions

// let obj = {
//     name: "Sachin",
//     getName: function(){
//         console.log(this.name)
//         function fullName(){
//             console.log(this.name)
//             console.log("my full name is " + this.name + " Tendulkar")
//         }
//         fullName()
//     }
// }
// obj.getName()

// to solve above problem we can use arrow function
 
let obj = {
    name: "Sachin",
    getName: function(){
        console.log(this.name)
        let fullName = () => {
            console.log(this.name)
            console.log("my full name is " + this.name + " Tendulkar")
        }
        fullName()
    }
}
obj.getName()