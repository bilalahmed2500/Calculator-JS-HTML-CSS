
const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

let popup = document.getElementById('popup')
function openPopUp() {
  popup.classList.add('openPopUp')
}
function closePopUp() {
  popup.classList.remove('openPopUp');
}

numbersEl.forEach((number) => {
  number.addEventListener('click', e => {
    if (e.target.innerText === '.' && !haveDot) {
      haveDot = true;
    }
    else if (e.target.innerText === '.' && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
  })
})

operationEl.forEach((operation) => {
  operation.addEventListener('click', e => {
    if (!dis2Num) return; // firts of all i need a number for
    haveDot = false;

    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation(); // if these three things present then we want to do the operation
    }
    else {
      result = parseFloat(dis2Num) // we will pass a string in the form of num2 then it will pass us a number
    }



    clearVar(operationName);
    lastOperation = operationName;
    console.log(result)
  })
})

function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;
  display2El.innerText = '';
  dis2Num = '';
  tempResultEl.innerText = result;
}

function mathOperation() {
  if (lastOperation === 'x') {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === '+') {
    result = parseFloat(result) + parseFloat(dis2Num);
  }
  else if (lastOperation === '-') {
    result = parseFloat(result) - parseFloat(dis2Num);
  }
  else if (lastOperation === '/') {
    result = parseFloat(result) / parseFloat(dis2Num);
  }
  else if (lastOperation === '%') {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
  else {
    dis2Num = '';
    display2El.innerText = dis2Num;
  }
}

equalEl.addEventListener('click', () => {
  if (!dis1Num || !dis2Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display1El.innerText = result;
  tempResultEl.innerText = '';
  dis1Num = '';
  dis2Num = result;
})

