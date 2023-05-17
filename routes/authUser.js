const express = require('express');
route = express.Router();
const userController = require('../controllers/userController');
const editController = require('../controllers/editController');
const addDetailsController = require('../controllers/addDetailsController');
const imgController = require('../controllers/imgController');
//const homeController = require('../controllers/homeController');


route.post('/register', userController.create);
route.post('/login', userController.login);
route.get('/logout', userController.logout);

route.post('/addDetails', userController.isLoggedIn, addDetailsController.addDetails);
route.post('/editInfo', userController.isLoggedIn, editController.editInfo );
route.post('/edit', userController.isLoggedIn, editController.edit);

//route.post('home',  homeController.data);

route.post('/showcase', userController.isLoggedIn, imgController.uploadedfile);


module.exports = route;

