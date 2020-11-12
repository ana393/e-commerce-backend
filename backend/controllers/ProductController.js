const Product = require('../models/Products');

const ProductsController={
    //insert new product
    async insertProduct(req, res) {
      try {
        const product = await Product.create(req.body);
        res.send({product, msg:"Successfully created product."})
      } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Unable to create the product."})
      }
    },
    //update product
    async updateProduct(req,res) {
      try {
        const updated = await Product.findOneAndUpdate(req.body.name, req.body, {new:true});
        res.status(200).json({ message: "Successfully updaded product", updated})
        
      } catch (error) {
         console.error(error);
        res.status(500).send({ msg: "Unable to update the product."})
      }
    },
   //remove product
    async deleteProduct(req, res) {
      try {
       const deleted = await Product.findByIdAndDelete(req.params.id) ;
       res.status(200).json({ message: "Successfully deleted product",deleted})
      } catch (error) {
         console.error(error);
        res.status(500).send({ msg: "Unable to delete the product."})
      }
    },
    //filter product by title/name from the client-side 
    async filterProduct(req, res) {
  
      try {
        const filter = await Product.find({ name : { $regex: req.body.name,  $options: 'i'} });
        if  (filter.length === 0) { res.status(404).json({msg:`No product with given name: ${ req.body.name}, in your Data Base. `});
      }
        res.status(200).json({ message: "Successfully found", filter})
      } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "There were a problem to find the product."})
      }
    },
    //get productsProduct
    async getProducts(req, res) {
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