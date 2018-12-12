let valor 
console.log(valor);

valor = null;

console.log(valor);

// console.log(valor.toString()); //erro

const produto = {};

console.log(produto.preco);
console.log(produto);

produto.preco = undefined // evite atribuir 

console.log(!!produto.preco);

console.log(produto);
produto.preco = null
console.log(!!produto.preco);
console.log(produto);