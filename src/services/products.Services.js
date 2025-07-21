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
    return db.push(newProduct)
}

const createProductSeed= (product) => {
    const newProduct = new ProductsClass(
    product.nombre,
    product.precio,
    product.stock,
    product.descripcion,
    )
    return newProduct
}


export const  productsServices = { createProduct , createProductSeed }