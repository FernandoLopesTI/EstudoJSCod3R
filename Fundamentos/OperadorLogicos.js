/**
 * Operador Lógigos 
 */

 function compras(trabalho1 ,trabalho2){
    const comprarSorvete = trabalho1 || trabalho2  
    const comprarTelevisao50 = trabalho1 && trabalho2
    const comprarTelevisao32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete
    /*
    //uma maneira de repesentar um ou exclusivo
    const comprarTelevisao32 = !!(trabalho1 ^ trabalho2)    // não existe um operador ou exclusivo em javaScript por isso temos que fazer essa expressão chamada bitwise xor
                                                            // negando duas vezes transforma o operacao em boolean
    */

    return { comprarSorvete, comprarTelevisao50, comprarTelevisao32, manterSaudavel} //criação implicita  de um objeto //es2015
/*
    if (comprarSorvete){
        console.log("Ir no shopping!")
        console.log("Comprar Sorverte")
    } else {
        console.log("Ficar em casa ")
    }

    if(comprarTelevisao50){
        console.log("Comprar Televisão de 50 Polegadas")
    } else if (comprarTelevisao32) {
        console.log("Comprar Televisão de 32 Polegadas")
    } else {
        console.log("Não comprar a televisão")
    }

    if(manterSaudavel){
        console.log("Opção saudável")
    }
*/
 }


 console.log(compras(true, false))

 console.log(compras(false, true))

 console.log(compras(true, true))

 console.log(compras(false, false))
