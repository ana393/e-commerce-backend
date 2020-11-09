const express = require("express");
const router = express.Router();
const ProductsController= require('../controllers/ProductController') ;


router.post('/insert', ProductsController.insertProduct);
router.put('/update', ProductsController.updateProduct);
router.delete('/:id', ProductsController.deleteProduct);
//for all users
router.get('/search', ProductsController.filterProduct)
router.get('/', ProductsController.getProducts);

module.exports = router;