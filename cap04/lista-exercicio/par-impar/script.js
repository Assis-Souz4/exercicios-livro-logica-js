const frm = document.querySelector('form');
const respH3 = document.querySelector('h3');

frm.addEventListener('submit', (e)=>{
   e.preventDefault();
   
   const numero = Number(frm.inNumero.value);

   if(numero % 2 == 0){
      respH3.innerText = `O ${numero} é Par !`
   }else{
      respH3.innerText = `O ${numero} é Impar !`
   }
})