
// let player={
//    name:"Arjeta",
//    chips: 420
// }
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

// let player={
//    name:"Arjeta",
//    chips: 420
// }

// let playerEl=document.getElementById("player-el")
// playerEl.textContent= player.name +":$" +player.chips


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
//    let age=103

//    if(age < 100){
//        console.log("Not elegible")
//    }
//    else if ( age=== 100){
//        console.log("Here is you bday card")
//    }
//    else{
//        console.log("You can not get a second bday card")
//    }

//array let Me[ "Arjeta", 24, true]

//let message=[
//     how are you doing?
//     what is oing on?
// ]
//let newMessage="what do you want?"
//message.push(newMessage)

//LOOPS
//for(let i=10; i<101; i+=10;){
//     console.log(i)
// 
// let Cards =[7, 3, 9]
// for(i=0; i< cards.length; i++ ){
//    console.log(cards[i])
// }

// Returning values
// let player1Time=102
// let player2Time=107

// function getFastestRaceTime(){
//    if(player1Time<player2Time){
//      return player1Time 
//    } else if(player2Time<player1Time){
//       return player2Time
//    //if they have the same time
//    } else{
//     player1Time  
//    } 
// }
// let fastestRace= getFastestRaceTime()
// console.log

// function getTotalRaceTime(){
//    return player1Time+player2Time
// }

// let totalTime= getTotalRaceTime()

