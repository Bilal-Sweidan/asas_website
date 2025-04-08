const express = require('express')
const path = require("path")
const env = require('dotenv').config({ path: path.join(__dirname, '..\\.env') })
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded())
app.use(cors({
    origin: ["http://localhost:5173" , "https://arraik-store-fron-end.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}))
// config
const connectDB = require('./config/db')

// Routers
const home = require('./routes/home')
const api = require('./routes/API')
const cart = require('./routes/cart')


app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use('/',home)
app.use('/api',api)
app.use('/api/cart',cart)



app.listen(process.env.PORT, () => {
    connectDB()
    console.log('done', process.env.PORT)
})