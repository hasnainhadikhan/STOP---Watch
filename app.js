let hours = 0;
let minut = 0;
let second = 0;
let milliseconds = 0;
let timer;
let stop = "start"

function start(){
    timer = setInterval(()=>{
        milliseconds++
        if(milliseconds >= 100){
            second++
            milliseconds = 0;
        }
        if(second >= 60){
            minut++
            second = 0;
        }
        if(minut >= 60){
            hours++
            minut = 0;
        }
 document.getElementById("watch").innerHTML = `${hours}:${minut}:${second}:${milliseconds}`
    },100)
}
function startStop(){
    
        clearInterval(timer)
        stop = "stop"
        document.getElementById("startStop").innerText = "stop";
   
}

function reset(){
    location.reload()
}