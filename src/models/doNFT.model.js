var mongoose = require("mongoose");
var schema = mongoose.Schema;

var DoNFTSchema = new schema({
  tokenId: { type: Number, required: true },
  originTokenId: { type: Number, required: true },
  marketAddress: { type: String, required: true },
  durationId: { type: Number, required: true },
  ownerId: { type: ObjectId, required: true },
  userId: { type: ObjectId, required: false },
  expireDate: { type: Date, required: false },
  nonce: { type: Number, required: true },
});

module.exports = mongoose.model("doNft", DoNFTSchema);
