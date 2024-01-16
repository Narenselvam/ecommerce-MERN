import express from "express";
import products from "./data/products.js";
import 'dotenv/config'
import connectDB from "./config/db.js"
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'


connectDB()//DB CONNECTION

const app = express()

app.get('/', (req, res) => {
    res.send("API is running...")
})

app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT}`))