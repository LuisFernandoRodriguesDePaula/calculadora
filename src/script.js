const display = document.querySelector("#display");
const button = document.querySelector(".botoes");
let ultimoValor = "";

function addValue(value){
    display.value += value;
    ultimoValor += value;
}

function operador(op){
    if(display.value.indexOf(op) < 0){
        display.value += op;
        ultimoValor = "";
    }
}

function clearDisplay(){
    display.value = "";
}

function apaga(){
    let valor = display.value;
    valor = valor.substring(0, valor.length - 1);
    display.value = valor;
    ultimoValor = ultimoValor.substring(0, ultimoValor.length -1)
}

function negativo(){
    let parteSemUltimoValor = display.value.substring(0, display.value.length - ultimoValor.length);
    let valor = Number(ultimoValor) * -1;
    display.value = parteSemUltimoValor + valor;
    ultimoValor = valor.toString();
}


function calculate(){
    display.value = eval(display.value);
}