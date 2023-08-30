const form = document.querySelector("form");
const msgSaque = document.querySelector(".msgSaque");
const msgInfo = document.querySelector(".msgInfo");
const saques = [];

// const msg = prompt(
//   'Digite "S" - Sair ou "Enter" para continuar'
// ).toUpperCase();

// if (msg === "S") {
//   alert("Saque Cancelado!!");
// }else{
//   console.log('passou');
// }

function sumirMsg() {
  setTimeout(() => {
    msgSaque.innerText = "";
  }, 1700);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const vlrSaque = Number(form.inSaque.value);

  saques.push(vlrSaque);
  form.reset();
  form.inSaque.focus();

  if (vlrSaque % 10 === 0) {
    msgSaque.innerText = `Saque realizado com sucesso !!`;
    sumirMsg();
  } else {
    msgSaque.innerText = `Erro!! Somente valores multiplos de 10`;
    sumirMsg();
  }
});

form.resumo.addEventListener('click', () => {
  
  const validos = saques.filter(saque => saque % 10 === 0);
  for(const valido of validos){
    console.log(valido.toFixed(2));
    msgInfo.innerHTML = `Saques validos:\n${validos.map((item) => {
      return '<li>' + 'R$'+ item.toFixed(2) + '</li>';
    })}\n${'_'.repeat(50)}\n`;
  }

  const totalValidos = validos.reduce((total, saque) => total + saque, 0);
  msgInfo.innerText += `Valor total saques validos: R$${totalValidos.toFixed(2)}\n`;

  const invalidos = saques.length - validos.length;
  console.log(invalidos);

  msgInfo.innerText += `\nNº tentativa(s) saques invalidos: ${invalidos}`
});