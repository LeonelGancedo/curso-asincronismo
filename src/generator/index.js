function* gen() {
    yield 1
    yield 2
    yield 3
}

const g = gen()

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
    for (let el of array) {
        yield el
    }
}

const it = iterate(['leo','juan','pedro'])

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

const num = 0

function* idGen() {
    yield num += 1
}

const id = idGen()
console.log(id.next.value);
console.log(id.next.value);
