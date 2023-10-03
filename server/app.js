const express = require('express')
const app = express()

app.use(express.json())

//Routes
const product = require('./routes/product')

app.use("/backend-api/", product)

module.exports = app