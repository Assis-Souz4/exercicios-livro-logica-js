const container = document.querySelector('.container');
const titulo = document.createElement('h1');
const form = document.querySelector('form');
const textoTitulo = document.createTextNode('Contas à Pagar');

container.appendChild(titulo);
titulo.appendChild(textoTitulo);
container.insertBefore(titulo, form);

document.querySelector('h1').style.color= 'rgba(0,0,255,1)';
document.querySelector('.resp1').style.color= 'red';
document.querySelector('.resp2').style.color= 'red';

const resp1 = document.querySelector('.resp1');
const resp2 = document.querySelector('.resp2');
let numContas = 0;
let valorConta = 0;
let resposta = "";

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const conta = form.inNome.value;
  const valor = Number(form.inValor.value);

  numContas++;
  resp1.innerText += `${conta} - R$${valor}\n`
  valorConta = valorConta + valor;
  resposta = `${numContas} Contas - R$ ${valorConta}`;
  resp2.innerText = resposta;

})

const limparResp = () => {
  limpa.innerText = " ";
};
