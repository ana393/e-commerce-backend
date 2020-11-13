const express = require("express");
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const passport = require('passport');
const { only } = require('../config/utils.js');

router.post('/create',passport.authenticate('jwt', { session:false}), OrderController.createOrder );

module.exports = router;