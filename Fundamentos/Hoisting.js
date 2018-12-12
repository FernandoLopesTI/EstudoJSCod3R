/**
 * Hoisting é o içamento  das variáveis ou função 
 * na maioria das outra linguagem os códigos são execultados de cima para baixo, 
 * no js não acontece bem assim, 
 * como exemplo as variáveis  do  tipo var sao como padrao ser uma variável global 
 *  o js automáticamente içará a variável
 */

 console.log('a = ', a);

 var a = 12;

 console.log('a = ', a);