const express = require("express");
const router = express.Router();
const ProductsController= require('../controllers/ProductController') ;
const multer =  require('multer');
const passport = require('passport');
const { only } = require('../config/utils.js');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});
const filter =(req, file, cb)=> {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        //don´t save the file
        cb(new Error('Unfullfilled type requirements'), false);
    }
}
const upload = multer({storage: storage, limits:{fileSize: 1024 * 1024 * 5}, fileFilter: filter});

router.post('/ProdIMG', upload.single("imgURL"), function (req, res){
    console.log(req.file, req.body)
});
router.post('/insert',    ProductsController.insertProduct);
router.put('/update',passport.authenticate('jwt', { session:false}),only(['admin']), ProductsController.updateProduct);
router.delete('/:id',passport.authenticate('jwt', { session:false}),  ProductsController.deleteProduct);
//for all users
router.get('/search', ProductsController.filterProduct)
router.get('/', ProductsController.getProducts);
router.get('/byPrice', ProductsController.byPriceProduct);

module.exports = router;