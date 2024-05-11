import express from "express";
import products from "./data/products.js";
import 'dotenv/config'
import connectDB from "./config/db.js"
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cookieParser from "cookie-parser";
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

connectDB()//DB CONNECTION

const app = express()

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Cokie parser middleware
app.use(cookieParser())

app.use(cors());

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'))
    })
}
else {
    app.get('/', (req, res) => {
        res.send("API is running...")
    })
}

app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT}`))