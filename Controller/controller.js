let response = {}
let service = require('../Services/service')

class employeeController {

    addDataController = (req, res) => {

        try { 
                console.log(req.body)
                service.addDataService(req.body).then((result) => {
                    response.success = true
                    response.message = result.message
                    response.data = result.data
                    return res.status(200).send(response)
                }).catch ((error) => {
                    response.success = false
                    response.message = error.message
                    response.error = error.error
                    return res.status(400).send(response)
                });
            }catch (error) {
        }
    }

    getDataController = (res) => {

        try { 
                service.getDataService().then((result) => {
                    response.success = true
                    response.message = result.message
                    response.data = result.data
                    return res.status(200).send(response)
                }).catch ((error) => {
                    response.success = false
                    response.message = error.message
                    response.error = error.error
                    return res.status(400).send(response)
                });
            }catch (error) {
        }
    }
}     

module.exports = new employeeController()