var mongoose = require("mongoose");
var schema = mongoose.Schema;

var ActivitySchema = new schema({
  userId: { type: String, required: true },
  rentId: { type: String, required: true },
  content: { type: String, required: true },
  description: { type: String, required: false },
  createdAt: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("activity", ActivitySchema);
