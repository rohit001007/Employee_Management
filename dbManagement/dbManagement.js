const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/database').then(()=>{
    console.log('\n * Connection Established Successfully *');
}).catch(()=>{
    console.log('\n * Connection Fail...!!!!!! *');
})