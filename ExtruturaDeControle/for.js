//com while
let contador = 1

while(contador <= 10 ){
    console.log("numero do contado While: " + contador)
    contador++
}

//com for 
for(let i = 1 ; i <= 10; i++){
    console.log("numero do contado For: " + i)
}

const notas = [8.8, 7.2, 7.8, 9.1]

for (let i = 0 ; i < notas.length; i++){
    console.log(`Array valor do index ${i} = ${notas[i]}`)
}