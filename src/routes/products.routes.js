import { Router } from "express" 
import {controller} from "../controllers/products.controller.js"

const router = Router()

//defino las rutas para crear un producto
router.post("/create",controller.createProduct)
router.post("/seed/:cantidad", controller.createSeedProduct)
router.get("", controller.getallProducts)
router.get("/:id", controller.productsById)
// Export the router
export default router