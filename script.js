let firstNumber = "0";
let secondNumber = "";
let operand = "";
let result = "";

let display = document.querySelector("#result");

let operator = document.querySelectorAll(".op-button");
let equals = document.querySelector("#equals");
let number = document.querySelectorAll(".num-button");
let clear = document.querySelector("#clear");
let remove = document.querySelector("#remove");


operatorEventListener();
equalsEventListener();
numberEventListener();
clearEventListener();
removeEventListener();


function operatorEventListener() {
    operator.forEach(element => {
        element.addEventListener("click", (e) => {
            if (secondNumber != "") {
                result = operate(firstNumber, secondNumber, operand);
                clearMinusResult();
                if (result === 0) {
                    firstNumber = "0";
                }
                else {
                    firstNumber = result;
                }
                result = "";
                operand = element.textContent;
            }
            else if (result === 0) {
                firstNumber = "0";
                result = "";
                operand = element.textContent;
            }
            else if (result != "") {
                firstNumber = result;
                result = "";
                operand = element.textContent;
            }
            else if (firstNumber != "") {
                operand = element.textContent;
            }
            displayNumbers();
        });
    });
}

function equalsEventListener() {
    equals.addEventListener("click", (e) => {
        if (firstNumber != "" && secondNumber != "" && operand != "") {
            result = operate(firstNumber, secondNumber, operand);
            clearMinusResult();
            displayNumbers();
        }
    });
}

function numberEventListener() {
    number.forEach(element => {
        element.addEventListener("click", (e) => {
            if (operand === "") {
                if (firstNumber === "0") {
                    firstNumber = element.textContent;
                }
                else {
                    firstNumber = `${firstNumber}${element.textContent}`;
                }
                result = "";
            }
            else {
                if (secondNumber === "0") {
                    secondNumber = element.textContent;
                }
                else {
                    secondNumber = `${secondNumber}${element.textContent}`;
                }
            }
            displayNumbers();
        });
    });
}

function clearEventListener() {
    clear.addEventListener("click", (e) => {
        clearMinusResult();
        result = "";
    });
}

function removeEventListener() {
    
    
}

function displayNumbers() {
    if (result != "" || result === 0) {
        display.textContent = `${result}`;
    }
    else {
        display.textContent = `${firstNumber}${operand}${secondNumber}`;
    }
}

function clearMinusResult() {
    display.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operand = "";
}

function add(a, b) {
    return +a + +b;
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
