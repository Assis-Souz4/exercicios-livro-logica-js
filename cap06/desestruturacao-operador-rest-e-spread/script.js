//desestruturação de arrays e objetos
{
  const pacientes = ["anna", "luigi", "robert"];
  const [a, b, c] = pacientes;
  console.log(`${a}, ${b}, ${c}`); //anna, luigi, robert
}

{
  const veiculos = { modelo: "uno", valor: 55.0 };
  const { modelo, valor } = veiculos;
  console.log(`${veiculos.modelo}, ${veiculos.valor}`);
}

{
  const numeros = [1, 2, 3, 4];
  const [a, e, i, o, u] = numeros;
  console.log(`${a}, ${e}, ${i}, ${o},${u}`); //1, 2, 3, 4,undefinedr
}

{
  //operador rest
  const numeros = [1, 2, 3, 4, 5];
  const [um, dois, ...resto] = numeros;
  console.log(`${um}`);
  console.log(`${dois}`);
  console.log(`${resto}`);
}
