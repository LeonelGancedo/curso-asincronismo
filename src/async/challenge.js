const API = "https://api.escuelajs.co/api/v1" //guardamos la url de la api

const fetchData = async (urlAPI) => {
    const response = await fetch(urlAPI)
    const data = await response.json()
    return data
}

const anFn = async (urlAPI) => {
    try {
        const products = await fetchData(`${urlAPI}/products`)
        const product = await fetchData(`${urlAPI}/products/${products[0].id}`)
        const category = await fetchData(`${urlAPI}/categories/${product.category.id}`)

        console.log(products[0]);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.error(error);
    }
}

anFn(API)