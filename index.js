// let startBtn = document.getElementById("start-btn")
let messageEl = document.getElementById("message-el")
let firstCard = 10
let secondCard = 11
let hasBlackJack = false
let sum = firstCard + secondCard
let isAlive =true
let message = "" // empty string


function startGame() {
    console.log("Game is starting...")
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
      console.log(message)
      console.log(isAlive)
}