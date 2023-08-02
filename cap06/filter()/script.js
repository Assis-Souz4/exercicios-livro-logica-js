//Use filter() quando: é preciso remover elementos indesejados com base em alguma(s) condição(ões).
//O que filter() faz: como map(), filter() percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento. O valor retornado deve ser um booleano que indica se o elemento será mantido ou descartado. Depois de todos os elementos terem sido analisados, filter() retorna um novo array com todos os elementos que retornaram como verdadeiro.

//Exemplo: remover elementos duplicados de um array.

const array1 = [1, 2, 3, 2, 5, 16, 5, 1];

const array2 = array1.filter((item, index, arr) => arr.indexOf(item) === index);

console.log(array2); //[ 1, 2, 3, 5, 16 ]

console.log('#'.repeat(50));

//idade superior a 18 ou que contenha a letra b

const pessoas = [
  { nome: "Assis", idade: 38 },
  { nome: "Juliana", idade: 28 },
  { nome: "Martin", idade: 3 }
];

const pessoas2 = pessoas.filter(aux => aux.idade >= 18 || aux.nome.includes('J'))

for (const pessoa of pessoas2) {
    console.log(`${pessoa.nome} -  Idade: ${pessoa.idade}`);
}

 if(pessoas2.length === 0){
    console.log(`Condições inexistentes`);
 }

 console.log('#'.repeat(50));

//removendo duplicados

 const centenas = [100, 125, 150, 300, 401, 500, 100, 300, 135, 135];

 const centenas2 = centenas.filter((centena, index, arr) => arr.indexOf(centena) === index)
 console.log(centenas2);

 console.log('#'.repeat(50));

 //verificando se é par

const par = (centenas2) => {
    return (centenas2 % 2 === 0 );
}

 const centenas3 = centenas2.filter(par);

 console.log(centenas3);