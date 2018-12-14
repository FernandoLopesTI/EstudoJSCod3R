function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}


const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())


/**
 * Exemplo com call e apply
 */

const carro = {
    preco: 49990,
    desc: 0.2
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))


/**
 * o call assim como o apply insere o função dentro do obj 
 * a diferença entro os dois é na hora de passar parâmetros 
 * que na função apply tem que passar os parâmetros como array []
 */
