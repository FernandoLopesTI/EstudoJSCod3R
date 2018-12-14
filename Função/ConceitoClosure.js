/**
 * Closure  é um escopo criado quando a função é decladada 
 * e esse escopo permite que a função acesse e manipule Variáveis extarnas à função
 * 
 */

 //contexto léxico em ação 

 const x = 'Global'

 function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
     return dentro
 }


 const minhaFuncao = fora()
 console.log(minhaFuncao())
