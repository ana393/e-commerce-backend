const express = require("express");
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const passport = require('passport');
const { only } = require('../config/utils.js');

router.post('/create',passport.authenticate('jwt', { session:false}), OrderController.createOrder );
router.put('/update',passport.authenticate('jwt', { session:false}),only(['admin','seller']), OrderController.updateToReqStatus);
router.get('/:id', passport.authenticate('jwt', { session:false}), OrderController.getMyOrders);
router.get('/', passport.authenticate('jwt', { session:false}),only(['admin','seller']), OrderController.getOrders);
router.delete('/:id',passport.authenticate('jwt', { session:false}),only(['admin']), OrderController.deleteOrder);

module.exports = router;