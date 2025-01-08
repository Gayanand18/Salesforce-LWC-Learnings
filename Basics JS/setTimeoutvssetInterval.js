// SetTimeout vs SetInterval
// setTimeout() and setInterval() are two functions that are used to delay the execution of a function. The setTimeout() function is used to call a function after a specified amount of time. The setInterval() function is used to call a function repeatedly after a specified amount of time.
// The setTimeout() function is used to call a function after a specified amount of time. The setInterval() function is used to call a function repeatedly after a specified amount of time.

// setTimeout()

window.setTimeout(function() {
    console.log('This message is shown after 3 seconds');
}, 3000);

let timerId = window.setTimeout(function() {
    console.log("Hello");
}, 2000);
console.log(timerId); // 1
clearTimeout(timerId);



// setInterval()
let intervalId = window.setInterval(function() {
    console.log('This message is shown after every 1 seconds');
}, 1000);
clearInterval(intervalId);