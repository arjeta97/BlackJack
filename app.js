
let firstCard=getRandomCard()
let secondCard=getRandomCard()
let cards=[firstCard, secondCard] // array order list of items
let sum = firstCard+secondCard
let hasBlackJack= false
let isAlive= false
let message=""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

function getRandomCard(){
  let randomNumber= Math.floor( Math.random()*13)+1
  if (randomNumber>10) {
     return 10
  } else if(randomNumber===1){
     return 11
  } else{
     return randomNumber
  }
}


function startGame(){
   isAlive=true
   let firstCard=getRandomCard()
   let secondCard=getRandomCard()
   cards=[firstCard, secondCard]
   sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
     sumEl.textContent= "SUM:" + sum
            if(sum < 21){
            message= "Do you want to draw a new card?"
            
        
         } else if ( sum === 21) {
            message="Congratulations, you got BLACKJACK!!!"
            hasBlackJack=true
           
            
         } else {
            message="You are out of the game!"
            isAlive=false
           
         }
        messageEl.textContent= message
        cardsEl.textContent= "Cards:" 
        for(let i=0; i<cards.length; i++){
            cardsEl.textContent+=cards[i]+" "

        }     
}

function newCard(){
   if(isAlive===true && hasBlackJack===false){
    let Card= getRandomCard()
sum+=Card
cards.push(Card)
renderGame()
 
   }      
}

