const db = require('../database/database');


//Insert into info table 
exports.addDetails = async(req, res, next)=>{
    if(req.user){
        const {about, skills, Recipes, website, id} = req.body;
        try {
            db.query("INSERT INTO info SET ?",{about:about, skills:skills, Recipes:Recipes, website:website, user_id:id}, async(error, data)=>{
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



