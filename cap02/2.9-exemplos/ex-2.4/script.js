const frm = document.querySelector('form');
const respH3 = document.querySelector('h3');

frm.addEventListener('submit', (evento)=>{
   const valorQuilo = parseFloat(frm.inValorQuilo.value);
   const pesoConsumo = (Number(valorQuilo) / 1000) * Number(frm.inPesoConsumo.value);

   respH3.innerText = `Valor a pagar R$:${pesoConsumo.toFixed(2)}`;

   evento.preventDefault();
})