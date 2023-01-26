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

  const calc = {
    "+": (x, y) => x + y ,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
  };

  getOperatorPosition();
  console.table(operatorArray);
  console.table(inputNumberArray);
  console.table(inputOperatorArray);

  //push item inside base kung ano position
  //add ung index sa div

  let index = 0;
  for (let i = 0; i < inputNumberArray.length; i++) {
    index = i + (i + 1);

    console.log(calc["+"](2,2));

  }
});

function calculateEquation(){

}

function getOperatorPosition() {

  //get input position
  const div = inputOperatorArray.findIndex((inputOperator) => inputOperator === "/");
  const mult = inputOperatorArray.findIndex((inputOperator) => inputOperator === "*");
  const add = inputOperatorArray.findIndex((inputOperator) => inputOperator === "+" );
  const sub = inputOperatorArray.findIndex((inputOperator) => inputOperator === "-" );
  // console.log(`${div} ${mult} ${add} ${sub}`);

  //map the input position. add 1 so no position will be 0
  operatorArray.forEach(e => e.operator === "/" ? e.position = div+1
    : e.operator === "*" ? e.position = mult+1 
    : e.operator === "+" ? e.position = add+1
    : e.operator === "-"? e.position = sub+1 
    : 5
    );

    //set position which came first: division or multiplication
    if(operatorArray[0].position === 1){ //set division as first position if index = 1 
      operatorArray[0].position = 1;
      operatorArray[1].position = 2;
    }else
    {
      operatorArray[0].position = 2;
      operatorArray[1].position = 1;
    }
 
    //set position which came first: sum or subtraction
    if(operatorArray[2].position === 3 || operatorArray[2].position === 1){//set sum as first position if index = 1 OR 3
      operatorArray[2].position = 3;
      operatorArray[3].position = 4;
    }else
    {
      operatorArray[2].position = 4;
      operatorArray[3].position = 3;
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
