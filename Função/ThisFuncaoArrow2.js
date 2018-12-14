let comparaComThis =  function (parametro){
    console.log(this === parametro)
}

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

/**
 * Testando com arrow function 
 */

 console.log()

let comparaComThisArrow = (parametro) => {
    console.log(this === parametro)
}

comparaComThisArrow(global)

comparaComThisArrow(global)
comparaComThisArrow(module.exports) //module.exports 

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)


