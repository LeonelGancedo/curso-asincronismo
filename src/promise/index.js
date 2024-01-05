const promise = new Promise((resolve, reject) => {
    resolve('fue todo bien')
})

const cow = 16

const countCows = new Promise( ( resolve, reject ) => {
    if ( cow > 10) {
        resolve(`Tenemos ${cow} vacas, lo cual es suficientes :D`)
    } else {
        reject(`Tenemos ${cow}, no es suficiente :(`)
    }
})

countCows
    .then( result => console.log( result ))
    .catch( error => console.log( error ))
    .finally( () => console.log("Terminamos"))
