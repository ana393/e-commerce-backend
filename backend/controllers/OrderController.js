const Order = require('../models/OrderModel');

const OrderController = {
 async createOrder(req, res) {
      console.log('insert order', req.body) 
     try {
        req.body.status='pending';
        const newOrder = await Order.create(req.body); 
        res.status(201).json({msg: "Successfully created order", newOrder  }) 
     } catch (error) {
          console.error(error);
        res.status(500).send({ msg: "Unable to create the order."})
     }
 },
 //update according to passed status
 async updateToReqStatus(req, res) {
try {
   const update = await Order.findByIdAndUpdate(req.params.id, {$set: {status: req.body.status}}, {new:true});
     res.status(200).json({msg: "Successfully updated order", update }) 
} catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Unable to update the order."})
}
 },
 //user
 async getMyOrders(req, res) {

    try {
       const myOrders = await Order.find({user:req.user._id}).populate('items.product','name category price imgURL');
        res.status(200).json({msg: "Successfully found my orders", myOrders })
        console.log(myOrders)
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Unable to find your orders."})  
    }
 },
 //admin
 async getOrders(req, res) {
    try {
          const orders = await Order.find({}).populate('product','name ');
          res.status(200).json({msg: "Successfully found orders", orders  }) 
    } catch (error) {
       console.error(error);
      res.status(500).send({ msg: "Unable to find orders."}) 
    }
 },
 //admin 
 async deleteOrder(req, res) {
    try {
      const earase = await Order.findByIdAndDelete(req.params.id);
      res.status(204).json({msg: "Successfully deleted orders", earase }) 
    } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Unable to delete order."})  
    }
 }
};
module.exports = OrderController;