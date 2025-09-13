let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg") 
let scoreUser = document.querySelector("#user-score")
let scoreComp = document.querySelector("#comp-score")
let newgame = document.querySelector("#newgame")

let userscore = 0;
let compscore = 0;

function genComp(){
    let option = ["rock", "paper", "scissor"]
    let randEx = Math.floor(Math.random()*3);
    return option[randEx]
}

function gamedraw(){
msg.innerText = "game draw. play again..."
msg.style.backgroundColor = "rgb(5, 5, 34)"
}

function showwin(userwin, userchoice, compChoice){
    if (userwin == true) {
        userscore++;
        scoreUser.innerText = userscore;
        msg.innerText = `You Win...!! your ${userchoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    } else {
        compscore++;
        scoreComp.innerText = compscore;
        msg.innerText =`you lose...! ${compChoice} beats your ${userchoice}`
        msg.style.backgroundColor = "red"
    }

}

function playgame  (userchoice) {
    // console.log("user's choice is ", userchoice);
   let compChoice= genComp();
//    console.log("computer's choice is ", compChoice);

   if(userchoice == compChoice){
       gamedraw();
   }else {
     let userwin = true
      
     if(userchoice === "rock"){
        userwin = compChoice === "paper"? false:true;
     }
     else if (userchoice === "paper"){
        userwin = compChoice ==="scissor"? false:true;
     } 
     else{
        userwin = compChoice ==="rock"? false:true;
     }
     showwin(userwin, userchoice, compChoice);
   }
}

function start(){
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener('click', () =>{
        // console.log("yess");
        let userchoice = choice.getAttribute("id")
        playgame(userchoice);
    })
}) };
start()

newgame.addEventListener('click', ()=>{
    newstart();
})
function newstart (){
    userscore = 0;
     compscore = 0;
     console.log("hhhh");
    start();
}