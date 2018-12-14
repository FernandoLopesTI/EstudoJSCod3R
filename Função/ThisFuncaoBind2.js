function Pessoa() {
    this.idade = 0 

    //setInterval dispara uma função depois de um determinado tempo 
    setInterval(function (){
        this.idade++
        console.log("sem o bind: idade: "+this.idade)
    },1000)
}

new Pessoa 

/**
 * no exemplo acima o this irá variar  e nao apontarar para o objeto pessoa 
 * para resolver so adicionando uma função Bind
 */

function Pessoa2() {
    this.idade = 0 
    
    //setInterval dispara uma função depois de um determinado tempo 
    setInterval(function (){
        this.idade++
        console.log("com o bind: idade: "+this.idade)
    }.bind(this),1000)
}

new Pessoa2

/**
 * armazenando o This em uma constante 
 */
function Pessoa3() {
    this.idade = 0 

    const self = this

    setInterval(function (){
        self.idade++
        console.log("this em uma constante: idade: "+self.idade)
    },1000)
}

new Pessoa3