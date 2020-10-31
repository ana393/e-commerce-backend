const User = require("../models/User");

const UserController = {
  //sign-up
  async signUp(req, res) {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ user, message: "User successfully created" , user});
      
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "There was a problem to sign up the user", error });
    }
  },

  //get all the users from DB
  async getAll(req, res){
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "There was a problem to get all the users",
        error,
      });
    }
  },
  //delete user by id
  async deleteUser(req, res){
    try {
    const user = await User.findByIdAndDelete(req.params.id);
     res.json({message:'User successfully deleted', user})
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "There was a problem to delete the user",
        error,
      }); 
    }
  }
};

module.exports = UserController;
