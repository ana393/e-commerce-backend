const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

/* GET users listing. */
router.post("/signUp", UserController.signUp);
router.post('/login', UserController.logIn);
router.get("/", UserController.getAll);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
