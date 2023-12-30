
let currentNum = '';
let firstNum = '';
let secondNum = ''; //Do I need a second
let currentSign = '';
let tempNum = '';

var input = document.querySelector("#display");
var buttons = document.querySelectorAll("button");


// TODO
/*
  -keys pressed -> DONE
  -add -> DONE?
  -subtract
  -multiply
  -divide

  -first num is total
  -second num resets display
  -keys clicked
*/

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(e) {
    // input.value = input.value + e.currentTarget.value;
    // Figure out how to identify what is clicked
    // console.log(
    //   'value', e.target.value,
    //   'key', e.target.id
    // );
    
    if(e.target.value in [1,2,3,4,5,6,7,8,9,0]) {
      input.value = input.value + e.target.value;
      currentNum += e.target.value;
    } else if(e.target.value == '.' && !input.value.includes(".")) {
      currentNum += e.target.value;
      input.value = input.value + e.target.value;
    } else if(e.target.value == '+' || e.target.value == '-' || 
              e.target.value == '*' || e.target.value == '/' || 
              e.target.value == '=') {

      if (currentSign == '') {
        currentSign = e.target.value;
        operate();
      } else if (currentSign!= '') {
        operate(currentSign);
      } else if (e.value == '=') {
        operate(currentSign);
      }
    };
  });
};


// Tracks numbers pressed with keyboard
const keyCodes = () => {
  document.addEventListener('keydown', function (e) {
    // console.log(
    //   'key', e.key,
    //   'code', e.code,
    //   'location', e.location
    // );

    if(e.key == '=' || e.key == 'Enter' && currentSign != '') {
      console.log('equals')
      if (firstNum != '' && secondNum == ''){
        secondNum = Number(currentNum);
        operate(currentSign);
      } else if (firstNum != '' && secondNum != '') {
        operate(currentSign);
      }
    } else if(e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
      for (let step = 0; step < 2; step++){
        if(firstNum != '' && secondNum == '' && currentSign != '') {
          console.log('setting second number')
          secondNum = Number(currentNum);
          operate(currentSign);
        } else if (firstNum == '') {
          console.log('setting first number')
          firstNum = Number(currentNum);
          currentNum = '';
          currentSign = e.key;
        } else if (firstNum != '' && secondNum == '' && currentSign != '') {
          console.log('op key 2')
          secondNum = Number(currentNum);
          console.log('operating')
          operate(currentSign)
          firstNum = Number(currentNum)
        } else if (currentSign != '') {
          console.log('setting sign');
          currentSign = e.key;
        }
      }
    } 
    
    if(e.key in [1,2,3,4,5,6,7,8,9,0]) {
      // console.log('key', e.key, 'code', e.code, 'location', e.location);
      if (firstNum != '' && currentSign != '') {
        console.log('clear currentNum & display.value');
        currentNum = '';
        display.value = '';
      }
      currentNum += e.key;
      input.value = input.value + e.key;
    } else if(e.key == '.' && !input.value.includes(".")) {
      currentNum += e.key;
      input.value = input.value + e.key
    } else if(e.key == 'Escape') {
      acFunction();
    } else if(e.key == 'Backspace') {
      display.value = display.value.slice(0, display.value.length - 1);
      currentNum = currentNum.slice(0, currentNum.length - 1);
    }
  });
};


// All Clear (AC) button click
document.getElementById("btn-ac").addEventListener("click", acFunction);

function acFunction() {
  // console.log('All Cleared');
  currentNum = '';
  firstNum = '';
  secondNum = '';
  currentSign = '';
  tempNum = '';
  display.value = '';
  console.clear()
};


// Plus Minus button
document.getElementById("btn-plusminus")
  .addEventListener("click", plusMinusBtn);

function plusMinusBtn() {
  console.log('Plus Minus');
  console.log(Number(currentNum) * -1);
  input.value = Number(currentNum) * -1;
  currentNum = Number(currentNum) * -1;
};


function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a/b;
};


function operate(function_sign) {

  if (firstNum != '' && secondNum != '' && currentSign != '') {
    if (function_sign == '+'){
      firstNum = add(firstNum, secondNum);
      console.log(firstNum);
      input.value = firstNum;
      currentNum = input.value;
      firstNum = '';
      secondNum = '';
    } else if (function_sign == '-') {
      firstNum = subtract(firstNum, secondNum);
      console.log(firstNum);
      input.value = firstNum;
      currentNum = input.value;
      firstNum = '';
      secondNum = '';
    } else {
      console.log('hi');
    };
  }

  
  // if firstNum is blank then use currentNum
  // otherwise set as secondNum
  // then use currentSign to call a function
  // update result to input.value and set it as currentNum
  
};


keyCodes();