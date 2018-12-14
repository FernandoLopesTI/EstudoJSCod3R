/**
 * O conseito léxico de uma função,   nada mais é  que a função carrega com sigo mesma 
 * o local onde ela foi declarada 
 * no exemplo abaixo
 * a minhaFincao() loga o valor da variável de nome valor
 * porem a funçao em si nao tem nenhuma variável com esse nome declarada dentro do seu bloco
 * por tanto, ela irá procura em um bloco à cima
 * que é o bloco do documento (module.exports)
 */

const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()