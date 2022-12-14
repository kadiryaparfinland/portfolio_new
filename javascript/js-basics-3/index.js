
let numberOne = 0
let numberTwo = 0
let result = 0

function add(){
  numberOne = document.getElementById("number-one").value;
  numberTwo = document.getElementById("number-two").value;
  result = parseInt(numberOne)  + parseInt(numberTwo)
  document.getElementById("result").textContent = result
}

function subtrack(){
  numberOne = document.getElementById("number-one").value;
  numberTwo = document.getElementById("number-two").value;
  result = parseInt(numberOne)  - parseInt(numberTwo)
  document.getElementById("result").textContent = result
}

function multiply(){
  numberOne = document.getElementById("number-one").value;
  numberTwo = document.getElementById("number-two").value;
  result = parseInt(numberOne)  * parseInt(numberTwo)
  document.getElementById("result").textContent = result
}

function divide(){
  numberOne = document.getElementById("number-one").value;
  numberTwo = document.getElementById("number-two").value;
  result = parseFloat(numberOne)  / parseFloat(numberTwo)
  document.getElementById("result").textContent = result
}