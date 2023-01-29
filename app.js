const number = document.querySelectorAll(".number-btn");
const operators = document.querySelectorAll(".operator-btn");
const display = document.querySelector(".display");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
const clear = document.querySelector(".clear-btn");
const equal = document.querySelector(".equal-btn");
const delete_ = document.querySelector(".del-btn");

let inputNumberArray = [],
  inputOperatorArray = [],
  operatorArray = [
    { operator: "÷", position: 0 },
    { operator: "x", position: 0 },
    { operator: "+", position: 0 },
    { operator: "-", position: 0 },
  ],
  inputNumber = "",
  combineString = "",
  pastEquation = ""
  resultEquation = 0;
  ;

clear.addEventListener("click", e => {

  clearVariables();
  displayText(combineString, input);
  displayText(pastEquation, result);
})

delete_.addEventListener("click", e=>{

  const lastWord = getLastString();

  if(operatorArray.some(item => item.operator === lastWord)){

   //remove last operator
    inputOperatorArray.pop();
    combineString = combineString.substring(0, combineString.lastIndexOf("")-3);
  }
  else{
    //remove last number
    combineString = combineString.substring(0, combineString.lastIndexOf("")-1);
  }

  //update display
  displayText(combineString, input);

})

number.forEach(e=>{
  e.addEventListener("click", (e) => {
      let inputValue = e.target.textContent;
      inputNumber = inputNumber + inputValue;
  
      combineString += inputValue;
      displayText(combineString, input);
  });
})

operators.forEach(e=>{
  e.addEventListener("click", (e) => {

    //clear variables and reassign result of equation as new input
    if(pastEquation){
      
      let tmp = resultEquation;
      clearVariables();

      combineString += tmp;
      inputNumber += tmp;
      displayText(combineString, input);

    }

    addInputValues();

    const lastWord = getLastString();
    console.log("i");
      //cannot enter operator if number is blank
      if(inputNumberArray.length)
      {
        console.log("hi");
        //cannot enter operator if last word is another operator
        if(!operatorArray.some(item => item.operator === lastWord)){
          console.log("hi2");
          inputOperatorArray.push(e.target.textContent);
          inputNumber = "";
  
          combineString += ` ${e.target.textContent} `;

          displayText(combineString, input);

        }
      }
  });
})


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


function displayText(text,parameter){
  parameter.textContent = text;
}

function getLastString(){
  let combineStringArray = combineString.split("").filter(item => item != " ");
  return combineStringArray.pop();
}

function clearVariables(){

  inputNumberArray.length = 0;
  inputOperatorArray.length = 0;
  inputNumber = "";
  combineString ="";
  pastEquation = "";

}

function calculateEquation() {

  const calc = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "x": (x, y) => x * y,
    "÷": (x, y) => x / y,
  };

  for (let i = 0; i < operatorArray.length; i++) {
    //loop until operator still exists
    while (inputOperatorArray.includes(operatorArray[i].operator)) {
      operatorIndex = inputOperatorArray.indexOf(operatorArray[i].operator);

      //get input for calculations
      firstNumber = parseFloat(inputNumberArray[operatorIndex]);
      secondNumber = parseFloat(inputNumberArray[operatorIndex + 1]);

      resultEquation = calc[operatorArray[i].operator](firstNumber, secondNumber);
      
      //remove input in array once done
      inputNumberArray.splice(operatorIndex, 1);

      //input result in array to continue computation
      inputNumberArray[operatorIndex] = resultEquation;

      //remove operator in array once done
      inputOperatorArray.splice(operatorIndex, 1);
    }
  }

  combineString += " = ";
  pastEquation = combineString;

  displayText(combineString, input);
  displayText(resultEquation, result);
}

function getOperatorPosition() {

  //get input position
  const div = inputOperatorArray.findIndex(
    (inputOperator) => inputOperator === "÷"
  );
  const mult = inputOperatorArray.findIndex(
    (inputOperator) => inputOperator === "x"
  );
  const add = inputOperatorArray.findIndex(
    (inputOperator) => inputOperator === "+"
  );
  const sub = inputOperatorArray.findIndex(
    (inputOperator) => inputOperator === "-"
  );

  //map the input position
  operatorArray.forEach((e) =>
    e.operator === "÷" ? (e.position = div)
      : e.operator === "x" ? (e.position = mult)
      : e.operator === "+" ? (e.position = add)
      : e.operator === "-" ? (e.position = sub)
      : 5
  );

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
