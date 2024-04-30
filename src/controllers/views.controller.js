import productService from "../services/product.service.js"

export const dashboard = async (req, res) => {
    const products = await productService.getProducts()
    console.log(products)
    res.render('dashboard', { products: products })
}