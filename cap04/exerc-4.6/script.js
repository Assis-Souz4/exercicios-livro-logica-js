const frm = document.querySelector("form");
const respNota1 = document.querySelector("#outNota1");
const respNota2 = document.querySelector("#outNota2");
const respNota3 = document.querySelector("#outNota3");

frm.addEventListener("submit", (e) => {
  const saque = Number(frm.inValorSaque.value);

  if (saque % 10 != 0) {
    alert("Valor invalido p/ as notas disponiveis(R$ 10, 50, 100)");
    frm.inVlorSaque.focus();
    return
  }
  const notasCem = Math.floor(saque / 100);
  let resto = saque % 100;

  const notasCinquenta = Math.floor(resto / 50);
  resto = resto % 50;

  const notasDez = Math.floor(resto / 10);

  if(notasCem > 0){
   respNota1.innerText = `Notas de R$ 100: ${notasCem}`
  }
  if(notasCinquenta > 0){
   respNota2.innerText = `Notas de R$ 50: ${notasCinquenta}`
  }
  if(notasDez > 0){
   respNota3.innerText = `Notas de R$ 10: ${notasDez}`
  }



  e.preventDefault();
});
