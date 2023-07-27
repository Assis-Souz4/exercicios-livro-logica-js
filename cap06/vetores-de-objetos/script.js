{
const carros = [];
carros.push({modelo: 'logan', preco: 50.000,});
carros.push({modelo: 'Uno', preco: 30.000,});
for(carro of carros){
    console.log(carro.modelo);
    console.log(carro.preco);
}
}

//se o nome da variavel for igual ao nome do atributo pode imitir a atribuição
const carros = [];
const modelo = 'argo';
const preco = 60.000;

carros.push({modelo, preco});
console.log(carros);//[ { modelo: 'argo', preco: 60 } ]