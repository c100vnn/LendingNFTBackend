var mongoose = require("mongoose");
var schema = mongoose.Schema;

var OriginNFTSchema = new schema({
  tokenId: String,
  ownerId: String,
  contractAddress: String,
});

module.exports = mongoose.model("originNft", OriginNFTSchema);
