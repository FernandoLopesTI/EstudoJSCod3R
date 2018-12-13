/**
 * Operador de igualdade
 */
console.log('01)', '1' == 1) //true Porque no js o operador == compara os valores 
console.log('02)', '1' === 1) //false porque no js o operador === compara os valores e o tipo 

/**
 * Operador de diferenciação
 */
console.log('03)', '3' != 3) 
console.log('04)', '3' !== 3)

/**
 * Operador Menor
 */

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

/**
 * Comparação entre datas 
 */
const data1 = new Date(0); //o 0 representa a data de referência inicial do js "01/01/1970"
const data2 = new Date(0);

console.log('09)', data1 === data2) //false porque no caso estamos usando uma Variável de referência 
console.log('10)', data1 == data2)  //false porque compara as referência de memória

console.log('11)', data1.getTime() === data2.getTime())
console.log('12)', data1.getTime() == data2.getTime())

console.log('13)', undefined == null)
console.log('14)', undefined === null)
