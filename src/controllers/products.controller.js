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


export const productsController={ getUsers, createProduct };
