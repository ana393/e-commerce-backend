const mongoose = require('mongoose');

const OrderSchema =  new mongoose.Schema({
    referenceNumber: {
        type: Number,
        unique:true,
    },
 items: [
       {
        prodID: {
           type: mongoose.Schema.Types.ObjectId,
           required: true,
           ref:'Product'
        },
        name:{
            type: String,
            required:true
        },
        quantity:{
            type: Number,
            required: true
        } ,
        price:{
           type: Number,
           required: true
        }
       } 
    ],
    expenditure:{
            type: mongoose.Schema.Types.Decimal128,
            required: true
        } , 
    user:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
       status: {
        type: String,
        enum:['paid', 'shipping', 'delivered','canceled'],
        required: true,
     },
    shippingAddress: {
        telephone:{ type:String,
                   validate:{
                    required: true,   
                    validator: function(v) {
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
 //increment reference number of the order
 OrderSchema.pre('save', async function(next) {
     try {
        const order = await Order.find();
        this.referenceNumber = order.length ++ 
     } catch (error) {
             console.error(error)
     }
 })
 const Order = mongoose.model("Order", OrderSchema);
 module.exports = Order;