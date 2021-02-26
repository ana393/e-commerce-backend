const Product = require('../models/Products');


const ProductsController={
    //insert new product
    async insertProduct(req, res) {
      try {
        const item =({
          name: req.body.name,
          category: req.body.category,
          price: req.body.price,
          InStock: req.body.InStock,
          imgURL: req.file.filename
        })
        const product = await Product.create({...item} );
        res.status(201).json({message:"Successfully created product.", product}) 
      } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Unable to create the product."})
      }
    },
    //update product
    async updateProduct(req,res) {
      console.log(req.body)
      try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
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
       res.status(204).json({ message: "Successfully deleted product",deleted})
      } catch (error) {
         console.error(error);
        res.status(500).send({ msg: "Unable to delete the product."})
      }
    },
    //filter product by title/name from the client-side 
    async filterProduct(req, res) {
  
      try {
        const filter = await Product.find({ name : { $regex: req.query.name,  $options: 'i'} });
        if  (filter.length === 0) { res.status(404).json({msg:`No product with given name: ${ req.query.name}, in your Data Base. `});
      }
      
        res.status(200).json({ message: "Successfully found", filter})
      } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Unable to find the product by title."})
      }
    },
    //filter by price
    async byPriceProduct(req, res) {
      try {
        const byPrice = await Product.find().sort( { price: 1 } );
        res.send(byPrice)
      } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Unable to find the product by price."})
      }
    },
    //get productsProduct
    async getProducts(req, res) {
       try{
         const product = await Product.find();
          res.status(200).json({ message: "Successfully found products", product})
       }catch (error){
          console.error(error)
           res.status(500).send({
           message: "There was a problem to see the products",
           error});
       }
    
    },
    async getProductById(req, res) {
       try{
         const product = await Product.findById(req.params._id)
          res.status(200).json({ message: "Successfully found", product})
       }catch (error){
          console.error(error)
           res.status(500).send({
           message: "There was a problem to see the products",
           error});
       }
    
    }
}
module.exports = ProductsController;