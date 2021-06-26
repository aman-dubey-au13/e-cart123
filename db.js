const mongoose = require('mongoose');

 var mongodbUrl = "mongodb+srv://amandubey:aman123@@cluster0.fxilk.mongodb.net/mern-ecommerce"
 mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

var dbconnect = mongoose.connection

dbconnect.on('error',()=>{
    console.log('mongo DB connection failed')
})

dbconnect.on('connected',()=>{
    console.log('mongo DB connection successfull')
})


module.exports = mongoose