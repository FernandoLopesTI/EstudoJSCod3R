/**
 * Função String
 * trabalhando com essa função 
 */
console.log(typeof String);

//Declaração 
const escola =  "Cod3r";


/**
 * Função que retorna o caractere do índice incadado no parametro 
 */
console.log(escola.charAt(4));
console.log(escola.charAt(5));

/**
 * Função que retorna o unicode da tabela asc
 * do caractere indicado pelo o índece passado como parametro 
 */
console.log(escola.charCodeAt(3));

/**
 * Função que procura que e retorna o indice 
 */
console.log(escola.indexOf("3"));

/**
 * Função que retorna o resto da string apartir do índice passado 
 * por parametro 
 */
 console.log(escola.substring(2));
 console.log(escola.substring(0, 3)); // começa do índice 0 e retorna 3 caracteres alem disso

/**
 * Função que Concatena,
 * Diferentemente da função Number podemos chamar as função  de um literal
 */
console.log('Escola '.concat(escola).concat("!"));
console.log('Escola ' + escola + "!");

/**
 * Função que substitue o caracter
 */
console.log(escola.replace(3, "e"));

/**
 * Função array
 */
console.log("Ana,Maria,Pedro".split(","));