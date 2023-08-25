//trim(), trimStart(), trimEnd() são usados para remover espaços em branco
function localizarPalavras(){
  const palavra = "palavra";
  let copia1 = console.log(palavra.indexOf("a"));//busca a primeira ocorrencia de a
  let copia2 = console.log(palavra.lastIndexOf("a"));//busca a primeira ocorrencia de a da direita para esquerda
  let copia3 = console.log(palavra.indexOf("vr"));//busca a primeira ocorrencia de vr
  let copia4 = console.log(palavra.indexOf("u"));//-1 não possui u
  let copia5 = console.log(palavra.includes("l"));//verifica se existe o caracter
}
localizarPalavras();