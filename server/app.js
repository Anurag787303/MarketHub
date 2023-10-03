const express = require('express')
const app = express()

//Routes
const product = require('./routes/product')

app.use("/backend-api/", product)

module.exports = app