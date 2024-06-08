// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

const btn = document.getElementById("start");
const refresh = document.getElementById("refresh");
const risultato = document.querySelector(".risultato");
const numeroHum = document.querySelector(".hum");
const numeroBot = document.querySelector(".bot")
const dado1 = document.querySelector(".dadox1");
const dado2 = document.querySelector(".dadox2");
const dado3 = document.querySelector(".dadox3");
const dado4 = document.querySelector(".dadox4");
const dado5 = document.querySelector(".dadox5");
const dado6 = document.querySelector(".dadox6");

// pulsante refresh
refresh.addEventListener("click",
    function(){
        location.reload();
    }
)


// genero numeri al click
btn.addEventListener("click",
    function(){
       let numeroUser = Math.trunc(6*Math.random()) + 1;
       let numeroPc = Math.trunc(6*Math.random()) + 1;
       console.log("il numero pc:"+ numeroPc, "il mio numero: " +numeroUser); 

    //    stampo i numeri dei partecipanti
        numeroHum.innerHTML += numeroUser;
        numeroBot.innerHTML += numeroPc;


    //    associo numeri a dadi user
       if(numeroUser===1){ 
        dado1.classList.remove("none");
       }else if(numeroUser===2){
        dado2.classList.remove("none");
        
       }else if(numeroUser===3){
        dado3.classList.remove("none");

        }else if(numeroUser===4){
        dado4.classList.remove("none");

        }else if(numeroUser===5){
        dado5.classList.remove("none");

        }else if(numeroUser===6){
        dado6.classList.remove("none");

        }

        //    associo numeri a dadi pc
       if(numeroPc===1){ 
        dado1.classList.remove("none");
       }else if(numeroPc===2){
        dado2.classList.remove("none");
        
       }else if(numeroPc===3){
        dado3.classList.remove("none");

        }else if(numeroPc===4){
        dado4.classList.remove("none");

        }else if(numeroPc===5){
        dado5.classList.remove("none");

        }else if(numeroPc===6){
        dado6.classList.remove("none");

        }

        



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


