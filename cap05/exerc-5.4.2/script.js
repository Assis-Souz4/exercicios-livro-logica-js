//criando e add o titulo
const container = document.querySelector(".container");
const titulo = document.createElement("h3");
container.appendChild(titulo);
const textoTitutlo = document.createTextNode("Digite zero '0' para sair!");
titulo.appendChild(textoTitutlo);
//selecionando o form
const form = document.querySelector("form");
//add o titulo antes do form
container.insertBefore(titulo, form);
//
const resp = document.querySelector(".resp");
//
document.querySelector('.resp').style.color = 'red';
document.querySelector('.resp').style.fontSize = '18px';
document.querySelector('.resp').style.padding = '5px 0px';
document.querySelector('.resp').style.textTransform = 'uppercase';
document.querySelector('h3').style.color = 'blue';
document.querySelector('h3').style.textTransform = 'uppercase';

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(form.inNumero.value);

  do {
    const num = numero;
    if (num === 0) {
      const sair = confirm("Deseja sair?");
      if (sair) {
        break;
      } else {
        continue;
      }
    }
    if (num % 2 === 0) {
      resp.innerText = `O dobro de ${num} = ${num * 2}`;
    } else {
      resp.innerText = `O triplo de ${num} = ${num * 3}`;
    }
  } while (num !== false);{
    resp.innerText = `Bye Bye`;
  }
});
const limparResp = () => {
  clear.innerHTML = "";
};