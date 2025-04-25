// 🏆 Snack 7
// Crea una funzione che ferma un timer dopo un certo tempo
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.


function eseguiEferma(message, startTime, stopTime){
    const interval = setInterval(() => {
        console.log(message);
    }, startTime);

    setTimeout(() => {
        clearInterval(interval);
        console.log("Timer fermato");
    }, stopTime);
}

eseguiEferma("questo messaggio si ripeterà per 10 secondi", 1000, 10000); // Stampa il messaggio ogni secondo per 10 secondi
eseguiEferma();
