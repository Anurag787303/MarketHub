const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');

const errorMiddleware = require("./middleware/error")

app.use(express.json());
app.use(cookieParser());

//Routes
const product = require('./routes/product')
const user = require("./routes/user")
const order = require("./routes/order")

app.use("/backend-api/", product)
app.use("/backend-api/", user)
app.use("/backend-api/", order)

// Middleware for Error
app.use(errorMiddleware)

module.exports = app