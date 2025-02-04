const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router()

// utils
const { hash , compare } = require('../utils/hash')

// database
const { Account } = require('../models/user')


// userAuthentication
const userAuthentication = require('../middlewares/userAuthentication')



router.post('/',userAuthentication)



router.post('/register', async (req,res) => {
    const {email,password} = req.body
    console.log(req.body)
    try{
        const newUser = await Account.create({email , password})
        res.status(201).json(newUser)
    }catch(err){
        console.log(err.message)
        res.status(400).json({message : err.message })
    }
})

router.post('/signin',async (req,res) => {
    console.log(req.body)
    const {username,email,password} = req.body
    // try{
    //     const account = await Account.findOne({username})
    //     if(user){
    //         if(compare(password,user.password)){
    //             const accessToken = jwt.sign({ account }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
    //             res.cookie("token", accessToken, {
    //                 withCredentials: true,
    //                 httpOnly: false,
    //                 maxAge: 24 * 60 * 60 * 1000
    //             });
    //             req.user = account
    //             res.status(200).json({ account, message: "User logged in successfully", success: true });
    //         }else{
    //             res.status(401).json({message : "wrong password"})
    //         }
    //     }else{
    //         res.status(404).json({message : ""})
    //     }
    // }catch(err){
    //     res.status(500).json({message : err.message})
    //     console.log(err)
    // }
})



module.exports = router