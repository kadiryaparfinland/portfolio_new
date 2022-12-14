
let numberOne = 0
let numberTwo = 0
let numberThree = 0
let result = 0
let message = ""
let hasBlackJack = false
let isAlive = true

function startGame(){
  isAlive = true
  numberOne = randomNumber()
  numberTwo = randomNumber()
  document.getElementById("number-one").textContent = numberOne;
  document.getElementById("number-two").textContent = numberTwo;

  result = numberOne  + numberTwo
  document.getElementById("result").textContent = result

  checkResult()
}

function newCard(){
  if(isAlive === true && hasBlackJack === false){
    numberThree = randomNumber()
    result = result  + numberThree
    alert("New Card: " + numberThree)
    document.getElementById("result").textContent = result
    checkResult()
  }
  
}

function checkResult(){
  if(result <= 20){
    message = "Do you want to draw a new card? "
  }
  else if(result === 21){
    message = "Wohoo! You have got Blackjack!"
    hasBlackJack = true
  }
  else{
    message = "You are out of the game!"
    isAlive = false
  }

  document.getElementById("message").textContent = message
}

function randomNumber(){
  let x = Math.floor(Math.random() * 10) + 1
  return x
}