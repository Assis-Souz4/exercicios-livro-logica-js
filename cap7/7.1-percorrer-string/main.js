{
    const cidade = 'fortaleza';
    console.log(cidade.charAt(3));//3
}

{
    //contando o numero de PALAVRAS
    const frase = prompt('Frase');
    let numFrase = 0;
    const tam = frase.length;

    for(let i = 0; i < tam; i++) {
        if(frase.charAt(i) == ' '){
            numFrase ++;            
        }        
    }

    console.log(frase, numFrase + 1);
}
{
    const frase = prompt('Frase2');
    let numFrase = 0;
    const tam = frase.length;

    for(const palavra of frase){
        if(palavra == ' '){
            numFrase ++;
            console.log(numFrase);
        }
    }
}