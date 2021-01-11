let model = require('../Model/model')

class employeeService {

    addDataService = (req) => {
        try {
                return model.create(req).then((result) => {
                    return ({ message: `* Data Added Successfully *`, data: result })
                }).catch((error) => {
                    return ({ message: `* Data Adding Failed... `, error: error })
                })
            }catch (error) {
        }
    }
}

module.exports = new employeeService();