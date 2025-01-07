// String Interpolation
// String interpolation is a process of evaluating string literals containing one or more placeholders.
// The placeholders are replaced with corresponding values to form a new string.
// The placeholders are defined using curly braces: {}.
// The placeholders can be positional or named.

var name1 = "Sales"
var name2 = "force"
console.log(name1 + name2) // Salesforce

var name = "Salesforce"
var age = 20
var str = "My name is " + name + " and I am " + age + " years old."
console.log(str) // My name is Salesforce and I am 20 years old.

var a = 2
var b = 3
var str1 = " the sum of " + a + " and " + b + " is " + a + b
console.log(str1)
// To avoid this above issues,  we can use string interpolation

var name1 ="John"
var age1 = 20
console.log(`My name is ${name1}`) // My name is John

var x = 20
var y = 30
console.log(`The sum of ${x} and ${y} is ${x + y}`) // The sum of 20 and 30 is 50

// Realtime example for lwc salesforce

var recordId = "a0D5g00000CJj5"
console.log(`https://salesforce.com/${recordId}`) // https://salesforce.com/a0D5g00000CJj5