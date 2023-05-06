//criando referencia ao form e h3
const formulario = document.querySelector('form');
const resposta = document.querySelector('h3');

//criando um ouvinte de evento para o botao submit
formulario.addEventListener('submit', (evento) =>{

   const nome = formulario.saidaNome.value//recebe o nome digitado no form
   resposta.innerText = `olá, bem vindo ${nome}`//exibe a resposta
   evento.preventDefault()//evita recarregar a pagina
   
})