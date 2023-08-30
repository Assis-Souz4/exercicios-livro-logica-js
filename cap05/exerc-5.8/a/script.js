const nome = prompt('Digite um nome:');
const numVezes = prompt('Digite numero de repetição:');
const body = document.body;
const h4 = document.createElement('h4');

body.appendChild(h4);

const texto = document.createTextNode(nome);
// h1.appendChild(texto);


// const showName = document.

for(let i = 1; i <= numVezes; i++) {
  h4.innerText += `\n${i}º - ${nome}\n`;
  console.log(nome);
}