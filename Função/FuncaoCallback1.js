const fabricantes = ["Mercedes", "Audi","BMW"]

function imprimir(nome, indice) {
    console.log(`Indice: ${indice} - Nome: ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(fabricante => console.log(fabricante))

