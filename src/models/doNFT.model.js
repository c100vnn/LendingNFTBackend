var mongoose = require("mongoose");
var schema = mongoose.Schema;

var DoNFTSchema = new schema({
  tokenId: String,
  ownerId: String,
  userId: [String],
  expriseDate: Date,
});

module.exports = mongoose.model("doNft", DoNFTSchema);
