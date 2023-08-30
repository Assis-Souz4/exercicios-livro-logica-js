const numeros = [1, 2, 3, 4, 5];

//for of
for (const numero of numeros) {
  console.log(numero);
}

//for each
numeros.forEach((numero, index) => {
  console.log(`valor > ${numero}  index > ${index}`);
});

console.log('*'.repeat(20));

//somando elementos do vetor
const decimais = [10, 20, 30, 40];
let somando = 0;

decimais.forEach((decimal) => {
    somando += decimal;
});
console.log(somando);