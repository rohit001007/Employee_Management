let route = require('express').Router()

let controller = require('../Controller/controller')

route.post('/employee/create', controller.addDataController)
route.get('/employee/read', controller.getDataController)
route.post('/employee/readOne/:employeeId', controller.getDataByIdController)
route.put('/employee/update/:employeeId',controller.updateDataController)

module.exports = route;