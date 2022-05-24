module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", user.create);
  
    // Retrieve all Users
    router.get("/", user.findAll);
  
    // Retrieve a single User with id
    router.get("/:id", user.findOne);
  
    // Delete a User with id
    router.delete("/:id", user.delete);
  
    app.use("/api/users", router);
  };