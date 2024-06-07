// creo array database mail list

const mailList = ["irene@live.it" ,"marco@live.it","aldo@live.it","alice@live.it","giovanni@live.it","luca@live.it","paolo@live.it","marta@live.it"]
console.log(mailList);

// Chiedi all’utente la sua email, 
let risultato;
const bottone = document.querySelector(".btn");
const formMail = document.getElementById("mail");
const vero = document.querySelector(".si")
const falso = document.querySelector(".no")
bottone.addEventListener("click",
    function(){
        let valoreMail = formMail.value;
        console.log(valoreMail);

        // controlla che sia nella lista, creo ciclo for
        for (let i=0; i < mailList.length; i++){
            let lista= mailList[i]
            console.log(lista);
            // controlla che sia nella lista di chi può accedere, 
            // stampa un messaggio appropriato sull’esito del controllo.
            if( valoreMail === lista){
                 risultato = true

            }
            
        }
        
        if(risultato === true){
            vero.classList.add("display");
        }else{
            falso.classList.add("display");
        }
    }
)





