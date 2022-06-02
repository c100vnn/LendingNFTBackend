var mongoose = require("mongoose");
var schema = mongoose.Schema;

var OriginNFTSchema = new schema({
  tokenId: String,
  ownerId: String,
  contractAddress: String,
});

/**
 * Check if NFT existed
 * @param {string} tokenId - tokenID of NFT
 * @param {string} contractAddress - where it come from
 * @returns {Promise<boolean>}
 */
OriginNFTSchema.statics.isNFTexisted = async function (
  tokenId,
  contractAddress
) {
  const user = await this.findOne({ tokenId, contractAddress });
  return !!user;
};

/**
 * Check if NFT existed
 * @param {string} tokenId - tokenID of NFT
 * @param {string} contractAddress - where it come from
 * @returns {Promise<boolean>}
 */
OriginNFTSchema.statics.isNFTexistedById = async function (id) {
  const user = await this.findOne({ id });
  return !!user;
};

/**
 * @typedef OriginNFT
 */
const OriginNFT = mongoDashboardConnection.model("originNft", OriginNFTSchema);

module.exports = mongoose.model(OriginNFT);
