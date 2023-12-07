


let timer = 60;
let score = 0;

let hitrn = 0;


function getScore(){
  score += 10;
  document.querySelector("#ScoreVal").textContent = score;
}

function getNewhit(){
    hitrn = Math.floor(Math.random()*10)
   document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble(){
    let clutter = "";

for(let i =0; i<=170; i++){
   var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>` ;
    
}

document.querySelector("#p-bottom").innerHTML = clutter;
}


function runTimer(){
 let timerInt = setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timerVal").textContent = timer;
    }
    else{
        clearInterval(timerInt)

        document.querySelector("#p-bottom").innerHTML = `<h1>GAME OVER</h1>`;
    }
},1000)
}

document.querySelector("#p-bottom")
.addEventListener("click", function(dets){
    let clickedNum = Number(dets.target.textContent)

    if(clickedNum === hitrn){
        getScore()
        makeBubble()
        getNewhit()
    }
})

    





runTimer()
makeBubble()
getNewhit()
getScore()