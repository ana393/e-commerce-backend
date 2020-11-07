const User = require("../models/User");
const issueJWT = require('../config/utils.js');
const { update } = require("../models/User");


const UserController = {
  //sign-up
  async signUp(req, res) {
    try {
      const isUser = await User.findOne({ email: req.body.email });
      if (isUser) {
        return res.send({
          isUser,
          message: "We have already a user  with this email",
        });
      } else {
        const user = await User.create(req.body);
        res.status(200).json({ user,  message: "User successfully created" });
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "There was a problem to sign up the users", error });
    }
  },
//login
async logIn(req, res) {
  try {
     const isUser = await User.findOne({ email: req.body.email });
      if (!isUser) {
        return res.send({
          isUser,
          message: "We have already a user  with this email"});
       } else {
         const match = await isUser.matchPassword(req.body.password);
         if (match){
           const tokenObj = issueJWT(isUser);
           return res.status(200).json({isUser, token: tokenObj.token, expiresIn: tokenObj.expires, msg:"You are logged in"})
         } else {
           res.status(401).json({msg:"Wrong pasword"})
         }  
       }
  } catch (error) {
    console.error(error);
      res
        .status(500).json({ message: "There was a problem to log in the users", error });
  }
},
//update profile
async Update(req, res){
   try {
     const Updated = await User.findOneAndUpdate(req.body.email, req.body, {new:true});
     res.status(200).json({ message: "Successfully updaded", Updated})
   } catch (error) {
     console.error(error);
      res
        .status(500).json({ message: "There was a problem to update your profile", error });
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
