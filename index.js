let display = document.querySelector(".display")


let buttons = document.querySelectorAll(".digit")


buttons.forEach(button => {
    button.addEventListener('click', function(){
        display.value += this.getAttribute('data-value')  
    } )
    
});

let clear = document.getElementById("clear")

clear.addEventListener("click", function(){
    display.value = ""
})


let output = document.querySelector("#result")

output.addEventListener("click", function(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = error
    }
    
})