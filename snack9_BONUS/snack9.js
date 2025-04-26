// 🎯 Snack 9 (Bonus)
// Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
// Esempio di utilizzo:
// sequenzaOperazioni([
//   () => console.log("Operazione 1"),
//   () => console.log("Operazione 2"),
//   () => console.log("Operazione 3")
// ], 2000);


// Output atteso:
// Operazione 1
// Operazione 2
// Operazione 3

const operazioni = [
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
]

const intervallo = 2000; 

function sequenzaOperazioni(operazioni, intervallo) {
    for (let i=0; i < operazioni.length; i++) {
        setTimeout(() => {
            operazioni[i]();
        }, intervallo * i);
    }
} 

sequenzaOperazioni(operazioni, intervallo); // Chiama la funzione!


      


