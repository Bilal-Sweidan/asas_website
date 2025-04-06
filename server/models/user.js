const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        country: {
            type: String,
        },
        city: {
            type: String,
        },
        street: {
            type: String,
        },
        zip : {
            type : String
        }
    },
    contactInfo : {
        phone: {
            type: String,
        },
        whatsapp: {
            type: String,
        }
    },
    role : {
        type : String,
        default : "customer"
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    updatedAt : {
        type : Date,
        default : Date.now()
    },
    isFirstVisit : {
        type : Boolean,
        default : true
    },
    resetPasswordToken : String,
    resetPasswordExpires : Date
})

// hashing password
const {hash} = require("../utils/hash")

userSchema.pre("save",function(next) {
    const user = this
    user.password = hash(user.password)
    next()
})

const Account = mongoose.model('accounts', userSchema)

module.exports = {
    Account
}