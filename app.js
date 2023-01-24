const number = document.querySelector(".input-number-wrapper");
const operator = document.querySelector(".operator-wrapper");
const screenNumber = document.querySelector(".screen-number");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

let inputNumber = [],
    inputOperator = [],
    val = ""
    ;

number.addEventListener("click", (e) => {
    if (!e.target.className) {
        let inputValue = e.target.textContent;
        val = val + inputValue;

        console.table(val);

    }
});

operator.addEventListener("click", (e) => {
    if (!e.target.className) {

        inputNumber.push(val);
        inputOperator.push(e.target.textContent);
        val = "";
        console.table(inputOperator);
    }
});

equal.addEventListener("click", (e) => {

    inputNumber.push(val);
    console.table(inputNumber);

    if(inputNumber.length > inputOperator.length){
        console.log('correct');
    }


    const calculateOutput ={
        '+': function (x,y){return x+y},
        '-': function (x,y){return x-y},
        '*': function (x,y){return x*y},
        '/': function (x,y){return x/y}
    }
    

    const calc = inputNumber.reduce((firstVal, secondVal)=>{
        console.log('1: '+ parseInt(firstVal));
        console.log('2: '+secondVal);
        return calculateOutput[inputOperator](parseInt(firstVal),parseInt(secondVal));
    })
    console.log(calc);

});

