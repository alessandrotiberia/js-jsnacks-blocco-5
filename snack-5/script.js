const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const num_pari = nums.filter(function(singolo_num) {
    if (singolo_num % 2 === 0) {
        return true;
    }
});
console.log(num_pari);