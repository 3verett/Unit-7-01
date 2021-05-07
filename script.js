//Connects the function "random" to the "Guess!" button.
document.getElementById('button').addEventListener('click', randomizer)
let randomNumber = 0
let userGuess = 0

function randomizer() {
  //Gets the number typed by user and converts to an integer.
  userGuess = document.getElementById('input').value
  userGuess = parseInt (userGuess)

  //Generates a random number from 1 - 6.
  randomNumber = Math.random() * 6 + 1
  randomNumber = parseInt (randomNumber)

  //Checks to see if users guess was correct.
  if (userGuess == randomNumber) {
    //If the user was correct then it will display "Incredible! Good job."
    document.getElementById('answer').innerHTML = "Incredible! Good job."
  }

  else {
    //If the user is incorrect then it will display "Incorrect, better luck next time!"
    document.getElementById('answer').innerHTML = "Incorrect, better luck next time!"
  }
}