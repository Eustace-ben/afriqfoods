const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const addDetailsController = require('../controllers/addDetailsController');
const db = require('../database/database')

router.get('/',userController.isLoggedIn, (req, res)=>{
        res.render('main', {layout: 'home', user : req.user});
});

router.get('/register', (req, res)=>{
    res.render('main', {layout: 'register'});
});

router.get('/login', (req, res)=>{
    res.render('main', {layout: 'login'});
});

router.get('/edit/:id',userController.isLoggedIn, (req, res)=>{
    const data = req.user;
    res.render('main', {layout: 'edit', data});
});

router.get('/editInfo/:id',userController.isLoggedIn, (req, res)=>{
    res.render('main', {layout: 'editInfo', result : req.result});
});

router.get('/addDetails/:id',userController.isLoggedIn, (req, res)=>{
    const data = req.user;
    res.render('main', {layout: 'addDetails', data});
});

router.get('/profile', userController.isLoggedIn,  async(req, res)=>{
   
    if( req.user){
        res.render('main', {layout: 'profile', user : req.user, result : req.result});
    }else{
        res.redirect('/login');
    }
});



module.exports = router;
