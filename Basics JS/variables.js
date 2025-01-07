/* Var Keyword */
// It can be re-declared and updated
// var keyword supports two types of scope: global scope and function scope but not block level scope

var course = "zero to hero";
console.log(window.course); // zero to hero

function abc() {
    var anotherCourse = "hero in LWC";
    console.log(anotherCourse); // hero in LWC
}
abc();
// console.log(anotherCourse); // ReferenceError: anotherCourse is not defined

//block level scope
if(2==2){
    var x = 10;
}
console.log(x); // 10


/* Let Keyword */
// It can be updated but not re-declared
// let keyword supports three types of scope: global scope, function scope and block level scope

let course2 = "zero to hero";
course2 = "hero in LWC";
console.log(course2); // hero in LWC
//console.log(window.course); // undefined

function abc2() {
    let anotherCourse2 = "hero in LWC";
    console.log(anotherCourse2); // hero in LWC
}
abc2();
//console.log(anotherCourse2); // ReferenceError: anotherCourse2 is not defined
if (2==2){
    let z = 'Salesforce';
    console.log(z); // Salesforce
}
//console.log(z); // ReferenceError: z is not defined

/* Const Keyword */
// It can neither be updated nor re-declared
// const keyword supports three types of scope: global scope, function scope and block level scope

const course3 = "zero to hero";
console.log(course3); // zero to hero
//course3 = "hero in LWC"; // TypeError: Assignment to constant variable.

function abc3() {
    const anotherCourse3 = "hero in LWC";
    console.log(anotherCourse3); // hero in LWC
}
abc3();
const anotherCourse3 = "new course";
console.log(anotherCourse3); // new course

if (2==2){
    const anotherCourse3 = 'Salesforce';
    console.log(anotherCourse3); // Salesforce
}
console.log(anotherCourse3)
