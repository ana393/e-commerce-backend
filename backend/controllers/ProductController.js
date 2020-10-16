const Product = require('../models/Products');

const ProductsController={
   
    //get productsProduct
    async getProduct(req, res) {
       try{
         const product = await Product.find();
         res.send(product)
       }catch (error){
          console.error(error)
           res.status(500).send({
           message: "There was a problem to see the products",
           error});
       }
    
    }
}
module.exports = ProductsController;