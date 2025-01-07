// String Methods

let str = "Hello guys i hope you are doing good"

//includes() method
// The includes() method determines whether a string contains the characters of a specified string.

let check = str.includes("guys")
console.log(check) // true

//indexOf() method
// The indexOf() method returns the position of the first occurrence of a specified value in a string.

let index = str.indexOf("guys")
console.log(index) // 6

//StartsWith() method
// The startsWith() method determines whether a string begins with the characters of a specified string.

console.log(str.startsWith("Hello")) // true
console.log(str.startsWith("hello"))// false

//Slice() method
// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

let newStr = str.slice(0, 5)
console.log(newStr) // Hello

//toLowerCase() method
// The toLowerCase() method converts a string to lowercase letters.

let x = "My nAmE iS Gayanand"
console.log(x.toLowerCase()) // my name is gayanand

//toUpperCase() method
// The toUpperCase() method converts a string to uppercase letters.

let y = "My nAmE iS Gayanand"
console.log(y.toUpperCase()) // MY NAME IS GAYANAND

//trim() method
// The trim() method removes whitespace from both sides of a string.

let serchText = "   Hello guys i hope you are doing good   "
console.log(serchText.trim()) // Hello guys i hope you are doing good
console.log(serchText) //    Hello guys i hope you are doing good