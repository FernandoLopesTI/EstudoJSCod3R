function soBoaNoticia(nota){
    if(nota >= 7){
        console.log("Aprovado!!" + nota);
    }
}

soBoaNoticia(7.1);
soBoaNoticia(6.1);

function retornaVerdade(valor){
    if(valor){
        console.log('É Verdade...' + valor)
    }
}

retornaVerdade()
retornaVerdade(null)
retornaVerdade(undefined)
retornaVerdade(NaN)
retornaVerdade('')
retornaVerdade(0)
retornaVerdade(-1)
retornaVerdade(' ')
retornaVerdade('?')
retornaVerdade([])
retornaVerdade([1,2])
retornaVerdade({})
retornaVerdade({nome: "Fernando"})