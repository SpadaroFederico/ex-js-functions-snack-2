// 🏆 Snack 4
// Crea un generatore di funzioni creaTimer
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

function CreateTimer(ms){
    return function(){
        setTimeout(function(){
            console.log("Tempo scaduto!");
        }, ms);

    }
}

const timer1 = CreateTimer(2000); // 2 secondi
timer1(); // Avvia il timer