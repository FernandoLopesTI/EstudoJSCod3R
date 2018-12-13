//estrategia 1 para gerar valor padrão
function estrategiaComOr(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(estrategiaComOr(), estrategiaComOr(3), estrategiaComOr(1,2,3),estrategiaComOr(0,0,0))

//estrategia 2, 3 e 4 para gerar valor padrão
function estrategia2(a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(estrategia2(), estrategia2(3), estrategia2(1,2,3),estrategia2(0,0,0))

//restrategia 4 valor padrão do es2015
function estrategiaES2015(a = 1,b = 1,c = 1){
    return a + b + c
}

console.log(estrategiaES2015(), estrategiaES2015(3), estrategiaES2015(1,2,3),estrategiaES2015(0,0,0))

