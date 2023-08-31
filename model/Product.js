const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title was not provided"],
        maxLength: 30,
    },
    price: {
        type: String,
        required: [true, "price was not provided"]
    },
    rating: {
        type: String,
        required: [true, "rating was not provided"]
    },
    stock: {
        type: String,
        required: [true, "stock was not provided"],
        maxLength: 30,
    },

})

const Product = mongoose.model("Product", productSchema)

module.exports = Product