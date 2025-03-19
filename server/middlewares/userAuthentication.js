const express = require('express')
const jwt = require('jsonwebtoken')
const userAuthentication = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized. No token provided." });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log(err)
            return res.clearCookie('token')
        }
        req.user = user
        next()
    })
}

module.exports = userAuthentication