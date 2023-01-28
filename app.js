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
  inputNumber = "";

number.addEventListener("click", (e) => {
  if (!e.target.className) {
    let inputValue = e.target.textContent;
    inputNumber = inputNumber + inputValue;
  }
});

operators.addEventListener("click", (e) => {
  if (!e.target.className) {
    addInputValues();

    if(inputNumberArray.length){
      if(inputOperatorArray.length < inputNumberArray.length){
        inputOperatorArray.push(e.target.textContent);
        inputNumber = "";
      }
    }
  }
});

equal.addEventListener("click", (e) => {

  addInputValues();

  if(inputNumberArray.length > inputOperatorArray.length) {
  getOperatorPosition();
  calculateEquation();
  }
});

function addInputValues(){
  if(inputNumber)
  inputNumberArray.push(inputNumber);
}

function calculateEquation() {
  const calc = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
  };

  for (let i = 0; i < operatorArray.length; i++) {
    //loop until operator still exists
    while (inputOperatorArray.includes(operatorArray[i].operator)) {
      operatorIndex = inputOperatorArray.indexOf(operatorArray[i].operator);

      //get input for calculations
      firstNumber = parseInt(inputNumberArray[operatorIndex]);
      secondNumber = parseInt(inputNumberArray[operatorIndex + 1]);

      let result = calc[operatorArray[i].operator](firstNumber, secondNumber);
      
      //remove input in array once done
      inputNumberArray.splice(operatorIndex, 1);

      //input result in array to continue computation
      inputNumberArray[operatorIndex] = result;

      //remove operator in array once done
      inputOperatorArray.splice(operatorIndex, 1);
      console.log(result);
    }
  }
}

function getOperatorPosition() {

  //get input position
  const div = inputOperatorArray.findIndex(
    (inputOperator) => inputOperator === "/"
  );
  const mult = inputOperatorArray.findIndex(
    (inputOperator) => inputOperator === "*"
  );
  const add = inputOperatorArray.findIndex(
    (inputOperator) => inputOperator === "+"
  );
  const sub = inputOperatorArray.findIndex(
    (inputOperator) => inputOperator === "-"
  );

  //map the input position
  operatorArray.forEach((e) =>
    e.operator === "/" ? (e.position = div)
      : e.operator === "*" ? (e.position = mult)
      : e.operator === "+" ? (e.position = add)
      : e.operator === "-" ? (e.position = sub)
      : 5
  );
  console.table(operatorArray);

  //set position which came first: division or multiplication
  if (operatorArray[0].position === 0) { //set division as first position if index = 0
    operatorArray[0].position = 0;
    operatorArray[1].position = 1;
  } else {
    operatorArray[0].position = 1;
    operatorArray[1].position = 0;
  }

  //set position which came first: sum or subtraction
  if (
    operatorArray[3].position < 0 || //sub index -1
    (operatorArray[2].position === 0 && operatorArray[2].position < operatorArray[3].position) || //sum index 0 and sum < sub
    (operatorArray[2].position === 1 && operatorArray[2].position < operatorArray[3].position) || //sum index 1 and sum < sub
    (operatorArray[2].position > 0 && operatorArray[2].position < operatorArray[3].position) //sum index > 0 and sum < sub
  ) {
    operatorArray[2].position = 2;
    operatorArray[3].position = 3;
  } else {
    operatorArray[2].position = 3;
    operatorArray[3].position = 2;
  }

  // sort positions
  operatorArray.sort((a, b) => a.position - b.position);
}
