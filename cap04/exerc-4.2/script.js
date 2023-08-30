const frm = document.querySelector('form');
const respH3 = document.querySelector('h3');
const respH4 = document.querySelector('h4');

frm.addEventListener("submit", (e)=>{
   let nomeAluno = frm.inNome.value;
   let nota1 = parseFloat(frm.inN1.value);
   let nota2 = parseFloat(frm.inN2.value);
   let media = (parseFloat(nota1 + nota2) / 2).toFixed(2);
   respH3.innerText = `Sua media é: ${media}`

   if(media >= 6){
      respH4.innerText = `Parabens ${nomeAluno} APROVADO(A)!`;
   }else{
      respH4.innerText = `Estude mais! ${nomeAluno} REPROVADO(A)!`;
   }
   e.preventDefault();
})
