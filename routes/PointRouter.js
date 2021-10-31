const Router = require('express').Router()
const controller = require('../controllers/PointController')

Router.post('/transaction/create', controller.AddTransaction)
Router.put('/spend', controller.SpendPoints)
Router.get('/balance', controller.GetBalance)

module.exports = Router