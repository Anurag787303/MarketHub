const express = require('express')
const app = express()

const errorMiddleware = require("./middleware/error")

app.use(express.json())

//Routes
const product = require('./routes/product')

app.use("/backend-api/", product)

// Middleware for Error
app.use(errorMiddleware)

module.exports = app