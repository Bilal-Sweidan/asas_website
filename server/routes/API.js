const express = require('express')

const router = express.Router()

const { Products } = require('../models/products')
const { Account } = require('../models/user')

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

router.get('/product/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        const data = await Products.findOne({ _id: id })
        if (!data) {
            res.status(401).json({ message: "there is no product like this !!!" })
        }
        res.status(200).json(data)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: err.message })
    }
})


// reset password functions
const { resetPasswordEmail } = require('../utils/nodemailer')
const crypto = require('crypto')

router.post("/forget-password", async (req, res) => {
    const { email } = req.body
    const user = await Account.findOne({ email })
    if (!user) {
        return res.status(404).json({ message: "user not found" })
    }
    const token = crypto.randomBytes(20).toString("hex")
    user.resetPasswordToken = token
    user.resetPasswordExpires = Date.now() + 3600000
    await user.save()

    let emailStatus = resetPasswordEmail(user.email, "araaik.store@gmail.com", token)
    if (emailStatus == 500) {
        return res.status(500).json({ message: 'Error sending email' });
    } else {
        res.status(200).json({ message: 'Password reset email sent' });
    }
})

router.post("/reset-password/:token", async (req, res) => {
    const { token } = req.params
    const { password } = req.body

    const user = await Account.findOne({
        resetPasswordToken: token,
        resetPasswordExpires: { $gt: Date.now() }
    })

    if (!user) {
        return res.status(400).json({ message: 'Invalid or expired token' });
    }

    // change the password
    user.password = password
    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined
    await user.save()
    res.status(200).json({ message: 'Password updated successfully' });

})


// change the password
const userAuthentication = require('../middlewares/userAuthentication')
const { compare } = require('../utils/hash')

router.put('/change-password', userAuthentication, async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body
        const userId = req.user.account._id
        const user = await Account.findOne({ _id: userId })

        if (!user) {
            return res.status(404).json({ msg: "user not found" })
        }

        if (!compare(currentPassword, user.password)) {
            return res.status(400).json({ msg: "current password is incorrect" })
        }
        user.password = newPassword
        await user.save()
        res.status(200).json({ msg: "password changed successfully" })

    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: err.message })
    }
})

// social media
const { SocialMedia } = require('../models/socialMedia')
// admin authentication middleware
const adminAuthentication = require('../middlewares/adminAuthentication')
router.get('/social-media', adminAuthentication, async (req, res) => {
    try {
        const data = await SocialMedia.find()
        return res.status(200).json(data)
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({ msg: err.message })
    }
})

router.put('/social-media/update', adminAuthentication, async (req, res) => {
    try {
        const socialMediaData = req.body
        await SocialMedia.updateMany({}, socialMediaData)
        const data = await SocialMedia.find()
        return res.status(200).json(data)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ msg: err.message })
    }
})
module.exports = router
