function filter(array) {
    return array.filter((elt) => elt % 2 !==0)
}
console.log(filter([1, 5, 4, 6]))