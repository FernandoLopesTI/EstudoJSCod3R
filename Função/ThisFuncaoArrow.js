/**
 * com Arrow funcition nao varia o this 
 * o this fica conceituado no conceito léxico 
 * por isso nao precisa fazer um bind
 */

function Pessoa() {
    this.idade = 0 

    //setInterval dispara uma função depois de um determinado tempo 
    setInterval(()=>{
        this.idade++
        console.log("sem o bind: idade: "+this.idade)
    },1000)
}

new Pessoa 

