const express = require('express')
var cors = require('cors')
const app = express();

const route = require('../Route/route')

let port = 9000;

app.use(cors())
app.use(express.json()) 
app.use('/api', route)

app.listen(port,() => {
    console.log(`\n * Server Started Successfully at ${port} * \n`);
    require('../dbManagement/dbManagement')
})