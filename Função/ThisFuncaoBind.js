/**
 *  This  e a função bind
 * //bind é o metodo responsabel para amarrar a função do objeto com o objeto 
 */

 const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)
    }
 }

 pessoa.falar()
//sem o bind
const falar = pessoa.falar
console.log(falar)
falar()


//com o bind
const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()