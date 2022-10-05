let player ={
    name : "Guest",
    chips : 200
}
let cardList = []

let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let sum = 0
let gameCheck = false

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " : " + player.chips + "$"

function startGame() {
    sum = 0
    cardList = []
    sumEl.textContent = "Sum : "
    cardsEl.textContent = "Cards : "
    gameCheck = false


    newCard()


}

function renderGame() {

    cardsEl.textContent += cardList[cardList.length - 1] + ' '
    sumEl.textContent = "Sum : " + sum

    if (sum < 21) {
        messageEl.textContent = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        messageEl.textContent = "You've got BlackJack!"
        gameCheck = true
    }
    else {
        messageEl.textContent = "You're out of the game!"
        gameCheck = true

    }

}

function newCard() {
    if (gameCheck === false) {

        let randomNum = getRandomCard()

        cardList.push(randomNum)
        sum += randomNum

        renderGame()
    }
}

function getRandomCard() {
    let num = Math.floor((Math.random() * 13) + 1)

    if (num > 10) {
        return 10
    }
    else if (num === 1) {
        return 11
    }
    else {
        return num
    }

}
