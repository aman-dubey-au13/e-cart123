const express = require('express')
const  bodyParser = require('body-parser')
const app = express()

var dbConnection = require('./db')
const productsRoute = require('./routes/productsRoute')

var userRoute = require('./routes/userRoute')
var orderRoute = require('./routes/orderRoute')

// app.use(bodyParser.({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use('/api/products',productsRoute);
app.use('/api/users',userRoute)
app.use('/api/orders',orderRoute)


app.get('/',(req,res)=>{
    res.send('this is from backend')
});

const port = 8000;

app.listen(port,()=>console.log('node server started'))