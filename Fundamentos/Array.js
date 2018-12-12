/**
 * Objeto Array
 * é um objeto Heterogênea, ou seja, aceita varias tipagem de dados 
 */
console.log(typeof Array);


const valores = [7.7, 8.9, 6.3, 9.2];


console.log(valores[0], valores[3]);
console.log(valores[4]);


valores[4] =  10;
console.log(valores);

valores[6] =  10;

console.log(valores);

/**
 * Função length retorna o tamanho do array
 */

console.log(valores.length);


/**
 * Extrutura Heterogênea 
 */
valores.push({id: 3}, false, null, 'teste');


console.log(valores);

/**
 * Retorna o último elemento do array 
 */
console.log(valores.pop());

/**
 * Deleta o valor do array 
 */
delete valores[0];
console.log(valores);


