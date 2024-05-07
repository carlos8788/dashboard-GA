import { postProduct } from "./api.js"

export function productosHTML(data) {
    const productsLength = document.querySelector('.products')
    productsLength.textContent = `Cantidad de productos: ${data.length}`
}

export function createProduct() {
    const form = document.querySelector('form')
    form.addEventListener('submit', function (event) {
        event.preventDefault()
        const data = Object.fromEntries(new FormData(event.target))
        postProduct(data)
    })
}