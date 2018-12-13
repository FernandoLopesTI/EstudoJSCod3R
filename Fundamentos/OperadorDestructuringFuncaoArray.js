function rand([min = 0, max = 1000]) {
    if(min > max){
        [min, max] = [max, min] //Desistrutura e inverte o array 
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
}

const array = [ 50, 40]
console.log(rand(array))
console.log(rand([955]))
console.log(rand([]))
// console.log(rand()) //erro pq tem que passar o caminho para a desestruturação 