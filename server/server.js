const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')

//Config
dotenv.config({ path: 'server/config/config.env' })

// Connect to database
connectDatabase()

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT || 3000}`)
})