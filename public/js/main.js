import { getProducts } from "./api.js";
import { createChart } from "./chart/chart.js";
import { createProduct, productosHTML } from "./products.js";


async function main() {
    const result = await getProducts()
    productosHTML(result.payload)
    createProduct()
    createChart(result.payload)
}
main()
