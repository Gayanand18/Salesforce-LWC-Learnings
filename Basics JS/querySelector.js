//querySelector is a method that returns the first element that matches a specified CSS selector(s) in the document.
//Two types of querySelector:
//1. querySelector() - returns the first element that matches a specified CSS selector in the document.
//2. querySelectorAll() - returns all elements that matches a specified CSS selector in the document.

// Example 1: querySelector()

let element = document.querySelector("div");
console.log(element);
element.style.color = "red"

// Example 2: querySelectorAll()
let elementAll = document.querySelectorAll("div");
console.log(elementAll);
Array.from(elementAll).forEach(function(item){
    item.style.color = "green";
})
