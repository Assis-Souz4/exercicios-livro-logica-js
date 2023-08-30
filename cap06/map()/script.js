//O que map() faz: percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento com parâmetros. Para cada chamada de retorno, o valor devolvido se torna o elemento do novo array. Depois que todos os elementos foram percorridos, map() retorna o novo array com todos os elementos “traduzidos”.

//Ex: Fahrenheit para Celsius

const fahrenheit = [10, 32, 64, 20, 80];

const celsius = fahrenheit.map(function (elem) {
    return Math.round( ( elem - 32 ) * 5 / 9 );
});

console.log(celsius);

console.log('='.repeat(56));

//Ex: Dobra numero

const numeros  = [10, 20, 30, 40, 50, 60];

const dobrarNumeros = numeros.map(function (num) {
    return num * 2;
});
console.log(dobrarNumeros);

console.log('='.repeat(56));

//Ex: Função como parametro

const numerosRaiz = [9, 135, 18, 25, 50, 100];

function raizQuadrada (numRaiz) {
    return Math.sqrt(Math.ceil(numRaiz));
}

const resultadoRaiz = numerosRaiz.map(raizQuadrada)

console.log(resultadoRaiz);