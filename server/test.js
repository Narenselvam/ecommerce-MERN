import 'dotenv/config'
import mongoose from "mongoose";
import Product from './models/productModel.js'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        const query = {};
    const documents = await Product.find(query);

    console.log("Documents found:", documents);
    } catch (error) {
        console.log(error);
    } finally{
        await mongoose.connection.close()
    }
};

connectDB().catch(console.dir)