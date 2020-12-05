const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const passport = require('passport');
const { only } = require('../config/utils.js');

/* GET users listing. */
<<<<<<< HEAD
router.post("/signUp", UserController.signUp);
router.post('/login', UserController.logIn);
router.put("/update", passport.authenticate('jwt', { session:false}), UserController.Update)
router.get("/",  passport.authenticate('jwt', { session:false}), only(['admin','seller']),  UserController.getAll);
router.delete("/:id", passport.authenticate('jwt', { session:false}), only(['admin']), UserController.deleteUser);
=======
router.post("/signup", UserController.signUp);
router.get("/", UserController.getAll);
router.delete("/:id", UserController.deleteUser);
>>>>>>> frontend-feature

module.exports = router;
