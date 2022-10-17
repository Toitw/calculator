//Operation functions
//Variables
//Storing variables
let x = 0;
let y = 0;
let operator = "";
let total = 0;

//Add
function add (x, y) {
    return x + y;
}

//Subtract
function subtract (x, y) {
    return x - y;
}

//Multiply
function multiply (x, y) {
    return x * y;
}

//Divide
function divide (x, y) {
    return x / y;
}

//Operator function 
function operate (x, operator, y) {
    if(operator === "add") {
        return add(x, y);
    } else if(operator === "subtract") {
        return subtract(x, y);
    } else if(operator === "multiply") {
        return multiply(x, y);
    } else if(operator === "divide") {
        return divide(x, y);
    }
}

//Display functions
const inputScreen = document.querySelector("#input-screen");
const totalScreen = document.querySelector("#total-screen");
const numberButton = document.querySelectorAll(".number-button");
inputScreen.textContent = "";
totalScreen.textContent = "";

//Switch variable so the calculator knows when it has to reset the inputScreen
//and store y
let operation = false;

//Operations on numbers. When operation = false, keep adding numbers
//on display. Once operation = true, screen back to 0 to start
//adding numbers from the beginning
numberButton.forEach((button) => {
button.addEventListener("click", () => {
    if(operation === false) {
        inputScreen.textContent += button.textContent;
    } else {
        inputScreen.textContent = "";
        inputScreen.textContent += button.textContent;
    }
    });
});

const operatorButton = document.querySelectorAll(".operator-button");
operatorButton.forEach((button) => {
button.addEventListener("click", () => {
    operator = button.id;
    x = parseInt(inputScreen.textContent);
    totalScreen.textContent = inputScreen.textContent + button.textContent;
    operation = true;
});
});

const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
    y = parseInt(inputScreen.textContent);
    total = operate(x, operator, y);
    inputScreen.textContent = total;
    totalScreen.textContent = total;
    operation = false;
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
    x = 0;
    y = 0;
    total = 0;
    operator = "";
});

