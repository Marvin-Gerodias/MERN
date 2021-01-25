const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            minlength: [2, "Title must be at least 2 characters long"],
        },
        price: {
            type: String,
            required: [true, "Price is required!"],
        },
        description: {
            type: String,
            required: [true, "Please include a description of the product!"],
        },
    },
    { timestamps: true }
);

// const Product = mongoose.model("Product", ProductSchema)
// module.exports = Product

module.exports.Product = mongoose.model("Product", ProductSchema);