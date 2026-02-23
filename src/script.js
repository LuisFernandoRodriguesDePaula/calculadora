const display = document.querySelector(".display");
const button = document.querySelector(".botoes");

function addValue(value){
    display.value = "";
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}

