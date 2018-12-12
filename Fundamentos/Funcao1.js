//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

//exemplos
imprimirSoma(2, 3);
imprimirSoma(2); //NaN
imprimirSoma(2, 10 , 2, 3);
imprimirSoma();

//função com retorno

function soma(a, b = 1){
    return a + b;
}

console.log(soma(2,3));
console.log(soma(2));
console.log(soma());

