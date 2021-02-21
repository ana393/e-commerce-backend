const express = require("express");
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const passport = require('passport');
const { only } = require('../config/utils.js');

router.post('/create',passport.authenticate('jwt', { session:false}), OrderController.createOrder );
router.put('/update/:id',passport.authenticate('jwt', { session:false}), OrderController.updateToReqStatus);
router.get('/myorders', passport.authenticate('jwt', { session:false}),OrderController.getMyOrders);
router.get('/',passport.authenticate('jwt', { session:false}),  OrderController.getOrders);
router.delete('/:id',passport.authenticate('jwt', { session:false}),only(['admin']), OrderController.deleteOrder);

module.exports = router;