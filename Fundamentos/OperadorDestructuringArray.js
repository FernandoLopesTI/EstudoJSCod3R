
//Sintaxe de Destructuring de arrays
const [a] = [10]
console.log(a);

//const [a] <-(operador de desestruturação)  = [10] <-(array)

//podemos desistruturar varios atributos do array
const [n1,,n3,,n5,n6 = 1] = [10,7,9,8]
console.log(n1,n3,n5,n6)


//array alinhado 

const [ , [ , nota]] = [[,8,8],[9,6,8]]

console.log(nota)