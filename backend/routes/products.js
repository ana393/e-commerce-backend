const express = require("express");
const router = express.Router();
const passport = require('passport');
const { only } = require('../config/utils.js');
const ProductsController= require('../controllers/ProductController') ;
const multerInstance = require('../config/multer')


router.post('/insert',passport.authenticate('jwt', { session:false}), multerInstance.single('imgURL'),   ProductsController.insertProduct);
router.put('/update/:id',passport.authenticate('jwt', { session:false}), ProductsController.updateProduct);
router.delete('/:id',passport.authenticate('jwt', { session:false}),only(['admin']),  ProductsController.deleteProduct);
//for all users
router.get('/search', ProductsController.filterProduct)
router.get('/', ProductsController.getProducts);
router.get('/:id', ProductsController.getProductById);
router.get('/byPrice', ProductsController.byPriceProduct);

module.exports = router;