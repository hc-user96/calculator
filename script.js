
let operator = document.querySelectorAll(".op-button");
let number = document.querySelectorAll(".num-button");
let clear = document.querySelector("#clear");
let remove = document.querySelector("#remove");


function eventListener() {
    button.forEach(element => {
        element.addEventListener("click", () => {
            if (var1 === null) var1 = element.textContent;
            else if (varOperator === null) varOperator = element.textContent;
            else if (var2 === null) var2 = element.textContent;

            if (var1 != null && varOperator != null && var2 != null) {
                console.log(operate(var1, var2, varOperator));
                var1 = null;
                var2 = null;
                varOperator = null;
            }
        })
    })
}

function operatorEventlistener() {

}

function numberEventlistener() {

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
