const frm = document.querySelector('form');
const respH3 = document.querySelector('h3');

frm.addEventListener('submit', (e)=>{
   e.preventDefault();
   
   const velocPermitida = Number(frm.inVelocidade.value);
   const velocVeiculo = Number(frm.inVelocidadeVeiculo.value);

   if(velocVeiculo <= velocPermitida){
      respH3.innerText = `Dentro da velocidade permitida de ${velocPermitida}Km/h`
   }
   else if(velocVeiculo > velocPermitida && velocVeiculo <= (velocPermitida * 0.2) + velocPermitida){
      respH3.innerText = `Voce recebeu uma multa leve, velocidade permitida ${velocPermitida}Km/h`
   }
   else{
      respH3.innerText = `Multa grave, velocidade permitida ${velocPermitida}Km/h`
   }
   // else if(velocVeiculo > velocVeiculo + (velocVeiculo * 0.2)){
   //    respH3.innerText = `Voce recebeu uma multa grave, velocidade permitida ${velocPermitida}Km/h`
   // }   
})