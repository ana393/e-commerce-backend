const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    items: [
       {
        product: {
           type: mongoose.Schema.Types.ObjectId,
           required: true,
           ref:'Product'
        },
        quantity:{
            type: Number,
            required: true
        } ,
        expenditure:{
            type: mongoose.Schema.Types.Decimal128,
            required: true
        }  
       } 
    ]
})
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;