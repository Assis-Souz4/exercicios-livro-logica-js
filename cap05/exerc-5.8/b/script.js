let valorConta = 253;
let valorMensal = Number(prompt("Valor do deposito mensal R$"));
let qtdMeses = Number(prompt("Quantidade de meses"));
let saldoMes = 0;

const div = document.createElement("div");
const body = document.body;
body.appendChild(div);

//saldo atual
const saldoAtual = document.createElement("h2");
const valorSaldoAtual = document.createTextNode(
  `Saldo: R$ ${valorConta.toFixed(2)}`
);
saldoAtual.appendChild(valorSaldoAtual);
div.appendChild(saldoAtual);

//deposito por mes
const depositoMensal = document.createElement("h3");
const valorDepositoMensal = document.createTextNode(
  `Deposito Mensal R$ ${valorMensal.toFixed(2)}`
);
depositoMensal.appendChild(valorDepositoMensal);
div.appendChild(depositoMensal);

//quantidade de parcelas
const parcelas = document.createElement("span");
const qtdParcelas = document.createTextNode(`Parcela: ${qtdMeses}x`);
parcelas.appendChild(qtdParcelas);
depositoMensal.appendChild(parcelas);
div.insertBefore(parcelas, depositoMensal);

for (let i = 1; i <= qtdMeses; i++) {
  saldoMes += Number(valorMensal);

  depositoMensal.innerText += `\n${i}º Mês - ${saldoMes}`;
}
console.log(`${saldoMes + valorConta}`);

//saldo futuro
const saldoFuturo = document.createElement("h4");
const vlrSaldoFuturo = document.createTextNode(
  `Saldo Futuro: R$ ${Number(saldoMes + valorConta).toFixed(2)}`);
saldoFuturo.appendChild(vlrSaldoFuturo);
div.appendChild(saldoFuturo);
