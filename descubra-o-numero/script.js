const form = document.querySelector("form");
const respError = document.querySelector(".erro");
const respChance = document.querySelector(".chances");
const respDica = document.querySelector(".dicas");

const errosArray = [];
const sorteio = Math.floor(Math.random() * 10) + 1;
console.log(sorteio);
const chances = 3;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = Number(form.inNum.value);
  form.btnNovo.disabled = true;

  if (numero == sorteio) {
    respDica.style.color = 'green';
    respDica.innerText = `Parabéns Acertou!! Número Sorteado: ${sorteio}`;
    form.btnSubmit.disabled = true;
    form.btnNovo.disabled = false;

    form.addEventListener("click", (e) => {
      e.preventDefault();
      function recarregarAPagina() {
        window.location.reload();
      }
      recarregarAPagina();
    });
  } else {
    if (errosArray.includes(numero)) {
      alert(`O Número: ${numero} já foi apostado tente outro!!`);
    } else {
      errosArray.push(numero);
      const numeroErros = errosArray.length;
      const numChances = chances - numeroErros;

      respError.style.color = 'purple';
      respError.innerText = `Apostas Feitas: ${errosArray.join(", ")}`;
      respChance.style.color = 'red';
      respChance.innerText = `Chances Restantes: ${numChances}`;

      if (numChances == 0) {
        alert("Acabou suas Chances...");
        form.btnSubmit.disabled = true;
        form.btnNovo.disabled = false;
        respDica.style.color = "red";
        respDica.innerText = `Game Over!! O Número é ${sorteio}`;

        form.addEventListener("click", (e) => {
          e.preventDefault();
          function recarregarAPagina() {
            window.location.reload();
          }
          recarregarAPagina();
        });
      } else {
        const dica = numero < sorteio ? "Maior" : "Menor";
        respDica.style.color = "orange";
        respDica.innerText = `Dica: Tente um Número ${dica} que ${numero}`;
      }
    }
  }
  form.inNum.value = "";
  form.inNum.focus();
});
