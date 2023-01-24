const number = document.querySelector(".input-number-wrapper");
const operator = document.querySelector(".operator-wrapper");
const screenNumber = document.querySelector(".screen-number");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

let inputNumber = [],
    inputOperator = [],
    val = "",
    index = 0;

number.addEventListener("click", (e) => {
    if (!e.target.className) {
        let inputValue = e.target.textContent;
        val = val + inputValue;

        console.log(`f: ${val}`);
    }
});

operator.addEventListener("click", (e) => {
    if (!e.target.className) {
        console.log(e.target)
        inputNumber.push(val);
        inputOperator.push(e.target.textContent);
        console.log(`array: ${inputNumber[index]} ${inputOperator[index]}`);

        index++;
    }
});

equal.addEventListener("click", (e) => { });

function add(a, b) { }

function subtract(a, b) { }

function multiply(a, b) { }

function divide(a, b) { }

function operate(a, b) { }
