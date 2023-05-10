const entrada = 20;
let pessoas = Number(prompt('numero de pessoas?'));
const peixes = Number(prompt('numero de peixes?'));;
let pagar;

if(pessoas <= peixes){
   pagar = pessoas * entrada
}else{
   pagar = (pessoas * entrada) + ((peixes - pessoas) * 12);
}
console.log(`Pagar R$: ${pagar.toFixed(2)}`);