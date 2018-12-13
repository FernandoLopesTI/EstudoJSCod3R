/**
 * Função em JS é First-Class Object (Citizens)
 * Higher-Order Function
 */

 //criar de forma literal
 function fun1(){ }

 //Armazenar uma variável

 const fun2 = function() { }

 // Armazenar em um array
 const array = [ function (a, b){return a + b}, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'olá'}
console.log(obj.falar())

//Passar uma função como Parametro
function run(funcao){
    funcao()
}

run(function(){
    console.log("executando")
})

//uma funcao pode retornar/conter uma funcao
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const funcaoRetornada =  soma(2,3)
funcaoRetornada(4)