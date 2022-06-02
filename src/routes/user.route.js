const router = express.Router();
const express = require("express");
const user = require("../controllers");

// post: Create a new User, get: get all Users
router.route("/").post(user.create).get("/", user.findAll);

// get: Retrieve a single User with id, delete: Delete a User with id
router
  .route("/:id")
  .get(user.findUserById)
  .patch(user.updateUser)
  .delete(user.deleteById);

// get: Retrieve a single User with email
router.route("/:email").get(user.findByEmail);

// get: Retrieve list user with conditions
router.route("/users-by-query").get(user.findUsersByQuery);

app.use("/api/users", router);

module.exports = router;
