const db = require('../database/database');


exports.editInfo = async(req, res, next)=>{
  if(req.result){
      const { skills, id , about, website} = req.body
      try {
        db.query("UPDATE info SET skills = ?, about = ?, website = ? WHERE user_id = ?", [skills, about, website, id], async(error, data)=>{
                if(error)throw error;
                if(data){
                  res.status(200).redirect('/profile');
                }
               next();
        });

      } catch (error) {
        console.log(error);
        next();
      }
  }else{
    console.log("Cant read result info.")
   return next();
  }

}






 //Update User information in the users table
exports.edit = async(req, res, next)=>{
  if(req.user){
    const {name, email, id } = req.body;
    try {
       db.query("UPDATE users SET name = ?, email = ? WHERE id = ?",[name, email, id], async(error, data)=>{
        if(error)throw error;
        if(data){
          res.redirect('/profile');
        }
        next();
       })
    } catch (error) {
      console.log(error);
      return next();
    }
  }else{
    console.log("unable to update user");
    //  redirect('/profile');
    return next();
  };
};




