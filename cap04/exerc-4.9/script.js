const numero = Number(prompt("entre com uma 'centena' :"));

if(numero < 100 || numero >= 1000){
   console.log('Erro...digite uma centena !');
}

const num1 = Math.floor(numero / 100);//numero1
console.log(num1);

const sobraNum1 = numero % 100;
console.log(sobraNum1);

const num2 = Math.floor(sobraNum1 / 10);//numero2
console.log(num2);

const num3 = sobraNum1 % 10;//numero3
console.log(num3);

console.log(`${num3}${num2}${num1}`)