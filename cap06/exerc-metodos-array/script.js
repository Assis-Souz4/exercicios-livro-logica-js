const form = document.querySelector("form");
const resp = document.querySelector("pre");
const carros = [];

function precoValido(preco) {
  if (isNaN(preco)) {
    alert("Digite um preço valido!!");
    form.inModelo.value = "";
    form.inPreco.value = "";
    inModelo.focus();
    return;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const modelo = form.inModelo.value;
  const preco = Number(form.inPreco.value);

  precoValido(preco);

  carros.push({ modelo, preco });
});

//botão listar todos
form.btnListar.addEventListener("click", () => {
  let listar;

  if (carros.length == 0) {
    alert("Lista de Carros vazia!!");
    inModelo.focus();
    return;
  }

  carrosListar = carros.reduce(
    (acc, carro) =>
      acc + carro.modelo + " - R$" + carro.preco.toFixed(2) + "\n",
    ""
  );

  resp.innerText = `Lista dos Carros Disponiveis:\n ${"-".repeat(
    44
  )}\n${carrosListar}\n`;

  inModelo.focus();
});

//botão filtrar preço
form.btnFiltrar.addEventListener("click", () => {
  const maximoPreco = Number(prompt("Valor máximo que deseja pagar?"));

  if (maximoPreco == 0 || isNaN(maximoPreco)) {
    alert("Atenção !! Preço igual a zero ou caracter invalido.");
    inPreco.focus();
    return;
  }

  const carrosFilter = carros.filter((carro) => carro.preco <= maximoPreco);

  if (carrosFilter.length == 0) {
    alert(`Não há carros com valor inferior ou igual ao informado!!`);
    inPreco.focus();
    return;
  }

  let listaFilter;

  listaFilter = carrosFilter.reduce(
    (acc, carro) =>
      acc + carro.modelo + " - R$" + carro.preco.toFixed(2) + "\n",
    ""
  );

  resp.innerText = `Lista dos Carros até: R$${maximoPreco.toFixed(
    2
  )}\n ${"-".repeat(44)}\n${listaFilter}\n`;
});

//botão simular Promoção
form.btnPromo.addEventListener("click", () => {
  const desconto = Number(prompt("Percentual do Desconto(%):"));

  if (desconto == 0 || isNaN(desconto)) {
    alert("Valor do Desconto Invalido!!");
    inModelo.focus();
    return;
  }

  inModelo.focus();

  const descontoCarro = carros.map((aux) => ({
    modelo: aux.modelo,
    preco: aux.preco - (aux.preco * desconto) / 100
  }));

  let listaPromo;

  listaPromo = descontoCarro.reduce(
    (acc, carro) =>
      acc + carro.modelo + " - R$" + carro.preco.toFixed(2) + "\n",
    ""
  );

  resp.innerText = `Desconto: ${desconto}% - ${listaPromo}`;
});
