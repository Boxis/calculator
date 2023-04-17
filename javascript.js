
let numberOne = [];

var input = document.querySelector("#display");
var buttons = document.querySelectorAll("button.button-number");

// Tracks numbers of buttons clicked
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    input.value = input.value + event.currentTarget.value;

    if(event.currentTarget.value in [1,2,3,4,5,6,7,8,9,0]) {
      numberOne += event.currentTarget.value;
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
      numberOne += e.key;
    };
  });
};

keyCodes();


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

function operate(function_sign) {

}

const displayValue = document.querySelector('#display');

console.log(displayValue.textContent);