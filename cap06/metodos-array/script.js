//pop, shift, push, unshift
const numeros = [10, 20, 30, 40, 50, 60];
numeros.pop();
console.log(numeros); //retira o ultimo

const numeros2 = [10, 20, 30, 40, 50, 60];
numeros2.shift();
console.log(numeros2); //retira o primeiro

const numeros3 = [10, 20, 30, 40, 50, 60];
numeros3.push(6000);
console.log(numeros3); //add ao ultimo

const numeros4 = [10, 20, 30, 40, 50, 60];
numeros4.unshift(6000);
console.log(numeros4); //add ao primeiro

//slice e splice

const letras1 = ["a", "b", "c", "d", "e"];
console.log(letras1);
console.log(letras1.slice(-2)); //obtem as 2 ultimas
console.log(letras1.slice(0, -1)); //obtem do inicio ao fim menos a ultima

const frutas1 = ["limão", "abacate", "laranja", "maça", "pera"]; //splice modifica o array
console.log(frutas1.splice(2, 1)); //remove apartir do indice 2 1 elemento

console.log(frutas1);


