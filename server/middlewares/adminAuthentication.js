const jwt = require('jsonwebtoken')
const adminAuthentication = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized. No token provided." });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log(err)
            return res.clearCookie('token')
        }
        if (user.account.role == 'admin') {
            req.user = user
            next()
        }else{
            return res.status(401).json({ success: false, message: "you are not admin" });
        }
    })
}

module.exports = adminAuthentication