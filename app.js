const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql2');
require('dotenv').config();
const exphbs = require('express-handlebars');
const path = require('path');
const cookie = require('cookie-parser');
const morgan = require("morgan");
const fileupload = require('express-fileupload');
const ejs = require('ejs')
const ejslayouts = require('express-ejs-layouts')
const {check , validationResult } = require('express-validator')



const app = express();
app.use(morgan("combined"));

//setting application port
const PORT = process.env.PORT;

//middlewares for cookie
app.use(cookie());

//use file express fileuplaod middleware
//app.use(fileupload());
app.use(fileupload({safeFileNames:/\\/g}));

//middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));



// include routes in the application
app.use('/', require('./routes/userRoute'));
app.use('/users', require('./routes/authUser'));


//setting application view engine
//app.engine('hbs',exphbs.engine({ extname: '.hbs'}))
app.set('view engine', 'ejs');
app.use(ejslayouts);




//setting application static files 
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{
    console.log('AfriqFoods running on port', PORT);
})


// After series of test i have to realise that all middlewares should come before the route in the app or server.js file. 
// I think the reason is because middle are passed first to perform a specific function or task then after its been ssent to a route to display something.