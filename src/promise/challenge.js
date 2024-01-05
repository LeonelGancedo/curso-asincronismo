// import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1" //guardamos la url de la api

const fetchData = (urlAPI) => {
    return fetch(urlAPI)
}

// fetchData(`${API}/products`)
//     .then( result => result.json() )
//     .then( products => console.log(products))
//     .catch( error => console.log( error ))


fetchData(`${API}/products`) //la peticion de todos los productos
    .then( response => response.json() ) //transformamos la respuesta en json
    .then( products => {
        console.log(products[0]); //imprimimos la respuesta - todos los productos
        return fetchData(`${API}/products/${products[0].id}`) //buscamos el primer producto
    })
    .then( response => response.json()) //transformamos la respuesta en json
    .then( product => {
        console.log(product.title); //imprimimos la respuesta - el primer producto
        return fetchData(`${API}/categories/${product.category.id}`) //buscamos la categoria
    })
    .then( response => response.json()) //transformamos la respuesta en json
    .then( category => {
        console.log(category.name); //imprimimos la respuesta - el nombre
    })
    .catch( err => console.error(err))
    .finally( () => console.log("Llamada terminada"))