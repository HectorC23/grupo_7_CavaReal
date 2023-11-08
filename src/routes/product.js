const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

const userPermissions = require("../middlewares/userPermissions");
const upload = require("../middlewares/multer");



router.get('/add', userPermissions , productController.add);
router.post('/add', upload.single('img') , productController.create); 

router.put("/edit/:id", upload.single('img') , productController.process);

router.get('/detail/:id', productController.detalle);

router.get('/edit/:id', userPermissions, productController.edit);

router.delete("/detail/:id", userPermissions, productController.deleteProduct);


module.exports = router;