const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name : {type:String,
            required: true
    },
    category: {
        type:String,
       
        
        }, 
    price: {
        type:String,
        required: true,
        default: 0
        }, 
    imgURL: {
        type:String, 
      
        },
    InStock: {
        type:String,
        required: true,
        default: 0
    }
 },{
     timestamps: true
 }
)
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;