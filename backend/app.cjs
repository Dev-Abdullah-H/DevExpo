const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const uri = require('./pass.cjs')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, this is Home')
})

mongoose.connect(uri).then(() => {
    console.log('MongoDb Connected');
    listen()
})
.catch((e) => {
    console.log(e);
}) 




const listen = () => {
    app.listen(3000, () => {
        console.log('Server is listening on port 3000...');
    })
}

const SignUpRoute = require('./routes/SignUp.cjs')
app.use('/signUpApi', SignUpRoute)