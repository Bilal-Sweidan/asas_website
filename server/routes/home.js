const express = require('express')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const router = express.Router()

// utils
const { hash, compare } = require('../utils/hash')

// database
const { Account } = require('../models/user')


// userAuthentication
const userAuthentication = require('../middlewares/userAuthentication')



router.post('/', userAuthentication, (req, res) => {
    res.json(req.user)
})



router.post('/register', async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)
    try {
        const newUser = await Account.create({ email, password })
        res.status(201).json(newUser)
    } catch (err) {
        console.log(err.message)
        res.status(400).json({ message: err.message })
    }
})

router.post('/login', async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    try {
        const account = await Account.findOne({ email })
        if (account) {
            if (compare(password, account.password)) {
                const accessToken = jwt.sign({ account }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
                res.cookie("token", accessToken, {
                    withCredentials: true,
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000,
                    sameSite: 'none', // Needed if frontend/backend are on different domains
                    domain: '.onrender.com' // Set if using subdomains
                });
                req.user = account
                res.status(200).json({ account, message: "User logged in successfully", success: true });
            } else {
                res.status(401).json({ message: "wrong password" })
            }
        } else {
            res.status(404).json({ message: "there is no user like this !!!!" })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
        console.log(err)
    }
})

router.get('/logout', async (req, res) => {
    try {
        console.log('logged out')
        req.user = null
        res.clearCookie('token').status(200).json({ success: true, message: 'User logged out successfully' })
        // حسب فهمي عندما يكون ال get عندها يجب ان يكون هناك رد json
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})





module.exports = router