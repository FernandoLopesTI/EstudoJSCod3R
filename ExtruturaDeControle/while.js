function getInteitoAleatorioEntre(min, max){
    const valor = Math.random() * (min - max) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteitoAleatorioEntre(-1 , 10)
    console.log(opcao)
}

console.log('Até a próxima!')