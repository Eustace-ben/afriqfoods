const db = require('../database/database');
const express = require('express');
//const fileUpload = require('express-fileupload');
const app = express();


// exports.uploading = async(req, res, next)=>{


//     if(req.user){
//         try {    
//             let sampleFile;
//             let uploadpath;

//             if (!req.files || Object.keys(req.files).length === 0) {
//                 res.status(400).send('No files were uploaded.');
//                 return;
//               }

//               console.log('req.files >>>', req.files); // eslint-disable-line

//               sampleFile = req.files.sampleFile;

//               uploadPath = __dirname + '/gallery/' + sampleFile.name;

//               sampleFile.mv(uploadPath, function(err) {
//                 if (err) {
//                   return res.status(500).send(err);
//                 }

//                 res.send('File uploaded to ' + uploadPath);

//               });
//                next();
//         } catch (error) {
//             console.log(error);
//             next();
//         }
//     }else{
//         next();
//     }

//};



// exports.uploading = async (req, res, next) => {
//     let sampleFile;
//     let uploadpath;

//     if (!req.files || Object.keys(req.files).length === 0) {
//         return res.status(400).send('No files were uploaded.');
//     }
//     sampleFile = req.files.sampleFile;
//     console.log(sampleFile);
//     uploadpath = __dirname + '/upload/' + sampleFile.name;

//     sampleFile.mv(uploadpath, function (err) {
//         if (err){
//            return console.log(err);
//         }
//         res.send("File uploaded"+ uploadpath);
//         next(); 
//     });
// }







exports.uploading = async (req, res, next) => {
    if (req.result) {
        try {
            let sampleFile;
            let uploadpath;
            let newImage;

            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).send('No files were uploaded.');
            }else{
                sampleFile = req.files.sampleFile;
              console.log(sampleFile);
              newImage = Date.now() + sampleFile.name
                uploadpath = require('path').resolve('./') + '/public/upload/' + newImage
                sampleFile.mv(uploadpath, function (err) {
                    if (err) {
                        return console.log(err)
                    }
                    res.send("File uploaded" + uploadpath);
                    next();
                })
            }

        } catch (err) {
            console.log(err);
            return next();
        }
    } else {
        return next();
    }
}