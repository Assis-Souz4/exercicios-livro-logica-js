// {
//     const letraMaiuscula = prompt('palavra').toUpperCase();
//     console.log(letraMaiuscula);
// }
// {
//     const letraMinuscula = prompt('palavra').toLowerCase();
//     console.log(letraMinuscula);
// }

//trecho de codigo pergunta se o usuario deseja sair ou continuar
//o uso do metodo toUpperCase permite a validação da resposta idependente do tamanho da letra
function desejaContinuar() {
  while (true) {
    const continua = prompt("Continua...(S/N");
    if (continua.toUpperCase() == "N") {
      console.log("saiu");
      break;
    }
    console.log("continua");
    break;
  }
}
//desejaContinuar();

//programa inverte palvra
function invertePalvra() {
  const palavra = prompt("Palavra");
  const tam = palavra.length;

  //inverte e inicia com a ultima letra em caixa alta
  let inverso = palavra.charAt(tam - 1).toUpperCase();

  //for decrescente para percorrer as demais letras
  for (let i = tam - 2; i >= 0; i--) {
    inverso += palavra.charAt(i).toLowerCase(); //converte em caixa baixa
  }
  //exibe palvra invertida
  console.log(`Palavra: ${palavra}\nInvertida: ${inverso}`);
}
//invertePalvra();
