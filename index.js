import express from "express"
import { join, __dirname } from "./src/utils/index.js"
import productsRoutes from "./src/routes/products.routes.js"
//settings
const app = express()
app.set("PORT", process.env.PORT || 3300)

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(join(__dirname, "public")))

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page apis app" }); 
});
app.use("/api/products", productsRoutes)

app.use("",(req,res)=>{
  res.sendStatus(404).json({message: "Not Found"})
})

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`)
})
