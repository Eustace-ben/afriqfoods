const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const db = require('../database/database')



router.get('/',  userController.isLoggedIn, (req, res)=>{

    if(req.user){
        res.render('home', { data2 : req.data2, user : req.user, numberOfPages : req.numberOfPages, page: req.page, endingLink: req.endingLink, iterator: req.iterator})

    }else{
        
        const resultsPerPage = 10;
        let sql = 'SELECT * FROM cuisine';
        db.query(sql, (err, data) => {
            if(err) throw err;
            const numOfResults = data.length;
            const numberOfPages = Math.ceil(numOfResults / resultsPerPage);
            let page = req.query.page ? Number(req.query.page) : 1;
            if(page > numberOfPages){
                res.redirect('/?page='+encodeURIComponent(numberOfPages));
            }else if(page < 1){
                res.redirect('/?page='+encodeURIComponent('1'));
            }
            //Determine the SQL LIMIT starting number
            const startingLimit = (page - 1) * resultsPerPage;
            //Get the relevant number of POSTS for this starting page
            sql = `SELECT * FROM cuisine LIMIT ${startingLimit},${resultsPerPage}`;
            db.query(sql, (err, data)=>{
                if(err) throw err;
                let iterator = (page - 5) < 1 ? 1 : page - 5;
                let endingLink = (iterator + 9) <= numberOfPages ? (iterator + 9) : page + (numberOfPages - page);
                if(endingLink < (page + 4)){
                    iterator -= (page + 4) - numberOfPages;
                }
                res.render('home', {data: data, page, iterator, endingLink, numberOfPages});
            });
        });
      



    } 
});

router.get('/register', (req, res)=>{
    res.render('register');
});

router.get('/login', (req, res)=>{
    res.render('login');
});

router.get('/edit/:id',userController.isLoggedIn,(req, res)=>{
    const data = req.user;
    res.render('edit', {layout: 'edit', data});
});

router.get('/showcase/:id',userController.isLoggedIn, (req, res)=>{
    if(req.user){
        res.render('showcase')
    }else{
        res.redirect('/login');
    }
});

router.get('/admin',(req, res)=>{

        res.render('main', {layout: 'admin'})
    
});

router.get('/editInfo/:id', userController.isLoggedIn, (req, res)=>{
    res.render('editInfo', { result : req.result});
});

router.get('/addDetails/:id',userController.isLoggedIn, (req, res)=>{
    const data = req.user;
    res.render('addDetails', { data});
});

router.get('/profile', userController.isLoggedIn, (req, res)=>{
   
    if(req.user){
        res.render('profile', { user : req.user, result : req.result});
    }else{
        res.redirect('/login');
    }
});



module.exports = router;
