let route = require('express').Router()

let controller = require('../Controller/controller')

route.post('/employee/create', controller.addDataController)

module.exports = route;