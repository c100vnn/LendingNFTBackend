var mongoose = require("mongoose");
var schema = mongoose.Schema;

var VipNFTSchema = new schema({
  tokenId: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("vipNft", VipNFTSchema);
