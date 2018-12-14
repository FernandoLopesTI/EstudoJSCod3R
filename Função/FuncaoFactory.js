/**
 * Factory é uma função que retorna um objeto
 * ou seja  uma "fábrica" de objeto
 */

//Factory simples

function criarPessoa(){
    return{
        nome: 'Fernando',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
console.log(criarPessoa())