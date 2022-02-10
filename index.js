const express = require('express');
const mongooose = require('mongoose');
const testcontroller = require('./controllers/TestController');
require('dotenv/config');
const app = express();
const URL = process.env.connection_string;

testcontroller.test();


// database connection

mongooose.connect(URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
    
}).then(()=>{
    console.log("database connected  succesfully")
}).catch((err) =>{
    console.log('connection failed' ,err);

})

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})



  
 

