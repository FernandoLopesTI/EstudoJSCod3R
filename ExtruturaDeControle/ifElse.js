function soBoaNoticia(nota){
    if(nota >= 7){
        console.log("Aprovado!!" + nota)
    } else {
        console.log("Reprovado!!" + nota)
    }
}

soBoaNoticia(7.1);
soBoaNoticia(6.1);

soBoaNoticia('Epa');

function soBoaNoticiaTratada(nota){
    if(typeof nota == typeof 0){
        if(nota >= 7){
            console.log("Aprovado!!" + nota)
        } else {
            console.log("Reprovado!!" + nota)
        }
    }
}
soBoaNoticiaTratada('Epa')
soBoaNoticiaTratada(7.1)
soBoaNoticiaTratada(6.1)
