/**
 * Operadores Ternários
 * é composto por 3 operandos 
 * no exemplo tenho o primeiro operando " nota >= 7" segundo operando " ? 'Aprovado' " e o ultimo " : 'Reprovado' "
 */

 //função arrow que recebe nota  compara se nota >= 7 foi aprovado ou repovado
 const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

 console.log(resultado(7.1))
 console.log(resultado(6.1))