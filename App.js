const express = require('express');
const {dbConnection} = require('./src/db/dbConnection');
const bodyParser = require('body-parser');
const userRoute = require('./src/routes/userRoute')
const app = express()

app.use(express.json());

app.use('/api/v1', userRoute)

const port = 3000;
dbConnection();

app.listen(port, () => {
    console.log(`App is running on ${port}`)

})





