const express = require("express");
const router = express.Router();
const ProductsController= require('../controllers/ProductController') ;
const passport = require('passport');
const { only } = require('../config/utils.js');
const multer =  require('multer');
const upload = multer({dest: 'uploads/'});


router.post('/insert', passport.authenticate('jwt', { session:false}),only(['admin']), ProductsController.insertProduct);
router.put('/update', upload.single('prodImg'), ProductsController.updateProduct);
router.delete('/:id',passport.authenticate('jwt', { session:false}),only(['admin']),  ProductsController.deleteProduct);
//for all users
router.get('/search', ProductsController.filterProduct)
router.get('/', ProductsController.getProducts);
router.get('/byPrice', ProductsController.byPriceProduct);

module.exports = router;