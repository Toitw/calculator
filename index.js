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

//Switch variable so the calculator knows if we already pressed decimal
//just before
let decimal = false;

//Function to get the result, with math.round to control decimals
//reset the operator, the operation and decimal, and if it was 
//pressed just before, return so it does nothing.
function getResult () {
    if(operation === false) {
        y = parseFloat(inputScreen.textContent);
        total = operate(x, operator, y);
        inputScreen.textContent = Math.round(total*100)/100;
        totalScreen.textContent = Math.round(total*100)/100;
        x = total;
        operator = "";
        operation = true;
        decimal = false;
    } else {
        return;
    }
}

//Operations on numbers. When operation = false, keep adding numbers
//on display. Once operation = true, screen back to 0 to start
//adding numbers from the beginning
numberButton.forEach((button) => {
    button.addEventListener("click", () => {
        if(operation === true) {
            clear();
            inputScreen.textContent = button.textContent;
        } else {
            inputScreen.textContent += button.textContent;
        }
    });
});

const operatorButton = document.querySelectorAll(".operator-button");
operatorButton.forEach((button) => {
button.addEventListener("click", () => {
    if(operator === "") {
        operator = button.id;
        x = parseFloat(inputScreen.textContent);
        totalScreen.textContent = inputScreen.textContent + button.textContent;
        inputScreen.textContent = "";
        decimal = false;
        operation = false;
    } else {
        y = parseFloat(inputScreen.textContent);
        total = operate(x, operator, y);
        operator = button.id;
        inputScreen.textContent = Math.round(total*100)/100;
        totalScreen.textContent = inputScreen.textContent + button.textContent;
        x = total;
        inputScreen.textContent = "";
        decimal = false;
        operation = false;
    }
});
});

const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", getResult);

const deleteButton = document.querySelector("#delete-button");
deleteButton.addEventListener("click", () => {
    inputScreen.textContent = inputScreen.textContent.slice(0, -1);
});

const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", (button) => {
    if(decimal === false) {
        inputScreen.textContent += ".";
        decimal = true;
    } else {
        return;
    }
});

//Clear function
function clear () {
    x = 0;
    y = 0;
    total = 0;
    operator = "";
    totalScreen.textContent = "";
    inputScreen.textContent = "";
    operation = false;
}

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clear);

