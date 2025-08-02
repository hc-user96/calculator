let firstVar = 0;
let secondVar = null;
let operand = null;

let calculation = document.querySelector("#calculation");
let result = document.querySelector("#result");

let operator = document.querySelectorAll(".op-button");
let number = document.querySelectorAll(".num-button");
let clear = document.querySelector("#clear");
let remove = document.querySelector("#remove");


operatorEventListener();
clearEventListener();

function operatorEventListener() {
    operator.forEach(element => {
        element.addEventListener("click", (e) => {
            if (firstVar != null) {
                operand = element.textContent;
                calculation.textContent = `${firstVar} ${operand}`;
            }
        });
    });
}

function numberEventListener() {
    number.forEach(element => {
        element.addEventListener("click", (e) => {

        })
    })

}

function clearEventListener() {
    clear.addEventListener("click", (e) => {
        firstVar = null;
        secondVar = null;
        operand = null;
        calculation.textContent = "";
        result.textContent = "";
    });
}

function removeEventListener() {

}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate(a, b, operator) {
    if (operator === "+") return add(a, b);
    else if (operator === "-") return subtract(a, b);
    else if (operator === "*") return multiply(a, b) ;
    else if (operator === "/") return divide(a, b);
}
