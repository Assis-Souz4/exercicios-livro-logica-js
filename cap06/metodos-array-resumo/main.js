//https://www.freecodecamp.org/portuguese/news/como-manipular-arrays-em-javascript/
//conteudo todo no link acima

//O método toString() em JavaScript converte um array em uma string separada por vírgulas.
function toString() {
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.toString());
}
toString();

//O método join() em JavaScript combina todos os elementos do array em uma string.
function join() {
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.join("+"));
}
join();

//concat Este método combina dois arrays ou adiciona mais itens a um array e depois retorna um novo array.
function concat() {
  let numerosIniciais = [1, 2, 3];
  let numerosFinais = [4, 5, 6];
  let unidos = numerosIniciais.concat(numerosFinais);
  console.log(unidos); // [1, 2, 3, 4, 5, 6]
}
concat();

function push() {
  //push() Este método adiciona itens ao final de um array e altera o array original.

  let navegadores = ["chrome", "firefox", "edge"];
  navegadores.push("safari", "opera mini");
  console.log(navegadores);
  // ["chrome", "firefox", "edge", "safari", "opera mini"]
}
push();

//pop() Este método remove o último item de um array e o retorna.

function pop() {
  let navegadores = ["chrome", "firefox", "edge"];
  navegadores.pop(); // "edge"
  console.log(navegadores); // ["chrome", "firefox"]
}

//shift() Este método remove o primeiro item de um array e o retorna.
let navegadores = ["chrome", "firefox", "edge"];
navegadores.shift(); // "chrome"
console.log(navegadores); // ["firefox", "edge"]

//splice() Este método altera um array, adicionando, removendo e inserindo elementos.
//A sintaxe é: array.splice(indice[, contagemDeExclusao, elemento1, ..., elementoN])
//depois de executar splice(), ele retorna o array com os itens removidos e os remove do array original.
let cores = ["verde", "amarelo", "azul", "roxo"];
cores.splice(0, 3);
console.log(cores); // ["roxo"]
// exclui ["verde", "amarelo", "azul"]

//Se o segundo parâmetro não for declarado, todos os elementos a começar do índice fornecido serão removidos do array:
let cores2 = ["verde", "amarelo", "azul", "roxo"];
cores2.splice(3);
console.log(cores2); // ["verde", "amarelo", "azul"]
// exclui ['roxo']

//No próximo exemplo, removeremos 3 elementos do array e os substituiremos por mais itens:
let agenda = ['Eu', 'tenho', 'um', 'compromisso', 'amanhã'];
// remove os 4 primeiros elementos e os substitui por outros
agenda.splice(0, 4, 'Nós', 'vamos', 'nadar');
console.log(agenda); 
// ["Nós", "vamos", "nadar", "amanhã"]

//Para adicionar itens, precisamos definir contagemDeExclusao como zero
let agenda2 = ['Eu', 'tenho', 'um', 'compromisso', 'com'];
// adiciona 3 novos elementos ao array
agenda2.splice(5, 0, 'alguns', 'clientes', 'amanhã');
console.log(agenda2); 
// ["Eu", "tenho", "um", "compromisso", "com", "alguns", "clientes", "amanhã"]

//slice() Este método se assemelha a splice(), mas é muito diferente. Ele retorna subarrays em vez de substrings.
//Este método copia uma parte dada de um array e retorna aquela parte copiada como um novo array. Ele não altera o array original.
//A sintaxe é: array.slice(início, fim)
let numeros = [1, 2, 3, 4]
numeros.slice(0, 3)// retorna [1, 2, 3]
console.log(numeros) // retorna o array original

//A melhor forma de se usar slice() é atribui-lo a uma nova variável.
let mensagem = 'congratulations'
const abbrv = mensagem.slice(0, 7) + 's!'; 
console.log(abbrv) // retorna "congrats!" (forma abreviada de Congratulations)