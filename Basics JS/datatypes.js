// numbers
//var x = 10
var x = 10.12
console.log(typeof x) // number

//big int
var y = 1234567890123456789012345678901234567890n
console.log(typeof y) // bigint

//string
var name = "John"
console.log(typeof name) // string

//boolean
var isMonday = true
console.log(typeof isMonday) // boolean

//undefined
var z
console.log(typeof z) // undefined

//object
var obj = {} 
console.log(typeof obj) // object   
var arr = []
console.log(typeof arr) // object

//symbol
var sym = Symbol("id")
console.log(typeof sym) // symbol

//null
var x1 = 10
x1 = null
console.log(typeof x1) // object
//note: null is an object


//string() Boolearn()
console.log(typeof new String("John")) // object