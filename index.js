// let startBtn = document.getElementById("start-btn")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let hasBlackJack = false
let sum = firstCard + secondCard
let isAlive =true
let message = "" // empty string

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() *13)
  return randomNumber
}

function startGame() {
  renderGame()
}


function renderGame() {
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
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

function newCard() {
  let card = getRandomCard()
  cards.push(card)
  sum += card
  console.log(cards)
  renderGame()
}
