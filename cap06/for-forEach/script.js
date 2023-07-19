const numeros = [10, 20, 30, 40, 50, 60];

  //for tradicional
  for (var i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); //10 20 30 40 50 60
  }

console.log('================================================================');

//for of
for (const numero of numeros) {
  console.log(numero);
}

//forEach

numeros.forEach((numero, index) => {
    console.log(numero, index);
});

let soma = 0;
numeros.forEach((numero) => {
  soma += numero
});
console.log('soma = ' + soma);

console.log('#' .repeat(10));