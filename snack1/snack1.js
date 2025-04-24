// 🏆 Snack 1
// Crea una funzione che somma due numeri.

// creo una funzione somma, che ha come parametri num1 e num2, 
// ritorno la somma dei due parametri e stampo in console la funzione con dei valori assegnati

function somma (num1, num2){    
    return num1+num2;
}

console.log (somma(5, 8));



 // Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

const somma = function (num1, num2){
    return num1 + num2
}

console.log (somma(5, 8));



// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.


function somma (num1, num2){    
    return num1+num2;
}

console.log (somma(5, 8));


// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const somma = (num1, num2) => (num1 + num2);

console.log(somma(5,8));








