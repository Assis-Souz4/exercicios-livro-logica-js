const frm = document.querySelector("form");
const resp = document.querySelector(".respDiv");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);

  if (numero !== Number(frm.inNumero.value)) {

    resp.innerText = `Numero invalido`;
    document.querySelector(".respDiv").style.color = "red";
    return;

  } else if (numero < 0 || numero > 10) {

    resp.innerText = "Somente numeros\n entre 0 e 10";
    document.querySelector(".respDiv").style.color = "red";
    return;

  } else {

    for (let i = 0; i <= 10; i++) {

      const resultado = numero * i;
      document.querySelector(".respDiv").style.color = "blue";
      resp.innerText += `${numero} x ${i} = ${resultado}\n`;
    }
  }
});

const limparResp = () => {
  clear.innerHTML = " ";
};
