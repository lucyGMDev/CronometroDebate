'use strict';

window.addEventListener('load',()=>{
    console.log("Pagina cargada");
    
    function ConvertTimeToString({minutos= 0,segundos=0})
    {
        if(minutos<10) minutos = '0'+minutos;
        if(segundos<10) segundos = '0'+segundos;
        return minutos.toString() +":"+ segundos.toString();
    }

    function Timer()
    {
        var timeDown=setInterval(function() {
            segundos--;
            if(minutos == 0 && segundos == 0)
            {
                timer.className+="debate-timer-out-time"
            }
            if(segundos<=0 && minutos>0)
            {
                segundos=59;
                minutos--;
            }
            if(segundos<= -60 && minutos<=0){
                segundos=0; 
                minutos--;
            }
            if(minutos<0 || segundos <0 )
            {
    
                timer.innerText=ConvertTimeToString({minutos:(minutos*(-1)),segundos:segundos*(-1)});
            }
            else
            {
                timer.innerText=ConvertTimeToString({minutos:minutos,segundos:segundos});
            }        
        },1000);
        return timeDown
    }

    const timer = document.getElementById("debate-timer");
    var minutos = 1;
    var segundos = 5;
    var tiempo = ConvertTimeToString({minutos:minutos,segundos:segundos});
    timer.innerText=tiempo;
    var timeDown;
    const startButton = document.getElementById("debate-start");
    var timeDown=startButton.addEventListener("click",()=>{
        if(timeDown == undefined)
        {
            timeDown=Timer();
        }
    });


    const debateStop = document.getElementById("debate-stop");
    debateStop.addEventListener("click",()=>{
        if(timeDown!=undefined)
        {
            clearInterval(timeDown);
            timeDown=undefined; 
            startButton.innerText="Reanudar";
        }
    })
    

    
});