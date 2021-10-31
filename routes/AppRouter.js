const Router = require('express').Router()
const PointsRouter = require('./PointsRouter')


Router.use('/points', PointsRouter)


module.exports = Router