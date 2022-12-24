// let startBtn = document.getElementById("start-btn")
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let cards = []
let hasBlackJack = false
let isAlive = false
let sum = 0
let message = "" // empty string

let palayer = {
  name: "User" ,
  chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = palayer.name + ": $" + palayer.chips

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() *13) + 1 
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  }else {
  return randomNumber
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
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
  if (isAlive === true && hasBlackJack === false) {
  let card = getRandomCard()
  cards.push(card)
  sum += card
  console.log(cards)
  renderGame()
  }else if (hasBlackJack === true || isAlive === false) {
    
  }

}
