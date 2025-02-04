const express = require('express')

const router = express.Router()

const { Products } = require('../models/products')
router.get('/products', async (req, res, next) => {
    try {
        const data = await Products.find()
        if (!data) {
            res.status(501).json({ message: "there is no products" })
        }
        res.status(200).json(data)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: err.message })
    }
})

router.get('/product/:id', async (req,res,next) => {
    const {id} = req.params
    try{
        const data = await Products.findOne({_id : id})
        if(!data){
            res.status(401).json({message : "there is no product like this !!!"})
        }
        res.status(200).json(data)
    }catch(err){
        console.log(err.message)
        res.status(500).json({message : err.message})
    }
})

module.exports = router