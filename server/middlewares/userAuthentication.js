const userAuthentication = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(403)
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log(err)
            return res.clearCookie('token').status(400)
        }
        res.json(user)
        next()
    })
}

module.exports = userAuthentication