const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    
            firstName: {
                    type: String,
                    required: [true, 'First Name Is Required'],
                },
            lastName: {
                    type: String,
                    required: [true, 'Last Name Is Required'],
                },
            eMail: {
                type: String,
                required: [true, 'Email Is Required']
            },
            mobile: {
                type: Number,
                required: [true, 'Mobile Number Is Required'],
                unique: true,
                min: 10,
                max: 10
            },
            companyName: {
                type: String,
                required: [true, 'Company Name Is Required']
            },
}, { timestamps: true });

let model = mongoose.model('samples', schema)

class employeeModel {

    create = (req) => {
        try {
                return new Promise((resolve, reject) => {
                    model.create(req).then((result) => {
                        resolve(result)
                    }).catch((error) => {
                        reject(error)
                    })
                })
            }catch (error) {
        }
    }
}

module.exports = new employeeModel()