const pickAWinner = (user, computer) => {
  //tie
  if (user == computer){
    console.log("It's a tie!")
    return "It's a tie!"
  } 
  //rock beats Scissors
  if (user === "Rock"){
    if (computer === "Scissors"){
    console.log("Rock beats scissors!!🧗🏻User WINS!")
    return "Rock beats scissors!!🧗🏻User WINS!"
    }
  }
  else {
    console.log("Paper whoops Rock's butt")
    return "Paper whoops Rock's butt"
  } 
  //paper beats rock
  if (user === "Paper"){
    if (computer === "Rock"){
       console.log("Paper beats Rock!!📄")
       return "Paper beats Rock!!📄"
    }
  else {
    console.log("Scissors beats paper")
    return "Scissors beats paper"
    }
  }
  //scissors beats paper
  if (user === "Scissors"){
    if (computer === "Paper"){
      console.log("Scissors beats Paper!!✂️💕")
      return "Scissors beats Paper!!✂️💕"
    }
    else{
      console.log("Rock kicks Scissors butts")
      return "Rock kicks Scissors butts"
    }
  }
}   
const startGame = () => {

let user = prompt("Rock, Paper, Scissors")

let choices = ["Rock", "Paper", "Scissors"]

let computer = choices[Math.floor(Math.random()*3)]

if (choices.includes(user)){
  console.log("Lets begin, shall we?😈")
  console.log("User says:",user)
  console.log("Computer says:",computer)

 let result = pickAWinner(user, computer)

 document.querySelector("#outcome").innerHTML += result
}
else {
  console.log("Yikes, try again or learn to play.")
}
}
document.querySelector("button").onclick = startGame
