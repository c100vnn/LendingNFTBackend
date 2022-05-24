var mongoose = require("mongoose");
var schema = mongoose.Schema;

var UserSchema = new schema({
  address: String,
});

module.exports = mongoose.model("User", UserSchema);
