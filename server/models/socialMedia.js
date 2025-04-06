const mongoose = require('mongoose')

const socialMediaSchema = mongoose.Schema({
    facebook: String,
    instagram: String,
    email: String,
    youtube: String,
    telegram: String
})

const SocialMedia = mongoose.model("social media", socialMediaSchema)

module.exports = {
    SocialMedia
}