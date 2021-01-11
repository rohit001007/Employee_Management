const express = require('express')
const app = express();
const route = require('../Route/route')

let port = 9000;

app.use(express.json())
app.use('/api', route)

app.listen(port,() => {
    console.log(`\n * Server Started Successfully at ${port} * \n`);
    require('../dbManagement/dbManagement')
})