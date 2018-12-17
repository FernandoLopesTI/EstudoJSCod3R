
//criando uma Função forEach dentro  da Função Array
Array.prototype.forEach2 = function(callback) { //Adicionar no Array um Método forEach2 recebendo uma fução que rebece uma função callback
    for (let i = 0; i < this.length; i++) { //Laço for 
        callback(this[i], i, this) // callback recevendo os parâmetros 
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

//forEach ofícial 
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})