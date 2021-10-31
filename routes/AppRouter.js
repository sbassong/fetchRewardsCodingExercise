const Router = require('express').Router()
const PointRouter = require('./PointRouter')


Router.use('/points', PointRouter)


module.exports = Router