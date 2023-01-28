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
  // console.table(inputNumberArray);
  if (inputNumberArray.length > inputOperatorArray.length) {
    console.log("correct");
  }

  getOperatorPosition();
  console.table(operatorArray);
  // console.table(inputNumberArray);
  console.table(inputOperatorArray);
  calculateEquation()
  // console.table(operatorArray);
  // console.table(inputNumberArray);
  console.table(inputOperatorArray);

});

function calculateEquation(){

  const calc = {
    "+": (x, y) => x + y ,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
  };

  for(let i=0; i<operatorArray.length; i++)
  {
    //if include
    while(inputOperatorArray.includes(operatorArray[i].operator))
    {
    // console.log('Input Operator:'+ inputOperatorArray + ',-> ' + operatorArray[i].operator);
    //hanapin sa array ung operator
    operatorIndex = inputOperatorArray.indexOf(operatorArray[i].operator);
    // console.log('Operator Index:'+ operatorIndex);

    firstNumber = parseInt(inputNumberArray[operatorIndex]);
    secondNumber = parseInt(inputNumberArray [operatorIndex+1]);
    // console.log(firstNumber + ","+ secondNumber);
    let result = calc[operatorArray[i].operator](firstNumber,secondNumber);

    // console.log(result);
    // console.table(inputNumberArray);

    inputNumberArray.splice(operatorIndex, 1);
    inputNumberArray[operatorIndex] = parseInt(result);
    inputOperatorArray.splice(operatorIndex, 1);

    }
  };

}

function getOperatorPosition() {

  //get input position
  const div = inputOperatorArray.findIndex((inputOperator) => inputOperator === "/");
  const mult = inputOperatorArray.findIndex((inputOperator) => inputOperator === "*");
  const add = inputOperatorArray.findIndex((inputOperator) => inputOperator === "+" );
  const sub = inputOperatorArray.findIndex((inputOperator) => inputOperator === "-" );

  //map the input position
  operatorArray.forEach(e => e.operator === "/" ? e.position = div
    : e.operator === "*" ? e.position = mult
    : e.operator === "+" ? e.position = add
    : e.operator === "-"? e.position = sub 
    : 5
    );
    console.table(operatorArray);

    //set position which came first: division or multiplication
    if(operatorArray[0].position === 0){ //set division as first position if index = 0
      operatorArray[0].position = 0;
      operatorArray[1].position = 1;
    }else
    {
      operatorArray[0].position = 1;
      operatorArray[1].position = 0;
    }
 
    //set position which came first: sum or subtraction
    if(operatorArray[3].position < 0 
    || (operatorArray[2].position === 0 && (operatorArray[2].position < operatorArray[3].position)) 
    || ((operatorArray[2].position === 1 && (operatorArray[2].position < operatorArray[3].position))
    || (operatorArray[2].position > 0 && (operatorArray[2].position < operatorArray[3].position))
    )){
      operatorArray[2].position = 2;
      operatorArray[3].position = 3;
    }else
    {
      operatorArray[2].position = 3;
      operatorArray[3].position = 2;
    }

    // sort positions
    operatorArray.sort((a, b) => a.position - b.position);

    // console.table(operatorArray);

  // const filteredOperator = operatorArray.filter(e => e.position = 0);

  // console.table(filteredOperator);

  // operatorArray.sort((a, b) =>{

  //   if(a.operator === "/" && a.position < )
  // });



  // operatorArray.splice(0,1);

  // console.table(operatorArray);
    // if(e.operator === "/"){
    //   e.position = div;
    // }else if(e.operator === "*"){
    //   e.position = mult;
    // }else if(e.operator === "+"){
    //   e.position = add;
    // }else if(e.operator === "-"){
    //   e.position = sub;
    // }

 



  // if (div < mult) {

  //   if( mult > div && div < 0){
  //     operatorArray[0].position = 2;
  //     operatorArray[1].position = 1;
  //   }else{
  //     operatorArray[0].position = 1;
  //     operatorArray[1].position = 2;
  //   }

  // } else if (mult < div) {
  //   if( div > mult && mult < 0){
  //     operatorArray[0].position = 1;
  //     operatorArray[1].position = 2;
  //   }else{
  //     operatorArray[0].position = 2;
  //     operatorArray[1].position = 1;
  //   }

  // }

  // if (add < sub) {

  //   if( sub > add && add < 0){
  //     operatorArray[2].position = 4;
  //     operatorArray[3].position = 3;
  //   }else{
  //     operatorArray[2].position = 3;
  //     operatorArray[3].position = 4;
  //   }

  // } else if (sub < add) {
  //   if( add > sub && sub < 0){
  //     operatorArray[2].position = 3;
  //     operatorArray[3].position = 4;
  //   }else{
  //     operatorArray[2].position = 4;
  //     operatorArray[3].position = 3;
  //   }

  // }

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
