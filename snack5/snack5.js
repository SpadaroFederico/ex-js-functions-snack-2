// 🏆 Snack 5
// Crea una funzione stampaOgniSecondo con setInterval.


// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

const messaggio = "Ciao!"; // Messaggio da stampare ogni secondo

function stampaOgniSecondo(messaggio) {
    return setInterval(function() {
        console.log(messaggio);
    }, 1000);
}

setTimeout(function() {
    clearInterval(TIMERID); // Ferma il timer dopo 5 secondi
    console.log("Timer fermato!");
}, 5000); // Ferma il timer dopo 5 secondi

const TIMERID = stampaOgniSecondo (messaggio); // Inizia a stampare "Ciao!" ogni secondo