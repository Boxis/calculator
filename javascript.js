
let currentNum = '';
let firstNum = '';
let secondNum = '';
let currentSign = '';

var input = document.querySelector("#display");
var buttons = document.querySelectorAll("button");


// Takes in input from clicks
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    e = event.target.value;
    all_logic();
  });
};


// Takes in keyboard input
const keyCodes = () => {
  document.addEventListener('keydown', function (event) {
    e = event.key;
    all_logic();
  });
};

function all_logic(){
  if(e == '=' || e == 'Enter' && currentSign != '') {
    equals_press();
  } else if(e == '+' || e == '-' || e == '*' || e == '/') {
    operator_press(e);
  } 
  
  if(e in [1,2,3,4,5,6,7,8,9,0, '.']) {
    number_btns(e);
  } else if(e == '.' && !currentNum.includes(".")) {
    decimal(e);
  } else if(e == 'Escape') {
    acFunction();
  } else if(e == 'Backspace') {
    backspace();
  }
}

function equals_press(){
  // console.log('equals')
  if (currentSign == '/' && secondNum ==0 ){
    alert("You can't divde by 0!");
    currentSign ='';
    return;
  }

  if (typeof(firstNum) == 'number' && typeof(secondNum) == 'string'){
    console.log('equals 1');
    secondNum = Number(currentNum);
    operate(currentSign);
  } else if (typeof(firstNum) == 'number' && currentNum != '') {
    console.log('normal equals')
    if(currentNum != '.'){
      secondNum = Number(currentNum);
      operate(currentSign);
    }
  } 
}

function operator_press(e){
  console.log('hitting sign key');

  if(currentSign != e) {
    console.log('setting sign');
    equals_press();

    if(currentSign == '-' && firstNum < 0) {
      console.log('negative num');
      plusMinus();
    }
    currentSign = e;
  }

  for (let step = 0; step < 2; step++){
    if(typeof(firstNum) == 'number' && typeof(secondNum) == 'string') {
      console.log('setting second number')
      secondNum = Number(currentNum);
    } else if (typeof(firstNum) == 'string') {
      console.log('setting first number')
      firstNum = Number(currentNum);
      currentNum = '';
      currentSign = e;
    } 
    else if(typeof(firstNum) == 'number' && typeof(secondNum) == 'number') {
      console.log('operating after setting nums');
      secondNum = Number(currentNum);
      operate(currentSign);
      firstNum = Number(currentNum);
      currentNum = '';
      currentSign = e;
    }
  }
}

function number_btns(e){
  // console.log('number pressed');
  if (typeof(firstNum) == 'number' && currentSign != '' && currentNum ==''){
    // console.log('clear currentNum & display.value');
    currentNum = '';
    display.value = '';
  }
  currentNum += e;
  input.value = input.value + e;
};

function decimal(e){
  // input.value = '';
  if(currentNum == ''){
    display.value = '';
  }
  currentNum += e;
  input.value = input.value + e;
}

function backspace(){
  display.value = display.value.slice(0, display.value.length - 1);
  currentNum = currentNum.slice(0, currentNum.length - 1);
}


// All Clear (AC) button click
document.getElementById("btn-ac").addEventListener("click", acFunction);

function acFunction() {
  currentNum = '';
  firstNum = '';
  secondNum = '';
  currentSign = '';
  display.value = '';
  console.clear()
};


// Plus Minus button
document.getElementById("btn-plusminus").addEventListener("click", plusMinus);

function plusMinus() {
  input.value = Number(currentNum) * -1;
  currentNum = Number(currentNum) * -1;
};


// Opeation functions
add = (a, b) => a + b;
subtract = (a, b) => a - b;
multiply = (a, b) => a * b;
divide = (a, b) => a / b;

function operate(function_sign) {
  console.log(firstNum, currentSign, secondNum);
  switch(function_sign){
    case '+': firstNum = add(firstNum, secondNum); 
              break;
    case '-': firstNum = subtract(firstNum, secondNum); 
              break;
    case '*': firstNum = multiply(firstNum, secondNum);
              break;
    case '/': firstNum = divide(firstNum, secondNum);
              break;
  }
  input.value = Math.round(firstNum * 10000) / 10000;
  currentNum = input.value;
  firstNum = '';
  secondNum = '';
};



keyCodes();