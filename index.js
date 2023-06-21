
let startEl= document.getElementById("start-el") 



let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
console.log(messageEl)


let sumEl = document.getElementById("sum-el")
console.log(sumEl)

let cardEl = document.getElementById("card-el")

let player = {
    name: "Per",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    
    isAlive = true 
    let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards=[firstCard,secondCard]
let sum = firstCard + secondCard
    renderGame()
}

function getRandomCard(){
   
    let random = Math.floor((Math.random() * 13) + 1); + 1
    if(random==1){
        return 11
    }
    else if(random>=11 && random <=13){
        return 10
    }

    return random
}


function renderGame(){
    
    sumEl.textContent = "Sum: " + sum

    cardEl.textContent="Card:" 
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
       
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
       
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
       
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}

function newGame(){
    console.log("New game started")
    if(isAlive==true && hasBlackJack==false){
    let newGameValue=getRandomCard()
    sum+=newGameValue
    cards.push(newGameValue)
    console.log(cards) 
    renderGame()
    }
}













