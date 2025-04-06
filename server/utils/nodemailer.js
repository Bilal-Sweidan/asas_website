const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "araaik.store@gmail.com",
        pass: process.env.MY_EMAIL_PASSWORD,
        debug: true, // Enable debugging
        logger: true, // Log output to console
    }
})

const resetPasswordEmail = (userEmail, senderEmail, token) => {
    const mailOptions = {
        to: userEmail,
        from: senderEmail,
        subject: 'Password Reset',
        text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process:\n\n
        <a href="http://localhost:5173/reset-password/${token}">http://localhost:5173/reset-password/${token}</a>\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    }

    transporter.sendMail(mailOptions, (err) => {
        if (err) {
            console.log(err)
            return 500
            // return res.status(500).json({ message: 'Error sending email' });
        }
        return 200
        // res.status(200).json({ message: 'Password reset email sent' });
    })
}

module.exports = {
    resetPasswordEmail
}