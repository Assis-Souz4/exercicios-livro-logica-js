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
  console.log(`${a}, ${e}, ${i}, ${o},${u}`); //1, 2, 3, 4,undefined
}

{
  //operador rest
  const numeros = [1, 2, 3, 4, 5];
  const [um, dois, ...resto] = numeros;
  console.log(`${um}`);
  console.log(`${dois}`);
  console.log(`${resto}`);
}

{
    const pessoas = {nome: 'luiz', idade: 25};77
    const pessoas2 = {...pessoas, endereco: 'rua 10, casa 105'};
    console.log(pessoas2);//{ nome: 'luiz', idade: 25, endereco: 'rua 10, casa 105' }
}

{
    let pacientes = ['anna', 'juan'];
    pacientes = ['bruno', ...pacientes];
    pacientes = [...pacientes, 'robert'];
    console.log(pacientes);

    const pacientes2 = [...pacientes];
    console.log(pacientes);

    const pacientes3 = pacientes.slice();
    console.log(pacientes3);
}