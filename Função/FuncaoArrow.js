let dobro = function(a) {
    return 2 * a
}

//sobrescrever 
dobro = (a) => {
  return 2 * a
}

dobro = (a) => 2 * a //Com retorno implicito, mas somente para funcao com uma unica sentença de codigo 

console.log(dobro(Math.PI))

//exemplo 2

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'

ola = _ => 'Olá' //possui um prametro 

console.log(ola())


