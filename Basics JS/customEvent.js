document.addEventListener("hello", function(data) {
    console.log("hello has called and sent",  data.detail);
})

function callCustomMethod() {
    let event = new CustomEvent("hello", {
        detail: {name: "Hello World"}
    })
    document.dispatchEvent(event);
}