/**
 * Destructuring é uma nova funcionalidade adicionada na nova versao do Es2015
 * Serve para tirar a informação de dentro da estrutura
 */

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua A',
        numero: 1000
    }
}

//Sintaxe do Destructuring(Desistruturação)
const { nome, idade } = pessoa
console.log(nome, idade)


//Destructuring passando um nome novo para as variáveis 
const { nome: nomeNovo, idade: idadeNome } = pessoa
console.log(nomeNovo, idadeNome)

//Destruturando com variáveis não existente  na extrutura 
const {sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

//Destruturando da subextrutura 
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

/**
 * para desistruturar um dado pelo menos o caminho ate o dado 
 * tem que esta setado
 */
// const { caminhoEnexitente: { atributo1,  atributo2 }} //erro