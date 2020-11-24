const { update } = require('../models/OrderModel');
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
 },
 //update according to passed status
 async updateToReqStatus(req, res) {
try {
   const update = await Order.findOneAndUpdate({referenceNumber:req.body.referenceNumber}, {$set: {status: req.body.status}}, {new:true});
     res.status(200).json({msg: "Successfully updated order", update }) 
} catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Unable to update the order."})
}
 },
 //user
 async getMyOrders(req, res) {
    try {
       const myOrders = await Order.find({ user: req.params.id});
        res.status(200).json({msg: "Successfully found my orders", myOrders })
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "Unable to find your orders."})  
    }
 },
 //admin
 async getOrders(req, res) {
    try {
          const orders = await Order.find({}).populate('user', 'email');
          res.status(200).json({msg: "Successfully found orders", orders  }) 
    } catch (error) {
       console.error(error);
      res.status(500).send({ msg: "Unable to find orders."}) 
    }
 },
 //admin 
 async deleteOrder(req, res) {
    try {
      const earase = await Order.findByIdAndDelete(req.params.id, req.body);
      res.status(200).json({msg: "Successfully deleted orders", earase }) 
    } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Unable to delete order."})  
    }
 }
};
module.exports = OrderController;