/**
 * Variável do tipo var cria uma variável global, que gera um problema o problema que quando declaramos uma outra variável com o mesmo nome dentro de 
 * um bloco que código, excluindo função, ele sobrescreve a primeira variável 
 */

var numero = 1
{
    var numero = 2
    console.log('Dentro = ', numero)
}
console.log('fora = ', numero)