let model = require('../Model/model')
class employeeService {

    addDataService = (req) => {
        
        try {
                return model.create(req).then((result) => {
                    return ({ message: `* Data Added Successfully *`, data: result })
                }).catch((error) => {
                    return ({ message: `* Data Adding Failed... `, data: error })
                })
            }catch (error) {
        }
    }

    getDataService = () => {
        
        try {   
            let request = {}
                return model.read(request).then((result) => {
                    return ({ message: `* Data Found *`, data: result })
                }).catch((error) => {
                    return ({ message: `* Data Not Found... `, error: error })
                })
            }catch (error) {
        }
    }

    getDataByIdService = (req) => {
        
        try {   
            let request = {
                "_id":req.params.employeeId
            }
                return model.read(request).then((result) => {
                    return ({ message: `* Data Found By ID *`, data: result })
                }).catch((error) => {
                    return ({ message: `* Data Not Found By ID... `, error: error })
                })
            }catch (error) {
        }
    }

    updateDataService = (req) => {
        
        try {
            let id = req.params.employeeId;
            let userData = {
                id,data:req.body
            }
                return model.update(userData).then((result) => {
                    return ({ message: ` * Updated Data Successfully *`, data: result })
                }).catch((error) => {
                    return ({ message: ` * Update Data Failed... *`, error: error })
                })
            }catch (error) {
        }
    }

    deleteDataService = (req) => {
        try {
            let id = req.params.employeeId;
            
                return model.delete(id).then((result) => {
                    return ({ message: ` * Deleted Data Successfully *`})
                }).catch((error) => {
                    return ({ message: ` * Deleting Data Failed... *`, error: error })
                })
            }catch (error) {
        }
    }
}

module.exports = new employeeService();