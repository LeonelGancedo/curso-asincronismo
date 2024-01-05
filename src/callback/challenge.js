const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //trae el servicio
const API = "https://api.escuelajs.co/api/v1" //guardamos la url de la api

const fetchData = (urlApi, callback) => { // para obtener la info
    let xhttp = new XMLHttpRequest //objeto que nos permitira hacer la petición

    xhttp.open('GET', urlApi, true); //prepara la petición
    xhttp.onreadystatechange = (event) => {  //escucha los cambios de estado en la peticion
        if (xhttp.readyState === 4) { //cuando llega a 4 es que la petición se completo
            if (xhttp.status === 200) { //retorna el estado de la respuesta de la peticion
                callback(null, JSON.parse(xhttp.responseText)) //par 1 error, par 2, la respuesta
            }
        } else {
            const error = new Error('Error ' + urlApi) 
            return callback(error, null) // muestra el error
        }
    }

    xhttp.send() //se emvoa la petición
}

fetchData(`${API}/products`, (error1, data1) => { //productos
    if (error1) return console.error(error1)
    fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => { //id del primer prod
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2.category.id}`, (error3, data3) => { //id de cat
            if(error3) return console.error(error3);
            console.log("clg1: ",data1[0]); //primer producto de la lista
            console.log("clg2: ",data2.title); //titulo del primer producto
            console.log("clg3: ",data3.name); //nombre de la categoria
        })
    })
})