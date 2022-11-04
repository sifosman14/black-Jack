let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards =[firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('cards')

function getRandomCard() {
  return Math.floor(Math.random() * 13) + 1
}

function startGame(){
  renderGame()
}

function renderGame() {
if (sum <= 20 ) {
  message = ("do you want a new card?")
}

else if(sum === 21) {
  message = ("woohoo! you have got BlackJack")
  hasBlackJack = true
}

else { message = ("You are out")
isAlive = false}

messageEl.textContent = message
sumEl.textContent = "Sum:" + sum
cardEl.textContent = "Cards:"
for (let i = 0; i < cards.length; i++) {
cardEl.textContent += cards[i] + " "
}

}

function newCard() {
  let card = getRandomCard()
  sum += card
  cards.push(card)
  startGame()
}


