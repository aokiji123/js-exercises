function arraySubset(source, subset) {
    if (source.length < subset.length) {
        return false
    }

    for (let i = 0; i < subset.length; i++) {
        const index = source.indexOf(subset[i])
        if (index === -1) {
            return false
        }
        delete source[index]
    }
    return true
}

console.log(arraySubset([1, 2, 3], [3, 2, 1])) // true
console.log(arraySubset([1, 3, 3], [2, 2, 1])) // false
console.log(arraySubset([1, 2, 1, 3], [1, 2, 1])) // true