const fnAsync = () => {
    return new Promise( (resolve, reject) => {
        true 
        ? setTimeout ( () => resolve('Async!!'),2000)
        : reject(new Error('Error :('))
    })
}

const fn2 = async () => {
    console.log('Antes await');
    const algo = await fnAsync()
    console.log(algo);
    console.log('Despues await');
}

console.log('Antes llamado');
fn2()
console.log('Despues llamado');
