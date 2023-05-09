const frm = document.querySelector('form');
const respH3 = document.querySelector('h3');

frm.addEventListener('submit', (e)=>{
   const numero = Number(frm.inNumero.value);
   const raiz = Math.sqrt(numero);

   if(Number.isInteger(raiz)){
      respH3.innerText = `Raiz: ${raiz}`
   }else{
      respH3.innerText = `Não há raiz exata`;
   }


   respH3.innerText = `Hora na França ${horaFranca.toFixed(2)}h`

   e.preventDefault();
})