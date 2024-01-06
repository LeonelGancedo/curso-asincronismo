const API = "https://api.escuelajs.co/api/v1" //guardamos la url de la api

const postData = (urlAPI, data) => {
    const response = fetch(urlAPI, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    return response
}

const newProduct = {
    "title": "Smart Watch Leonium",
    "price": 500,
    "description": "A great watch",
    "categoryId": 2,
    "images": [
        "https://placeimg.com/640/480/any"
    ]
  }

postData(`${API}/products/`, newProduct)
  .then( response => response.json())
  .then( data => console.log(data))
  .catch( err => console.log(err))