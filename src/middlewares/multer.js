const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file,cb)=> {
        cb(null,path.join(__dirname,'../../public/images'));
    },
    filename: (req,file,cb)=>{
        let nameImage = "img-" + Date.now() + path.extname(file.originalname);
        cb(null,nameImage);
    }
})

let upload = multer({ storage });

module.exports = upload;