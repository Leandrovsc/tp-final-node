// controller
import services from '../services/products.Services.js'

const getUsers = (req, res) => {};

const createProduct = (req, res) => {
    const {name,precio,stock,descripcion} = req.body
    try {
        const newProduct = services.createProduct({name,precio,stock,descripcion})
        res.status(201).json({message: "Product created successfully", product: newProduct})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//creo el CreateSeedProduct
const createSeedProduct= (req, res) => {
    const cantidad = req.params.cantidad 
    try {
        const products = services.createSeedProduct(cantidad)
        res.status(201).json({message: "Products created successfully", products})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// controllador para obtener los productos de la base de datos con getall
const getallProducts = (req,res) =>{
    try {
        const products = services.getall()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// controllador para obtener productos por id

const  productsById =(req,res)=>{
        const id =req.params.id
        //aca veo si el id es valido
        if (!id || id===" "){
            res.status(400).json({message: "Invalid ID"})
            return 
        }
    try {
        const productId= services.getById(id)
        if (!productId) {
            res.status(404).json({message: "Product not found"})
            return
        }else {
            res.status(200).json(productId)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// controlador para eliminar un producto por id
const deleteProductById = (req, res) => {
    const id = req.params.id
    // Verifica si el ID es válido
    if (!id || id === " ") {
        res.status(400).json({message: "Invalid ID"})
}
try {
    const deletedProduct = services.deleteById(id)
        res.status(200).json({message: "Product deleted successfully", product: deletedProduct})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const controller=
{ getUsers, createProduct ,createSeedProduct,getallProducts , productsById, deleteProductById }
