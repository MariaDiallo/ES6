function sum(array) {
    return array.reduce(function(acc, elt){
        return acc + elt;
    })
}
console.log(sum([1, 2, 3, 4]));