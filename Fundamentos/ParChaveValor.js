//Par nome / Valor

/**
 * contexto léxico, ou seja, onde seu para nome valor foi escrito no código
 * no caso do exemplo nome: saudacao e o valor: "olá"  estao no contexto léxico na linha 7 do nosso Arquivo 
 */
const saudacao = "Olá" //contexto léxico 1

function exec(){
    const saudacao =  "Falaaa" //contexto léxico 2, diferente do contexto1 por isso nao vai da conflito 
    return saudacao
}

//Objetos são grupos alinhados de pares nome / valor

const cliente = {
    nome: 'Fernando',
    idade: 30,
    peso: 104,
    endereco: {
        nome: 'Rua Gerbera',
        numero: 391
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(saudacao + " " + cliente.nome)