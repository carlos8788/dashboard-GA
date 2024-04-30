import productService from "../services/product.service.js"

export const createProductController = async (req, res) => {
    try {
        const newProduct = await productService.createProduct(req.body)

        return res.status(201).json({
            status: 201,
            message: 'Producto creado',
            payload: newProduct
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}

export const getProductsController = async (req, res) => {
    try {
        const products = await productService.getProducts()

        if(products.length === 0) return res.status(404).json({status: 404, message: 'Productos no encontrados'})

        return res.status(200).json({
            status: 200,
            message: `Cantidad de productos: ${products.length}`,
            payload: products
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        })
    }
}