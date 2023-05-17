 const db = require('../database/database');
 const path = require("path")





exports.uploadedfile = async(req, res,next)=>{
    if(req.user){
        const {recipeName, recipes,recipe_desc } = req.body;
        let sampleFile;
        let uploadpath;
        if (!req.files || Object.keys(req.files).length === 0) {
           //return res.status(400).send('No files were uploaded.');
           return res.render('showcase', {user: req.user, message : 'No files were uploaded.'});
        }else if(!recipeName || !recipes || !recipe_desc){
           //return res.status(400).send('You cant Showcase your recipe without filling all fields');
           return res.render('showcase', {user: req.user,  message : 'You cant Showcase your recipe without filling all fields'});
        }

        sampleFile = req.files.sampleFile;
        set = sampleFile.name
       console.log(set) ;
        //console.log(sampleFile);
        uploadpath = path.join(__dirname, '../public/images/') + sampleFile.name;
        
         await sampleFile.mv(uploadpath, function (err) {
            if (err) {
                return console.log(err)
            }
           // res.send("File uploaded" + uploadpath);
          
        });
        db.query("INSERT INTO cuisine SET ?", {recipeName:recipeName, recipes:recipes, recipe_desc:recipe_desc, user_id: req.user.id, images:set}, async(error, data)=>{
              if(error)throw error;
             // console.log(data);
             res.redirect('/');
              next();
        });
    }
}






















