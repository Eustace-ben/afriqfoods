const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const db = require('../database/database')






// user can register
exports.create = async (req, res) => {
  //const {name, email, password} = req.body;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const Confirmpassword = req.body.Confirmpassword;

  if (!name || !email || !password) {
      
     return res.render('register', {  message: " Complete all the fields" })
    
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], async (error, data1) => {
    if (error) throw error;
    if (data1.length > 0) {
     
      return res.render('register', {  message: " Email aleady exits" });

    } else if (password !== Confirmpassword) {
      return res.render('register', {  message: " Passwords Dont match" });
    } else {
      const hashedpassword = await bcrypt.hash(password, 8);
      console.log(hashedpassword);



      db.query('INSERT INTO users SET ?', { name: name, email: email, password: hashedpassword }, async (error, data) => {
        if (error) {
          console.log(error);
       
          return res.render('register', { message: " User registration Failed" });
        } else {
          //res.render('login', { layout: 'login', data, message1: " User registered, YOU can login now!!" });
         res.render('login', {  data, message1: " User registered, YOU can login now!!" });
        }

      });
    }
  });


};



// user can login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {

    if (!email || !password) {
      return res.render('login', {  message: "Complete all the field" });
    }

    db.query("SELECT * FROM users WHERE email = ?", [email], async (error, data5) => {
      if (error) throw error;
      if (!data5.length) {
        console.log("Email not correct")
        return res.render('login', { message: "Enter correct email or password ", data5 });
      }
      const comparepass = await bcrypt.compare(password, data5[0].password);
      if (!comparepass) {
        console.log("Password not correct")
        return res.render('login', {  message: "Enter correct email or password " });
      } else {

        const id = data5[0].id;
        const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })

        const cookieOptions = {
          expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
          ),
          httpOnly: true
        }
        res.cookie('jwt', token, cookieOptions);
        res.status(200).redirect('/');

      }
    });
  } catch (error) {
    console.log(error)
  }

};

// Check if user is verify and login
exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
      console.log(decoded);
      db.query("SELECT * FROM users  WHERE users.id = ?", [decoded.id], async (error, data) => {
        if (!data) {
          return next();
        }
        req.user = data[0];
        // console.log(req.user);

        db.query("SELECT * FROM info WHERE user_id = ?", [req.user.id], (error, result1) => {
          if (!result1.length) {
            console.log("User have not added any details");
          } else {
            req.result = result1[0];
          }



   //Configuring Pagination 
   const resultsPerPage = 10;
   let sql = 'SELECT * FROM cuisine';
   db.query(sql, (err, data2) => {
       if(err) throw err;
       const numOfResults = data2.length;
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
       db.query(sql, (err, data2)=>{
           if(err) throw err;
           let iterator = (page - 5) < 1 ? 1 : page - 5;
           let endingLink = (iterator + 9) <= numberOfPages ? (iterator + 9) : page + (numberOfPages - page);
           if(endingLink < (page + 4)){
               iterator -= (page + 4) - numberOfPages;
           }
         //  res.render('index', {data: data2, page, iterator, endingLink, numberOfPages});
           req.iterator = iterator
           req.endingLink = endingLink
           req.page = page
           req.numberOfPages = numberOfPages
           req.data2 = data2
           next();
       });
   });
});

//cousin code ended 
        });
    } catch (error) {
      console.log(error);
      next();
    }

  } else {
    next();
  }
}





// log user out
exports.logout = async (req, res) => {
  res.cookie('jwt', 'logout', {
    expires: new Date(
      Date.now() * 2 * 1000
    )
  }, httpOnly = true
  )

   res.redirect('/');
}











