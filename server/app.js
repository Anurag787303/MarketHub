const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const errorMiddleware = require("./middleware/error")

app.use(express.json({ limit: "50mb"}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: "50mb" ,extended: true }));
app.use(fileUpload());

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