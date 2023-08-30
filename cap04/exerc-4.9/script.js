function inverteNumero() {
  const frm = document.querySelector("form");
  const respH3 = document.querySelector(".respH3");
  const apagar = document.querySelector(".respH3");

  const mostrarNumero = [];

  frm.addEventListener("submit", (e) => {
    e.preventDefault();

    // const numero = frm.document.querySelector('#inNumero');
    const numero = Number(frm.inNumero.value);

    if (numero >= 100 && numero <= 999) {
      //exemplo usando o numero 120
      const num1 = Math.floor(numero / 100); //1*

      const sobraNum1 = numero % 100; //20

      const num2 = Math.floor(sobraNum1 / 10); //2*

      const num3 = sobraNum1 % 10; //0*

      //guradando no array
      mostrarNumero.push({
        unidade: num3,
        dezena: num2,
        centena: num1,
      });
      console.log(mostrarNumero);

      respH3.innerHTML = ` `;
      respH3.innerHTML += `${num3} ${num2} ${num1}`;

    }else{
      respH3.innerHTML = `<span>Erro !!! Apenas numeros entre <br> 100 e 999</span>`;
    }
  });
}
inverteNumero();
