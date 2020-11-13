const Order = require('../models/OrderModel');

const OrderController = {
 async createOrder(req, res) {
     try {
        const newOrder = await Order.create(req.body); 
        res.status(200).json({msg: "Successfully created order", newOrder  }) 
     } catch (error) {
          console.error(error);
        res.status(500).send({ msg: "Unable to create the order."})
     }
 }
};
module.exports = OrderController;