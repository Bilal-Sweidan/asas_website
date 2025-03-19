const express = require('express')

const router = express.Router()

// databases
const { Carts } = require("../models/cartSchema")
// middleware
const userAuthentication = require('../middlewares/userAuthentication')


router.get('/', userAuthentication, async (req, res) => {
    const userId = req.user.account._id
    try {
        const cart = await Carts.findOne({ userId }).populate({
            path: "items.productId",
            model: "products"
        })
        res.status(200).json(cart)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})
router.post('/add', userAuthentication, async (req, res) => {
    const { productId, color, quantity } = req.body
    console.log("----------------------")
    const userId = req.user.account._id
    try {
        const cart = await Carts.findOne({ userId: userId })
        if (!cart) {
            const newCartItem = await Carts.create({
                userId: userId,
                items: [{
                    productId,
                    color,
                    quantity
                }]
            })
            return res.status(200).json({ success: true, message: "Cart created and item added", data: await Carts.find({ userId }) });
        } else {
            // const exist = cart.items.productId.include(productId)
            const exist = cart.items.some(item => item.productId === productId);
            if (!exist) {
                const newCartItem = await Carts.updateOne({ userId }, { $push: { items: { productId, color, quantity } } })
                return res.status(200).json(await Carts.find({ userId }))
            }
            return res.json({ success: false, message: "this product is already in your cart" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

router.delete('/delete/:productId', userAuthentication, async (req, res) => {
    const { productId } = req.params
    const userId = req.user.account._id
    try {
        const items = await Carts.updateOne({ userId: userId }, { $pull: { items: { productId: productId } } })
        if (items.modifiedCount > 0) {
            const newCartItems = await Carts.findOne({ userId }).populate({
                path: "items.productId",
                model: "products"
            })
            return res.status(200).json(newCartItems);
        }
        return res.status(500);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
})

module.exports = router
