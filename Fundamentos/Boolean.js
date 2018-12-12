let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

/**
 * Para ver se o dado e verdadeiro ou falso 
 * basta negar ele por duas vezes 
 */
isAtivo = 1;
console.log(!!isAtivo);

/**
 * Exemplo que JavaScript encherga como verdadeiro 
 */

console.log("Os Verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!' '); 
console.log(!![]); //array
console.log(!!{}); // objeto
console.log(!!Infinity);
console.log(!!(isAtivo = true));
console.log(!!(''|| null || 1 || ' '));


/**
 * Exemplo que JavaScript encherga como Falso 
 */

console.log("Os falsos..");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
console.log(!!(''|| null || 0 || ''));


/**
 * Brincando com operador ou
 */
let nome = "";
console.log(nome || 'Desconhecido');
nome = "Fernando";
console.log(nome || 'Desconhecido');
