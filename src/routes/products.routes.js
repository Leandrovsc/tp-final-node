import { Router } from "express" 
import {productsController} from "../controllers/products.controller.js"

const router = Router()

//defino las rutas para crear un producto
router.post("/create",productsController.createProduct)
router.post("/seed/:cantidad", productsController.createSeedProduct)
router.get("", productsController.getallProducts)
// Export the router
export default router