const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

// Utilizzo il metodo filter per creare un nuovo array di numeri pari.

const num_pari = nums.filter(function(singolo_num) {
    if (singolo_num % 2 === 0) { //se il resto della divisione per due è zero allora è un numero pari
        return true; // se è vero allora il numero viene inserito nell'array num_pari
    }
});
console.log(num_pari);