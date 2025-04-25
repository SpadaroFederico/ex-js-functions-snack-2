// 🏆 Snack 6
// Crea un contatore automatico con setInterval

// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

const intervallo = 2000;

function creaContatoreAutomatico(intervallo) {
    let counter = 0;
    return () => {
        setInterval(() => {
            counter++;
            console.log(`siamo al conteggio numero ${counter}`);
        }, intervallo);
    };
}

const counter = creaContatoreAutomatico(intervallo);
counter();
