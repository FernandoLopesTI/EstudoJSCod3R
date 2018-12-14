//Factory com parâmetros 

function construirProdutos(nome, preco){
    return {
        nome: nome,
        preco: preco,
        desconto: 0.10
    }
}

console.log(construirProdutos("NoteBook", 1500.00))
console.log(construirProdutos("Mouse", 45.00))

//exemplo do professor 

function construirProdutosProfessor(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.10
    }
}

console.log(construirProdutos("NoteBook2", 1500.00))
console.log(construirProdutos("Mouse2", 45.00))
