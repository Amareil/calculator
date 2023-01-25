const number = document.querySelector(".input-number-wrapper");
const operators = document.querySelector(".operator-wrapper");
const screenNumber = document.querySelector(".screen-number");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

let inputNumberArray = [],
  inputOperatorArray = [],
  operatorArray = [
    { operator: "/", position: 0 },
    { operator: "*", position: 0 },
    { operator: "+", position: 0 },
    { operator: "-", position: 0 },
  ],
  val = "";
number.addEventListener("click", (e) => {
  if (!e.target.className) {
    let inputValue = e.target.textContent;
    val = val + inputValue;

    // console.table(val);
  }
});

operators.addEventListener("click", (e) => {
  if (!e.target.className) {
    inputNumberArray.push(val);
    inputOperatorArray.push(e.target.textContent);
    val = "";
    // console.table(inputOperatorArrayArray);
  }
});

equal.addEventListener("click", (e) => {
  //add if condition for val na pag null ung value bawal mag push
  inputNumberArray.push(val);
  console.table(inputNumberArray);
  if (inputNumberArray.length > inputOperatorArray.length) {
    console.log("correct");
  }

  const calculateOutput = {
    "+": function (x, y) {
      return x + y;
    },
    "-": function (x, y) {
      return x - y;
    },
    "*": function (x, y) {
      return x * y;
    },
    "/": function (x, y) {
      return x / y;
    },
  };

  getOperatorPosition();
  operatorArray.sort((a, b) => a.position - b.position);
  console.table(operatorArray);
  //push item inside base kung ano position
  //add ung index sa div

  let index = 0;
  for (let i = 0; i < inputNumberArray.length; i++) {
    index = i + (i + 1);
    // console.log(`${inputOperatorArray[i].charCodeAt} `);
    // createOperators(inputOperatorArray[i]);
  }
  // console.table(operatorArray);
});

function getOperatorPosition() {
  console.log(inputOperatorArray);

  const div = inputOperatorArray.findIndex((inputOperator) => inputOperator === "/");
  const mult = inputOperatorArray.findIndex((inputOperator) => inputOperator === "*");
  const add = inputOperatorArray.findIndex((inputOperator) => inputOperator === "+" );
  const sub = inputOperatorArray.findIndex((inputOperator) => inputOperator === "-" );
  console.log(`${div} ${mult} ${add} ${sub}`);

  if (div < mult) {
    operatorArray[0].position = 2;
    operatorArray[1].position = 1;
  } else if (mult < div) {
    operatorArray[0].position = 1;
    operatorArray[1].position = 2;
  }

  if (add < sub) {
    operatorArray[2].position = 4;
    operatorArray[3].position = 3;
  } else if (sub < add) {
    operatorArray[2].position = 3;
    operatorArray[3].position = 4;
  }
}

// function createOperators(operator) {

//     if (operator === '/' || operator === '*')
//     {
//         operatorArray.push(operator);
//     }
//     else if ((operator === '+' || operator === '-'))
//     {
//         operatorArray.push(operator);
//     }
//     else {

//     }
//     ;

// }
