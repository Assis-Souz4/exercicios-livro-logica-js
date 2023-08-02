//metodo map() -é semelhando ao for e foreach no setindo de percorrer cada elemento do vetor cria um novo vetor e pode ser usado tambem em objetos

//https://www.freecodecamp.org/portuguese/news/map-em-javascript-como-usar-a-funcao-map-do-js-metodo-de-arrays/

let arr = [2, 3, 5, 7];

arr.map(function (elemento, índice, array) {
  console.log(elemento);
  console.log(índice);
  console.log(array);
  console.log(this);
  return elemento;
}, "oi");

{
  const numeros = [10, 15, 20, 25, 30];
  const dobros = numeros.map((num) => num * 2);
  console.log(dobros.join(", "));
}

console.log("*".repeat(50));

{
  const amigos = [
    { nome: "anna", idade: 25 },
    { nome: "pedro", idade: 30 },
    { nome: "luiz", idade: 28 }
  ];
  const amigos2 = amigos.map((aux) => ({
    nome: aux.nome,
    nasc: 2022 - aux.idade
  }));
  //[{ nome: 'anna', nasc: 1997 },{ nome: 'pedro', nasc: 1992 },{ nome: 'luiz', nasc: 1994 }]

  console.log(amigos2[0].nome); //anna
  console.log(amigos2[0].nasc); //1997
}

console.log("#".repeat(50));

{
  const pessoa = [
    { nome: "annabel", idade: 20 },
    { nome: "joel", idade: 50 }
  ];

  
}
