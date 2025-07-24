import seed from "../utils/seedProducts.js"
import db from "../config/db.js"
import { ProductsClass } from "../models/products.Models.js"


const createProduct= (product) => {
    const newProduct = new ProductsClass(
    product.nombre,
    product.precio,
    product.stock,
    product.descripcion,
    )
    console.log(newProduct)//veo el producto creado
    return db.productsdb.push(newProduct)
}

const createSeedProduct= (cantidad) => {
    // Llama a la función para generar productos falsos
    return seed(cantidad)
}

const getall=()=>{
    return db.productsdb
}



export default { createProduct , createSeedProduct,getall}