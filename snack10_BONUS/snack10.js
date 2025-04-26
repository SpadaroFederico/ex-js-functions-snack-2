// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

function creaThrottler(mainfunction, delay) {
    let lastTimeExecuted = 0;
    return function(...args) {
        const ora = Date.now();
        if (ora - lastTimeExecuted >= delay) {
            lastTimeExecuted = ora;
            return mainfunction(...args);
        } else {
            console.log("Chiamato troppo presto, ignorato.");
        }
    }
}

const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);
throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)
