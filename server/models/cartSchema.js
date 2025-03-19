const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "accounts",
        required: true
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products"
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            color: {
                type: String,
                required: true
            }
        }
    ],
}, { timestamps: true })

const Carts = mongoose.model("carts", cartSchema)
module.exports = {
    Carts
}