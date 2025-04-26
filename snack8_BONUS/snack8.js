// 🎯 Snack 8 (Bonus)
// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

// Esempio di utilizzo:

// contoAllaRovescia(5)
// Output atteso:
// 5
// 4
// 3
// 2
// 1
// Tempo scaduto!

function contoAllaRovescia(n) {
    console.log(`Inizio conto alla rovescia da ${n}`);
    
    const intervallo = setInterval(() => {
        if (n > 0) {
            console.log(n);
            n--;
        }
        else if (n === 0) {
            console.log("Tempo scaduto!");
            clearInterval(intervallo);
        }
    }, 1000);
}
contoAllaRovescia(5); 

