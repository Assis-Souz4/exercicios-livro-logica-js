const frm = document.querySelector("form");
const respH3 = document.querySelector("h3");
const respH4 = document.querySelector("h4");
const respH5 = document.querySelector("h5");

frm.addEventListener('submit', (evento)=>{
   const inptNomeVeiculo = frm.inVeiculo.value;
   const inptPrecoVeiculo = Number(frm.inPreco.value);

   respH3.innerText = inptNomeVeiculo;
   respH4.innerText = `Entrada de R$:${(Number(inptPrecoVeiculo) / 2).toFixed(3)}`;
   respH5.innerText = `12x de R$:${(Number(inptPrecoVeiculo / 2) / 12).toFixed(3)}`;

   evento.preventDefault();

})