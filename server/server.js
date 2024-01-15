import express from "express";
import mongoose from "mongoose";
import products from "./products.js";
import 'dotenv/config'

const app = express()

app.get("/api/products", (req, res) => {
    res.send(products)

})
app.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT}`))


app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.send(product)

})