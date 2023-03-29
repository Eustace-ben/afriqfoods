const db = require('../database/database');

// //Update User details
// exports.edit = async(req, res,next)=>{
//   if(req.user){
//     const {name, email, id } = req.body;
//     try {
//       let [data] = await db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, id ]);
//         if(data){
//           res.redirect('/profile');
//         }
//     } catch (error) {
//       console.log(error);
//       return next();
//     }
//   }else{
//     console.log("unable to update user")
//     return next();
//   }
// }

// //Update User details
exports.edit = async(req, res,next)=>{
  if(req.user){
    const {name, email, id } = req.body;
    try {
       db.query("UPDATE users SET name = ?, email = ? WHERE id = ?",[name, email, id], async(error, data)=>{
        if(data){
          res.redirect('/profile');
        }
       })
    } catch (error) {
      console.log(error);
      return next();
    }
  }else{
    console.log("unable to update user")
    return next();
  }
}