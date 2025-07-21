// controller
import {productsServices} from '../services/products.Services.js'

const getUsers = (req, res) => {};

const createProduct = (req, res) => {
    const {name,precio,stock,descripcion} = req.body
    try {
        const newProduct = productsServices.createProduct({name,precio,stock,descripcion})
        res.status(201).json({message: "Product created successfully", product: newProduct})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//creo el CreateSeedProduct
const createSeedProduct= (req, res) => {
    const cantidad = req.params.cantidad 
    try {
        const products = productsServices.createSeedProduct(cantidad)
        res.status(201).json({message: "Products created successfully", products})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const productsController={ getUsers, createProduct ,createSeedProduct};
