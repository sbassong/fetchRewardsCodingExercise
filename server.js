const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')


const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/', AppRouter)


app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))