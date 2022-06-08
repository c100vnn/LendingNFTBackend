var mongoose = require("mongoose");
var schema = mongoose.Schema;

var RentSchema = new schema({
  itemId: { type: ObjectId, required: true },
  lenderId: { type: ObjectId, required: true },
  renterId: { type: ObjectId, required: true },
  durationId: { type: ObjectId, required: true },
  totalFee: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

module.exports = mongoose.model("rent", RentSchema);
