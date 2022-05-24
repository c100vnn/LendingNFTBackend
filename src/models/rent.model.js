var mongoose = require("mongoose");
var schema = mongoose.Schema;

var RentSchema = new schema({
  itemId: String,
  lenderId: String,
  renterId: String,
  duration: String,
  totalFee: Number,
  startDate: Date,
  endDate: Date,
});

module.exports = mongoose.model("rent", RentSchema);
