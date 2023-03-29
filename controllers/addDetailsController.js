const db = require('../database/database');




// exports.viewDetails = async(req, res, next)=>{
//     if(req.user){
//         const id = req.user.id;
//         try {
//             db.query("SELECT * FROM info WHERE id = ?",[id], async(error, data1)=>{
//                 if(error)throw error;
//                  if(!data1){
//                    return next();
//                  } else{
//                     //console.log(data1);
//                     req.result = data1[0];
//                  }
//                });
//         } catch (error) {
//             console.log(error);
//             next();
//         }
//     }else{
//         return next();
//     }
//     };

exports.addDetails = async(req, res, next)=>{
    if(req.user){
        const {about, skills, Recipes, website, id} = req.body;
        try {
            db.query("INSERT INTO info SET ?",{about:about, skills:skills, Recipes:Recipes, website:website, id:id}, async(error, data)=>{
                if(error)throw error;
                res.redirect('/profile');
            })

        } catch (error) {
            console.log(error);
            next();
        }
    }else{
        return next();
    }
    };



    // exports.viewDetails = async(req, res, next)=>{
    //     const id = req.user.id;
    //     db.query("SELECT * FROM info WHERE id = ?",[id], async(error, data1)=>{
    //         if(error)throw error;
    //          if(!data1){
    //            return next();
    //          } else{
    //             //console.log(data1);
    //             req.result = data1[0];
              
    //          }
    //        });
    //        next();
    // };