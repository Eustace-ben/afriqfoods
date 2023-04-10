const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql2');
require('dotenv').config();
const exphbs = require('express-handlebars');
const path = require('path');
const cookie = require('cookie-parser');
const morgan = require("morgan");


const app = express();
app.use(morgan("combined"));

//setting application port
const PORT = process.env.PORT || 5000;

//middlewares for cookie
app.use(cookie());

//middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}));

// include routes in the application
app.use('/', require('./routes/userRoute'));
app.use('/users', require('./routes/authUser'));


//setting application view engine
app.engine('hbs',exphbs.engine({ extname: '.hbs'}))
app.set('view engine', 'hbs');

//setting application static files 
app.use(express.static(path.join(__dirname, 'public')));






app.listen(PORT, ()=>{
    console.log('AfriqFoods running on port', PORT);
})