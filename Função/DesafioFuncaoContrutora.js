function Pessoa(nome){
    this.nome = nome
    this.falar = () => console.log(`Meu nome é ${nome}`)
    
}

const p1 = new Pessoa('Fernando')

p1.falar()

