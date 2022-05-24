const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {
    console.log(req.body.address);
    // Validate request
    if (!req.body.address) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a User
    const user = new User({
      address: req.body.address,
    });
  
    // Save User in the database
    user
      .save(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };