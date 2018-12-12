const nome = "Fernando";
const concatenacao = "Ola " + nome + "!";

/**
 * Template String
 */

 const template = `
    Ola
    ${nome}!`;

console.log(concatenacao, template);

/**
 * expressões matemática 
 */

console.log(`1 + 1 = ${1 + 1}`);

/**
 * Chamando Função dentro do template string
 */

 //função arrow
 const up = texto => texto.toUpperCase();
 
 console.log(`Ei... ${up("Cuidado")}`);