const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const nomi = [];

for (let i = 0; i < people.length; i++) {
  const nomi_1 = people[i];
  nomi.push(nomi_1.name);
}
console.log(nomi);