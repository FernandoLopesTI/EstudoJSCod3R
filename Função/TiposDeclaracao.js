//function declaration 
console.log(soma(3,4)); //nesse tipo declaração podemos chamar a funcao antes da  declaraçao pq o js carrega ela antes de execultar o código 
function soma (x,y){
    return x + y
}

// function expression
const sub = function (x, y ) {
    return x - y 
}
console.log(sub(3,4));

//named function expression
const mult = function mult(x,y){
    return x * y
}
console.log(mult(3,4));