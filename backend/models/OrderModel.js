const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    referenceNumber: {
        type: Number,
        unique:true,
    },
    status: {
        type: String,
        enum:['paid', 'shipping', 'delivered','canceled'],
        required: true,
    },
    user:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    articles:
        {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'Cart',
        }
    ,
    shippingAddress: {
        telephone:{
            type:String,
             maxlength: 9,
            validate:{
                validador: function(v) {
                    return /\d{9}/.test(v);
                },
                message: '{v} is not a valid phone number! '
            }  },
        address: {type: String, required:true},
        city:{type: String, required:true},
        postalCode:{type: String, required:true},
        country: {type: String, required:true},
    },
    
},{
     timestamps: true
 })
 const Order = mongoose.model("Order", OrderSchema);
 module.exports = Order;