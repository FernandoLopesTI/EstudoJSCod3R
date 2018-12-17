const nums = [1, 2, 3, 4, 5]

// Map gera um novo  array podendo alterar seu conteudo 
// Em resulmo um map é um For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)

let resultado2 = nums.map(function(e) {
    return e + 5
})
console.log(resultado2)

//Importante: os Metodos callback passado para um map tem que ter um retorno
const soma10 = e => e + 10 //callback 1
const triplo = e => e * 3  // callback 2
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` //callback3


//função maps alinhados
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)