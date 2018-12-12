/**
 * Variáveis do tipo var tem dois escopos possiveis, global ou local
 * quando uma variável do tipo var e declarada fora de uma função ela é tratada no js 
 * como uma variavel global e dentro de uma função e uma variável no escopo logal  
 */
{
    {
        {
            {
                var sera = 'será?'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}
// console.log(local) //nao encherga a variavel local 

