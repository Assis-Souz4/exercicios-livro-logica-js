const frm = document.querySelector('form');
const respH3 = document.querySelector('h3');
const respH5 = document.querySelector('h5');

frm.addEventListener('submit', (evento) =>{
   const titulo = frm.inTitulo.value;
   const duracao = frm.inDuracao.value;

   const hora = Math.floor( duracao / 60);
   const minutos = duracao % 60;

   respH3.innerText = titulo;
   respH5.innerText = `${hora}Hora(s) ${minutos}min(s)`
   evento.preventDefault();
})