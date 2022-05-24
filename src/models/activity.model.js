var mongoose = require("mongoose");
var schema = mongoose.Schema;

var ActivitySchema = new schema({
  userId: String,
  rentIdId: String,
  content: String,
  description: String,
  createdAt: Date,
});

module.exports = mongoose.model("activity", ActivitySchema);
