//Operation functions
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
    if(operator === "+") {
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
const numberButton = document.querySelectorAll(".number-button");
numberButton.forEach((button) => {
button.addEventListener("click", () => {
    inputScreen.textContent = button.textContent;
});
});

const operatorButton = document.querySelectorAll(".operator-button");
operatorButton.forEach((button) => {
button.addEventListener("click", () => {
    inputScreen.textContent += button.textContent;
});
});