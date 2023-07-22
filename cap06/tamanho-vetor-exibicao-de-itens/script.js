//lenght: essa propriedade retorna o tamnho do vetor

//percorrendo e exibindo os elementos do vetor usando for
const numeros = [1, 2, 3, 4, 5, 6];

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

console.log(numeros.toString());//converte o vetor em string e add virgula para separar
console.log(numeros.join('*'));//com o metodo join podemos indicar qual simbolo irá fazer a sepapração

console.log('#'.repeat(20));