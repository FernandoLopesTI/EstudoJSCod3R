/**
 * Em muitas linguagem dividir numeros por zero 
 * daria erro, em javaScript retorna um valor infinito 
 */

console.log(7 / 0 ); //retorna um Infinity

/**
* por ser  fracamente tipado o js intende operações do tipo string com number com exeção da adição, pq a string tem prefereça,
* porem so da certo quando o valor na string ser um numero valido Exemplo: interiro "10" ou Flutuante "10.3"
* caso contrario retornará um "not a number"
*/
console.log("10" / 2);  
console.log("Show!" * 2); //gera um NAN

console.log("10" + 2); 
console.log("10" - 2); 
console.log("10" * 2); 



/** 
* Por questões performáticas varia liguagem aderem a especificaçao IEEE 
* que nao retorna precisamente o valor com ponto flutuante 
*/
console.log(0.1 + 0.7); //impressisão 


/**
 * A função Number nao tem efeito na forma literal do número 
 * como por exemplo:
 * console.log(10.432.toFixed(2)); 
 * Tem que ser feita com o numero literal entre parentese 
 */
 console.log((10.432).toFixed(2))