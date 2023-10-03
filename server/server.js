const app = require('./app')
const dotenv = require('dotenv')

//Config
dotenv.config({ path: 'server/config/config.env' })

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT || 3000}`)
})