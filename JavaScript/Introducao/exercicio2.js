function pares(x, y) {
    var arrayPares = []
    for (i=x; i<=y; i++) {
        if (i % 2 == 0) {
            arrayPares.push(i)
        }
    }
    return arrayPares
}

console.log(pares(32, 321));