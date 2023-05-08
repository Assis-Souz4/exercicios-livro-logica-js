const frm = document.querySelector('form');
const respH3 = document.querySelector('h3');

frm.addEventListener('submit', (e)=>{
   let horaBr = Number(frm.inHoraBr.value);
   let horaFranca = horaBr + 5;

   if(horaFranca > 24){
      horaFranca = horaFranca - 24;
   }

   respH3.innerText = `Hora na França ${horaFranca.toFixed(2)}h`

   e.preventDefault();
})