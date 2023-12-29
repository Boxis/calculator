
let currentNum = '';
let firstNum = '';
let secondNum = '';
let currentSign = '';

var input = document.querySelector("#display");
var buttons = document.querySelectorAll("button");


// TODO
/*
  -keys pressed
  -keys clicked
  -first num is total
  -second num resets display
*/

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(e) {
    // input.value = input.value + e.currentTarget.value;
    // Figure out how to identify what is clicked
    console.log(
      'value', e.target.value,
      'key', e.target.id
    );
    
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
    console.log(
      'key', e.key,
      'code', e.code,
      'location', e.location
    );

    // Store numbers pressed to an array
    if(e.key in [1,2,3,4,5,6,7,8,9,0]) {
      // console.log(e.key, e.code);
      console.log(
      'key', e.key,
      'code', e.code,
      'location', e.location
    );
      currentNum += e.key;
      input.value = input.value + e.key;
    } else if(e.key == '.' && !input.value.includes(".")) {
      currentNum += e.key;
      input.value = input.value + e.key
    } else if(e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' ||
              e.key == '=' || e.key == 'Enter') {
      console.log(e.key);
      currentSign = e.key;
      operate(currentSign);
      // if (currentSign == '' || currentSign != e.key) {
      //   currentSign = e.key;
      //   operate();
      // } else if (e.key == '=') {
      //   operate(currentSign);
      // }
    } else if(e.key == 'Escape') {
      acFunction();
    }
  });
};

keyCodes();


// AC button click
document.getElementById("btn-ac").addEventListener("click", acFunction);

function acFunction() {
  console.log('All Cleared');
  currentNum = '';
  firstNum = '';
  secondNum = '';
  currentSign = '';
  display.value = '';
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

  if (firstNum == '') {
    firstNum = Number(currentNum);
    currentNum = '';
    input.value = '';
    // keyCodes ();
  } else if (secondNum == '') {
    secondNum = Number(currentNum);
    currentNum = '';
  }

  if (firstNum != '' && secondNum != '' && currentSign != '') {
    if (function_sign == '+'){
      firstNum = add(firstNum, secondNum);
      console.log(firstNum);
      secondNum = '';
      input.value = firstNum;
    } else if (function_sign == '-') {
      firstNum = subtract(firstNum, secondNum);
      console.log(firstNum);
      secondNum = '';
      input.value = firstNum;
    } else {
      console.log('hi');
    };
  }

  
  // if firstNum is blank then use currentNum
  // otherwise set as secondNum
  // then use currentSign to call a function
  // update result to input.value and set it as currentNum
  
};


