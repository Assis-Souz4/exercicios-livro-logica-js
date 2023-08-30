const frm = document.querySelector('form');
const resposta = document.querySelector('.respDiv');

frm.addEventListener('submit', (e) => {
  e.preventDefault();
 
  const numero = frm.inNumero.value;

  for(let i = numero; i >= 1; i--){
    resposta.innerText +=" " + i + " ";
  }
})
const limparResp = () => {
  clear.innerHTML = " ";
};
