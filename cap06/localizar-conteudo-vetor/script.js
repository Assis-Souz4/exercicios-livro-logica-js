//#localizar conteudos no vetor
//#indexOf do inicio ao fim
//#lastIndexOf do fim ao inicio

const dezenas = [10, 50, 20, 30, 40, 50, 60];

console.log(dezenas.indexOf(30));//index 2
console.log(dezenas.lastIndexOf(50));//index 2
console.log(dezenas.lastIndexOf(500));// -1 inca que não possui os numeros
console.log(dezenas.includes(2));//false > não possui o valor