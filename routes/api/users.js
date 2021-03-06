const router = require("express").Router();
const userController = require("../../controller/usersController.js");

// Matches with "/api/books"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;