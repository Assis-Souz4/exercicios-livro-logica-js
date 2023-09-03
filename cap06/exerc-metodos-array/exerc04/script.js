const form = document.querySelector("form");
const resp = document.querySelector("p");
const aviso = document.querySelector("span");
const candidadtos = [];

function letraMaiuscula(letra) {
  return letra.charAt(0).toUpperCase() + letra.slice(1);
}

function msgTemp() {
  setTimeout(function () {
    aviso.innerText = "";
  }, 2000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = letraMaiuscula(form.inNome.value);
  const acertos = Number(form.inAcertos.value);

  candidadtos.push({ nome, acertos });

  aviso.innerText = `Candidato cadastrado!!`;
  aviso.style.color = "blue";
  msgTemp();

  form.reset();
  form.inNome.focus();

  console.log(nome, acertos, candidadtos);
});
