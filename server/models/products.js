const mongoose = require('mongoose')

const productsSchema = mongoose.Schema({
    name: {
        type: String
    },
    color: {
        type: String
    },
    company: {
        name: String,
        logo: String
    },
    price: {
        type: String
    },
    discount : {
        type : String
    },
    image : [String],
    dimensions : {
        width : Number,
        height : Number,
        depth : Number
    },
    category : mongoose.Schema.Types.ObjectId,
    description : String,
    brand : String,
    weight : Number,
    material : [String],
    stock : Number,
    ratings : [
        {
            user : {
                type : mongoose.Schema.Types.ObjectId,
                ref :  "accounts"
            },
            rating : String,
            comment : String,
        }
    ],
    createdAt : {
        type : Date,
        default : Date.now()
    },
    updatedAt : {
        type : Date ,
        default : Date.now()
    }
})

const Products = mongoose.model('products', productsSchema)

module.exports = {
    Products
}