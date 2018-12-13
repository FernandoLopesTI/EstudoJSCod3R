/**
 * For/in
 */
const notas = [8.8, 7.2, 7.8, 9.1]

for (let i in notas){
    console.log(`Array valor do index ${i} = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'silva',
    idade: 29,
    peso: 64
}
 
for(let Atributo in pessoa){
    console.log(`${Atributo} = ${pessoa[Atributo]}`)
}