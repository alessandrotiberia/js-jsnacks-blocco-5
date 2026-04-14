const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm.
//  L'altro con le restanti.


//(zucchina) =>, stai dicendo a JavaScript: "Per ogni elemento che incontri in questo array, chiamalo momentaneamente zucchina"


// Utilizzo il metodo filter per creare due nuovi array, uno con le zucchine lunghe almeno 15cm e l'altro con le zucchine corte.
const zucchine_lunghe = zucchine.filter((zucchina) => zucchina.length >= 15);
const zucchine_corte = zucchine.filter((zucchina) => zucchina.length < 15);

console.log('Zucchine lunghe:', zucchine_lunghe);
console.log('Zucchine corte:', zucchine_corte);