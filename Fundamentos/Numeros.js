/*
* Trabalhando com função Number
*/

console.log(typeof Number);

const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log("Exemplos do metodo isInteger:");
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media =  total / (peso1 + peso2);


console.log(media);
console.log(typeof media);
console.log("Exemplos do metodo toFixed:");
console.log(media.toFixed(2)) //Fixa o ponto flutuantes para as casas passadas como paramentros 
console.log(media.toFixed(4))

console.log("Exemplos do metodo toString:");
console.log(media.toString()); //Faz um parce para string
console.log(media.toString(2)); //Faz um parce para string e converte para binário
console.log(media.toString(16)); //Faz um parce para String e converte para hexadecimal
console.log(media.toString(8)); //Faz um parce para String e converte para octadecimal
