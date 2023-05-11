const frm = document.querySelector("form");
const respH3 = document.querySelector("h3");
const respH4 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const ladoA = Number(frm.inLadoA.value);
  const ladoB = Number(frm.inLadoB.value);
  const ladoC = Number(frm.inLadoC.value);

  if (
    ladoA < ladoB + ladoC &&
    ladoA < ladoC + ladoB &&
    ladoB < ladoA + ladoC &&
    ladoB < ladoC + ladoA &&
    ladoC < ladoA + ladoB &&
    ladoC < ladoB + ladoA
  ) {
    if (
      (ladoA == ladoB && ladoA == ladoC) ||
      (ladoB == ladoA && ladoB == ladoC) ||
      (ladoC == ladoA && ladoC == ladoB)
    ) {

      respH4.innerText = `Tipo: Equilatero`;
      respH3.innerText = ` `;

    } else if (
      (ladoA == ladoB && ladoA != ladoC) ||
      (ladoB == ladoA && ladoB != ladoC) ||
      (ladoC == ladoA && ladoC != ladoB)
    ) {

      respH4.innerText = `Tipo Isoceles`;
      respH3.innerText = ` `;

    } else if (
      (ladoA != ladoB && ladoA != ladoC) ||
      (ladoB != ladoA && ladoB != ladoC) ||
      (ladoC != ladoA && ladoC != ladoB)
    ) {

      respH4.innerText = `Tipo Escaleno`;
      respH3.innerText = ` `;

    }
  } else {

    respH4.innerText = ` `;
    respH3.innerText = `Não é um triangulo`;

  }
});
