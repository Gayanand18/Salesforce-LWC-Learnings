// Destructuring
// Destructuring is a way to extract values from objects and arrays and bind them to variables in a more concise way.
//Two types of destructuring: Object Destructuring and Array Destructuring

// Array Destructuring
 // Array destructuring is a way to extract values from an array and bind them to variables in a more concise way.

 let arr = ["amazon", "google"]
 //let company1 = arr[0]
    //let company2 = arr[1]

    let [company1, company2] = arr
    console.log(company1) // amazon
    console.log(company2) // google\

    // Object Destructuring
    // Object destructuring is a way to extract values from objects and bind them to variables in a more concise way.
    // Object destructuring uses the property names to bind the values to variables.

    let options = {
        title: "Menu",
        width: 100,
        height: 200
    }
    //var title = options.title
    // var width = options.width

    let {title, width, height} = options
    console.log(title) // Menu
    console.log(width) // 100
    console.log(height) // 200