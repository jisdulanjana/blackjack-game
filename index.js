let firstCard = 10
let secondCard = 12
let hasBlackJack = false
let sum = firstCard + secondCard
let isAlive =true
let message = "" // empty string
if (sum < 21) {
  message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🥳"
  hasBlackJack = true
} else {
  message = "You're out of the game! 😭"
  isAlive = false
}

console.log(message)
console.log(isAlive)