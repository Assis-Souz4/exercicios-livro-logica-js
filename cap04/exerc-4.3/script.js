const frm = document.querySelector('form');
const respH3 = document.querySelector('h3');

frm.addEventListener('submit', (e)=>{   
   const nome = frm.inName.value;
   const masculino = frm.inMasculino.checked;
   const altura = Number(frm.inAltura.value);
   let peso;

   if(masculino == true){
       peso = (22 * Math.pow(altura, 2)).toFixed(2);
      respH3.innerText = `${nome}: Seu pesso ideal é: ${peso}kg `;
   }else{
      respH3.innerText = `${nome}: Seu pesso ideal é: ${peso = (21 * Math.pow(altura, 2)).toFixed(2)}kg `;
   }
   
   e.preventDefault();
})