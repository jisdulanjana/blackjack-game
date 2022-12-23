// let startBtn = document.getElementById("start-btn")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let firstCard = 13
let secondCard = 11
let hasBlackJack = false
let sum = firstCard + secondCard
let isAlive =true
let message = "" // empty string


function startGame() {
  sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂"
      } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
      } else {
        message = "You're out of the game! 😭"
        isAlive = false
      }
      messageEl.textContent = message
      
}