//substr() copia caracteres da string e possui dois parametros o inicial: posição inicial e o numero de caracteres a serem copiados

function copiar() {
  const palavra = "palavra";
  let copia1 = console.log(palavra.substring(2))
  let copia2 = console.log(palavra.substring(2, 6))
  let copia3 = console.log(palavra.substring(0, palavra.length -1))
  let copia4 = console.log(palavra.substring(-2))
}
copiar()