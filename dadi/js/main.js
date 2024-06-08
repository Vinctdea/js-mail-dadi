// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

const btn = document.getElementById("btn")
const risultato = document.querySelector(".risultato")
const numeroHum = document.querySelector(".hum")
const numeroBot = document.querySelector(".bot")
btn.addEventListener("click",
    function(){
       let numeroUser = Math.trunc(6*Math.random()) + 1;
       let numeroPc = Math.trunc(6*Math.random()) + 1;
       numeroHum.classList.remove("none");
       numeroBot.classList.remove("none");

       console.log("il numero pc:"+ numeroPc, "il mio numero: " +numeroUser);   
       numeroBot.innerHTML="numero pc: "+ numeroPc;
       numeroHum.innerHTML="il tuo numero: "+ numeroUser;

        // Stabilire il vincitore, in base a chi fa il punteggio più alto.
       if( numeroPc < numeroUser){
        risultato.innerHTML="Hai vintooooo!!!!"
       }else if( numeroPc=== numeroUser){
        risultato.innerHTML="c'è un pareggio!!!!"
       }else{
        risultato.innerHTML="Hai perso!!!!"

       }

       console.log(risultato);
      
    }

)


