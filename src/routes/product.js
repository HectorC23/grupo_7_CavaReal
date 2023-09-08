const express = require("express");
const multer = require('multer');
const path = require('path');

const router = express.Router();
const productController = require('../controllers/productController');

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

router.get('/detail/:id', productController.detalle);

router.get('/add', productController.add);

router.get('/edit/:id', productController.edit);
router.put("/edit/:id", productController.process);

router.post("/detail/:id", productController.deleteProduct);
router.post('/add', upload.single('img') ,productController.productAdd); 


module.exports = router;