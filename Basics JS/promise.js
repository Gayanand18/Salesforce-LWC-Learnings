// Promise is a JavaScript object for asynchronous operation.
// Promise has 3 states: pending -> fulfilled or rejected

function checkIsSuccess(data){
    return new Promise(function(resolve, reject){
        if(data === 'success'){
           return resolve('Successfully executed');
        }else{
            return reject("Failed to execute")
        }
})
}
checkIsSuccess('sccess').then(function(result){
    console.log(result);
}).catch(function(error){
    console.log(error);
})


fetch('https://api.github.com/users/Gayanand18').then(function(result){
    return result.json();
}   ).then(function(response){
    console.log(response);
})