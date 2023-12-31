
let currentNum = '';
let firstNum = '';
let secondNum = '';
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
      if (typeof(firstNum) == 'number' && typeof(secondNum) == 'string'){
        console.log('equals 1');
        secondNum = Number(currentNum);
        console.log(firstNum, currentSign, secondNum, );
        operate(currentSign);
      } else if (typeof(firstNum) == 'number' && currentNum != '') {
        console.log('normal equals')
        secondNum = Number(currentNum);
        console.log(firstNum, currentSign, secondNum, );
        operate(currentSign);
      } 
    } else if(e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/') {
      console.log('hitting sign key');

      if(currentSign != e.key) {
        console.log('setting sign 1');
        currentSign = e.key;
      }

      for (let step = 0; step < 2; step++){
        if(typeof(firstNum) == 'number' && typeof(secondNum) == 'string') {
          console.log('setting second number')
          secondNum = Number(currentNum);
        } else if (typeof(firstNum) == 'string') {
          console.log('setting first number')
          firstNum = Number(currentNum);
          currentNum = '';
          currentSign = e.key;
        } else if(typeof(firstNum) == 'number' && typeof(secondNum) == 'number') {
          secondNum = Number(currentNum);
          operate(currentSign);
        }
      }
    } 
    
    if(e.key in [1,2,3,4,5,6,7,8,9,0]) {
      // console.log('key', e.key, 'code', e.code, 'location', e.location);
      console.log('number hit');

      if (typeof(firstNum) == 'number' && currentSign != '' && currentNum ==''){
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

  if (typeof(firstNum) == 'number' && typeof(secondNum) == 'number') {
    console.log('operating!')
    if (function_sign == '+'){
      firstNum = add(firstNum, secondNum);
      console.log('adding');
      input.value = firstNum;
      currentNum = input.value;
      firstNum = '';
      secondNum = '';
    } else if (function_sign == '-') {
      firstNum = subtract(firstNum, secondNum);
      console.log('subtracting');
      input.value = firstNum;
      currentNum = input.value;
      firstNum = '';
      secondNum = '';
    } else {
      console.log('hi');
    };
  } 
  // else if ((firstNum == 0 && secondNum != '') || (firstNum != 0 && secondNum == '')) {
  //   console.log('operating 2');
  //   if (function_sign == '-') {
  //     firstNum = subtract(firstNum, secondNum);
  //     console.log('subtracting');
  //     input.value = firstNum;
  //     currentNum = input.value;
  //     firstNum = '';
  //     secondNum = '';
  //   }
  // }
  // if firstNum is blank then use currentNum
  // otherwise set as secondNum
  // then use currentSign to call a function
  // update result to input.value and set it as currentNum
  
};


keyCodes();