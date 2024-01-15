import mongoose from "mongoose";

const reviewSchmea = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        tyepe: 'string',
        required: true
    },
    rating: {
        type: 'number',
        required: true,
        default: 0
    },
    Comment: {
        type: "string",
        required: "true"
    }

}, { timestamps: "true" })

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    name: {
        tyepe: 'string',
        required: true
    },
    image: {
        type: 'string',
        required: true
    },
    brand: {
        type: 'string',
        required: true
    },
    category: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    },
    reviews: [reviewSchmea],
    rating: {
        type: 'number',
        required: true,
        default: 0
    }
    , numReviews: {
        type: 'number',
        default: 0,
        required: true
    },
    price: {
        type: 'number',
        required: true,
        default: 0
    },
    countInStock: {
        type: 'number',
        required: true,
        default: 0
    }
}, { timestamps: true })

const Product = mongoose.model("Product", productSchema)

export default Product