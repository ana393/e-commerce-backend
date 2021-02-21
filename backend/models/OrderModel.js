const mongoose = require('mongoose');

const OrderSchema =  new mongoose.Schema({
    referenceNumber: {
        type: Number,
        unique:true,
    },
     user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    } ,
 items: 
      [ {
        product: {
           type: mongoose.Schema.Types.ObjectId,
           required: true,
           ref:'Product'
        },
        quantity:{
            type:Number,
            default: 1
        }
       } ]
    ,
    expenditure:{
            type: Number,
            required: true
        } , 
   
    status: {
        type: String,
        enum:['pending','paid', 'shipping', 'delivered','canceled'],
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