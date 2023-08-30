const form = document.querySelector('form');
const resp1 = document.querySelector('.resp1');
const resp2 = document.querySelector('.resp2');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const etiqueta = form.inNome.value;
  const qtd = Number(form.inValor.value);

  for(let i = 1; i <= qtd / 2; i++) {
    resp1.innerHTML += `${etiqueta} ${etiqueta}\n`;
    console.log(`${etiqueta} ${etiqueta}`);
  }
  if(qtd % 2 == 1) {
    resp1.innerHTML += `${etiqueta}`;
    console.log(etiqueta);
  }

  resp2.innerHTML = qtd;
});

const limparResp = (resp1, resp2) =>{
  limpa.innerHTML = "";
}