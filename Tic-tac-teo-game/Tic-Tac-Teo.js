let but = document.querySelectorAll(".btn")
let reset = document.querySelector(".reset")
let newgame = document.querySelector("#newgame")
let msgContainer = document.querySelector(".msgContainer")
let messege = document.querySelector("#msg")

let turn1 = true;
let count = 0;
let win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

but.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (turn1 == true) {
            btn.innerText = "o";
            turn1 = false
            // console.log("yes");
        }
        else {
            btn.innerText = "x";
            turn1 = true;
        }
        btn.disabled = true;
        count++;
        checkwin();
    })
});

function showin(val1){
    msg.innerText = `Congratulations WINNER is ${val1}`
    msgContainer.classList.remove("hide")
     disgame();
}
function disgame(){
    for(let dis of but){
        dis.disabled=true
    }
}
function enablegame(btn){
    but.forEach(btn => {
        btn.disabled=false;
        btn.innerText="";
    });
}

function checkwin(){
    for (let pattern of win) {
        let val1 = but[pattern[0]].innerText
        let val2 = but[pattern[1]].innerText
        let val3 = but[pattern[2]].innerText

        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(val1, val2 , val3);
        if(val1 != "" && val2 !="" && val3 !=""){
            if(val1==val2 && val2==val3){
             //   console.log("winner");
           //  showin(val1)
             setTimeout(()=>{
                showin(val1)
             },200)  ;
            }
        }
    }
}

function resetgame(btn){
    turn1 = true
    // console.log("yeaaa");
     enablegame();
     msgContainer.classList.add("hide")
}

newgame.addEventListener('click', ()=>{
    resetgame()
})
reset.addEventListener('click', ()=>{
    resetgame()
})