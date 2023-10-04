const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file,cb)=> {
        let uploadPath = '';
        if(req.path == '/edit/:id'){
            uploadPath = '../../public/images'
        } else if(req.path == '/register') {
            uploadPath = '../../public/images/users/'
        }
        cb(null,path.join(__dirname, uploadPath));
    },
    filename: (req,file,cb)=>{
        let nameImage = "img-" + Date.now() + path.extname(file.originalname);
        cb(null,nameImage);
    }
})

let upload = multer({ storage });

module.exports = upload;