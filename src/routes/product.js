const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

const userPermissions = require("../middlewares/userPermissions");
const upload = require("../middlewares/multer");



router.get('/add', userPermissions , productController.add);
router.post('/add', upload.single('img') , productController.create); 

router.get('/edit/:id', userPermissions, productController.edit);
router.put("/edit/:id", upload.single('img') , productController.update);

router.delete("/detail/:id", userPermissions, productController.delete);

router.get('/detail/:id', productController.detail);

router.get('/all', productController.list);

router.get('/search', productController.search);

router.get('/filter', productController.filter);


module.exports = router;