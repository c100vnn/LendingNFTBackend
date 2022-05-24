var mongoose = require("mongoose");
var schema = mongoose.Schema;

var VipNFTSchema = new schema({
  tokenId: String,
  userId: String,
});

module.exports = mongoose.model("vipNft", VipNFTSchema);
