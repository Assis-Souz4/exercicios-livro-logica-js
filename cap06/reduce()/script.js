//O método reduce (junto com o map e o filter) faz parte dos métodos de array que seguem os conceitos de programação funcional, sendo muito útil para extrair um resultado a partir de um conjunto de dados. Por isso o reduce é muito útil e poderoso para, por exemplo, lidar com banco de dados NoSQL ou tratar um retorno de API.

//Diferentemente do map e do filter que retornam um array com vários resultados, o reduce retorna um único resultado.

//somatoria de um array sem parametro inicial

const numeros = [1, 2, 3, 4, 5, 6];
const soma = (acc, numero) => acc + numero;
const resultado = numeros.reduce(soma);

console.log(resultado); //21

console.log("#".repeat(28));

//somatoria de array com parametro inicial

const valorInicial = 10;

const soma2 = (acc, numero) => acc + numero;
const resultado2 = numeros.reduce(soma2, valorInicial);

console.log(resultado2); //26

console.log("#".repeat(28));

//soma das idades e concatenação dos nomes

const pessoas = [
  { nome: "Annabel", idade: 20 },
  { nome: "Italo", idade: 30 },
  { nome: "Gabi", idade: 40 }
];

const idades = pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0);
const nomes = pessoas.reduce((acc, pessoa) => acc + pessoa.nome + ' ' , '');

console.log(idades);
console.log(nomes);

console.log("#".repeat(28));

//outra maneira usando função callback

const somaIdades = ((acc, pessoa) => acc + pessoa.idade);//callback
const listaNomes = ((acc, pessoa) => acc + pessoa.nome + ' ');//callback

const totalIdades = pessoas.reduce((somaIdades), 0);
const mostrarNomes = pessoas.reduce((listaNomes), '');

console.log(totalIdades);
console.log(mostrarNomes);

console.log("#".repeat(28));

//retornadoo maior valor e menor valor

const arrayNumeros = [25, 12, 50, 35, -100];

const maiorNumero = (acc, numero) => Math.max(acc, numero);
const menorNumero = (acc, numero) => Math.min(acc, numero);

const maior = arrayNumeros.reduce((maiorNumero), 0);
const menor = arrayNumeros.reduce((menorNumero));

console.log(`Maior: ${maior} e Menor: ${menor}`);
