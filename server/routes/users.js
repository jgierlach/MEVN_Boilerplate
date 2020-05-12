const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/user");
const authenticate = require("../middleware/auth")

// router.route("/").post(UsersController.create).get(UsersController.read)

// Route is /users
router.post("/", UsersController.create)

// Route is /users
router.get("/", authenticate, UsersController.read)

// Route is /users/login
router.post("/login", UsersController.login)

module.exports = router;
