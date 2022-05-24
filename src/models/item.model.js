var mongoose = require("mongoose");
var schema = mongoose.Schema;

var ItemSchema = new schema({
  tokenId: String,
  dailyPrice: Number,
  minDuration: Number,
  maxDuration: Number,
  collateral: Number,
  isActive: Boolean,
  isRemoved: Boolean,
});


module.export = mongoose.model("item", ItemSchema);
