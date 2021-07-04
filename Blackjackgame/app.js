let cards=[];
let sum= 0;
let isAlive= false;
let hasBlackjack= false;
let cardsEL= document.getElementById("cards-El");
let sumEl= document.getElementById("sum-El");
let messageEl= document.getElementById("message-El");

function getRandomCards() {
    let randomNumber= Math.floor(Math.random()*13 + 1) 
    if (randomNumber === 1) {
        return 11;
    }else if (randomNumber > 10) {
        return 10;
    }else{
        return randomNumber;
    }
}

function startGame(){
    let firstCard= getRandomCards();
    let secondCard= getRandomCards();
    cards=[firstCard,secondCard];
    sum=firstCard + secondCard;
    renderGame()
}

function renderGame() {
    cardsEL.textContent= "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEL.textContent += cards[i] + " ";
        
    }
    if (sum < 21) {
        messageEl.textContent= "DO You want to ddraw a new card";
        isAlive= true;
    }else if (sum === 21) {
        messageEl.textContent= "congrats u win jackpot";
        hasBlackjack= true;
    }else{
        messageEl.textContent= "you are out of the game";
        
    }

    sumEl.textContent= "Sum: " + sum;
}

function newCard() {
    if (isAlive=== true && hasBlackjack=== false) {
        card=getRandomCards();
        cards.push(card);
        sum += card;
        renderGame()
    }
}