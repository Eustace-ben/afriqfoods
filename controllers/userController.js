const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const db = require('../database/database')

// const mysql = require('mysql2')
// db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   port: process.env.DB_PORT,
//   password: process.env.DB_PASSWORD

// });






// user can register
exports.create = async (req, res) => {
  //const {name, email, password} = req.body;
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const Confirmpassword = req.body.Confirmpassword;

  if (!name || !email || !password) {
    return res.render('main', { layout: 'register', message1: " Complete all the fields" })
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], async (error, data1) => {
    if (error) throw error;
    if (data1.length > 0) {
      //console.log('Email aleady exits')
      return res.render('main', { layout: 'register', message2: " Email aleady exits" });

    } else if (password !== Confirmpassword) {
      return res.render('main', { layout: 'register', message2: " Passwords Dont match" });
    } else {
      const hashedpassword = await bcrypt.hash(password, 8);
      console.log(hashedpassword);



      db.query('INSERT INTO users SET ?', { name: name, email: email, password: hashedpassword }, async (error, data) => {
        if (error) {
          console.log(error);
          return res.render('main', { layout: 'register', message1: " User registration Failed" });
        } else {
          res.render('main', { layout: 'login', data, message1: " User registered, YOU can login now!!" });
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
      return res.render('main', { layout: 'login', message2: "Complete all the field" });
    }

    db.query("SELECT * FROM users WHERE email = ?", [email], async(error, data5) => {
      if (error) throw error;
      if (!data5.length) {
        console.log("Email not correct")
        return res.render('main', {layout: 'login', message2: "Enter correct email or password ", data5 });
      }
      const comparepass = await bcrypt.compare(password, data5[0].password);
      if (!comparepass) {
        console.log("Password not correct")
        return res.render('main', { layout: 'login', message2: "Enter correct email or password " });
      } else {

        const id = data5[0].id;
        const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
        //console.log("this is my token " + token);

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
      db.query("SELECT * FROM users WHERE id = ?", [decoded.id], async (error, data) => {

        if (!data) {
          return next();
        }
        console.log(data);  
        req.user = data[0];
        next();

      });
    } catch (error) {
      console.log(error);
      next();
    }

  } else {
    next();
  }

}

exports.logout = async (req, res) => {
  res.cookie('jwt', 'logout', {
    expires: new Date(
      Date.now() * 2 * 1000
    )
  }, httpOnly = true
  )
  res.redirect('/');
}

