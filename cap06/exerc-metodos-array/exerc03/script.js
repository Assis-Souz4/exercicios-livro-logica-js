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
  msgTemp();
});

form.btnListar.addEventListener("click", () => {
  const verificaArr = clubes;

  if (verificaArr.length === 0) {
    form.reset();
    form.inClube.focus();
    msgTemp();
    return (msg.innerText = `Lista de Clubes vazia, Add Clubes!!`);
  }

  let lista = "";

  for (const clube of verificaArr) {
    lista += clube + "\n";
  }

  resp.innerText = lista;
});

form.btnMostrar.addEventListener("click", (e) => {
  const mostraArr = clubes.length;

  if (mostraArr == 0 || mostraArr % 2 == 1) {
    form.reset();
    form.inClube.focus();
    msgTemp();
    return (msg.innerText = `Clubes insuficiente, deve haver número par de clubes!!`);
  }

  let jogos = "";

  const ultimo = mostraArr - 1;

  for (i = 0; i < mostraArr / 2; i++) {
    jogos += clubes[i] + " x " + clubes[ultimo - i] + "\n";
  }
  resp.innerText = jogos;
});
