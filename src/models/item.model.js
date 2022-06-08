var mongoose = require("mongoose");
var schema = mongoose.Schema;

var ItemSchema = new schema({
  tokenId: { type: String, required: true },
  dailyPrice: { type: Number, required: true },
  minDuration: { type: Number, required: true },
  maxDuration: { type: Number, required: true },
  collateral: { type: Number, required: true },
  isActive: { type: Boolean, required: true },
  isRemoved: { type: Boolean, required: true },
});

module.exports = mongoose.model("item", ItemSchema);
