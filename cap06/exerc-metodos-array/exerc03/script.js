const form = document.querySelector("form");
const msg = document.querySelector("span");
const resp = document.querySelector("p");
const clubes = [];

function letraMaiuscula(letra) {
  return letra.charAt(0).toUpperCase() + letra.slice(1);
}
function msgTemp() {
  setTimeout(() => {
    return (msg.innerText = " ");
  }, 1500);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = letraMaiuscula(form.inClube.value);
  clubes.push([nome]);

  msg.innerText = `Clube cadastrado com sucesso!!`;

  form.reset();
  form.inClube.focus();
  msgTemp()

  console.log(nome, clubes);
});

form.btnListar.addEventListener("click", () => {});
