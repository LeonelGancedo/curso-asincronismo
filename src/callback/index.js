const suma = (num1, num2) => {
    return num1 + num2
}

const calc = (num1, num2, callback) => {
    return callback(num1, num2)
}

console.log(calc(1,2,suma));


const saludo = (name, name2) => {
    console.log(`Hola ${name} y ${name2}`);
}
setTimeout(saludo, 2000, "Leo", "Pedro")
