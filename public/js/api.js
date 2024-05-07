export async function getProducts() {
    const response = await fetch('http://localhost:3000/api/products')
    const data = await response.json()
    console.log(data)
    return data
}

export async function postProduct(obj) {
    return await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
}