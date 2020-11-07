const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const passport = require('passport');

/* GET users listing. */
router.post("/signUp", UserController.signUp);
router.post('/login', UserController.logIn);
router.put("/update", passport.authenticate('jwt', { session:false}), UserController.Update)
router.get("/",  passport.authenticate('jwt', { session:false}),UserController.getAll);
router.delete("/:id", passport.authenticate('jwt', { session:false}), UserController.deleteUser);

module.exports = router;
