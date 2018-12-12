/**
 * Let tem um escopo mais abrangente, diferentemente do var o let tem um escopo de bloco 
 */

//comparativo
var numero = 1
{
    let numero = 2
    console.log('dentro ', numero)
}
console.log('Fora ', numero)