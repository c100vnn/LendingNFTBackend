var mongoose = require("mongoose");
var schema = mongoose.Schema;

var DoNFTSchema = new schema({
  tokenId: Number,
  originTokenId: Number,
  marketAddress: String,
  durationId: Number,
  ownerId: String,
  userId: String,
  nonce: Number,
});

module.exports = mongoose.model("doNft", DoNFTSchema);
