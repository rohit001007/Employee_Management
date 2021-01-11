let route = require('express').Router()

let controller = require('../Controller/controller')

route.post('/employee/create', controller.addDataController)
route.get('/employee/read', controller.getDataController)

module.exports = route;