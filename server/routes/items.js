const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/items");
const authenticate = require("../middleware/auth")
const admin = require("../middleware/admin")

// route path in this file is /items

// router
//   .route("/")
//   .get(ItemController.list)
//   .post(ItemController.create);

// /items path
router.get("/", authenticate, admin, ItemController.list)
router.post("/", authenticate, admin, ItemController.create)

router
  .route("/:id")
  .get(ItemController.read);

module.exports = router;
