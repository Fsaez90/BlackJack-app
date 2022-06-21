
let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let player = {
    name: "Felipe",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " " + ": $" + player.chips


function getRandomCard () {
    let randomNumber =  Math.floor( Math.random() * 13) + 1 
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]

    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card buddy?"
        isAlive = true
    } else if (sum === 21) {
        message = "Wohoo! You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "Get the hell outta here!"
        isAlive = false
    }
    
    messageEl.textContent = message
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ", "
     }
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let nc = getRandomCard()
        sum += nc
        cards.push(nc)
        renderGame()
    }
}






