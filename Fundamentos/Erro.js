/*function imprimirNomeUpperCase(obj){
    console.log(obj.name.toUpperCase() + '!!!!!')
}
*/
function tratarErroeLancar(erro){
    //throw new Error("....")
    // throw 10
    // throw true
    // throw "Mensagem"

    throw {
        nome: erro.name,
        msg: erro.message,
        data: new Date()

    }

}

function imprimirNomeUpperCase(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!!!')
    } catch (e) {
        tratarErroeLancar(e)
    } finally {
        console.log("Final")
    }
}

const obj = { nome:  'Roberto'}
imprimirNomeUpperCase(obj)