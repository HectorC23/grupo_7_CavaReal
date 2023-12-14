const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file,cb)=> {
        let uploadPath = path.resolve(__dirname, '../../public/images');
        if (req.path === '/register' || req.path.startsWith('/edit/')) {
            uploadPath = path.resolve(__dirname, '../../public/images/users');
        }
    
        cb(null, uploadPath);
    },
    filename: (req,file,cb)=>{
        let nameImage = "img-" + Date.now() + path.extname(file.originalname);
        cb(null,nameImage);
    }
})

let upload = multer({ storage });

module.exports = upload;