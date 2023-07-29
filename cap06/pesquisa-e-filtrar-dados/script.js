//so vai mostrar o decimal atingindo a condição if
const idades = [
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26
];
for (idade of idades) {
  if (idade >= 18) {
    console.log(idade);
  }
}
console.log("#".repeat(30));

//apresentar uma mensagem caso não haja idade maior que 18, sem que a mensagem seja repetida varias vezes

const idades2 = [10, 12, 15, 13, 16, 11, 14, 17];
let maiores = false;

for (idade2 of idades2) {
  if (idade2 >= 18) {
    console.log(idade2);
    maiores = true;
  }
}
if (!maiores) {
  console.log(`não existe idade maiores que 18`);
}

const numeros = [1, 5, 101, 203, 13, 801, 21, 99, 108];
let num = false;

console.log('#'.repeat(50));

{
  for (numero of numeros) {
    if (numero % 2 == 0) {
      console.log(`par`);
      num = true;
    }
  }
  if (!num) {
    console.log(`não existe numero par`);
  }
}
