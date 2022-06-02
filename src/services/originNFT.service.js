const httpStatus = require("http-status");
const { originNFT } = require("../models");
const ApiError = require("../utils/ApiError");

/**
 * Import new origin NFT
 * @param {Object} NFTBody
 * @returns {Promise<OriginNFT>}
 */
const importOriginNFT = async (NFTBody) => {
  if (await originNFT.isNFTexisted(NFTBody.tokenId, NFTBody.contractAddress)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "NFT already existed");
  }
  return originNFT.create(NFTBody);
};

/**
 * Retrive all origin NFT
 * @returns {Promise<QueryResult>}
 */
const getAllONFT = async () => {
  return originNFT.findAll();
};

/**
 * Get originNFT by id
 * @param {ObjectId} id
 * @returns {Promise<OriginNFT>}
 */
const getONFTById = async (id) => {
  return originNFT.findById({ id });
};

/**
 * Get originNFT by tokenId and contractAddress
 * @param {string} tokenId
 * @param {string} contractAddress
 * @returns {Promise<OriginNFT>}
 */
const getONFTByTokenInfo = async (tokenId, contractAddress) => {
  return originNFT.findOne({ tokenId, contractAddress });
};

/**
 * Get list originNFTs by contractAddress
 * @param {string} contractAddress
 * @returns {Promise<QueryResult>}
 */
const getAllONFTByContractAddress = async (contractAddress) => {
  return originNFT.find({ contractAddress });
};

/**
 * Update originNFT by tokenId, contractAddress
 * @param {string} tokenId
 * @param {string} contractAddress
 * @returns {Promise<OriginNFT>}
 */
const updateOriginNFTById = async (id, updateOriginNFT) => {
  if (!originNFT.isNFTexistedById(id)) {
    throw new ApiError(httpStatus.NOT_FOUND, "Origin NFT not found");
  }
  Object.assign(originNFT, updateOriginNFT);
  await originNFT.save();
  return originNFT;
};

/**
 * Delete originNFT by id
 * @param {ObjectId} originNFTId
 * @returns {Promise<OriginNFT>}
 */
const deleteOriginNFTById = async (id) => {
  const oNFT = await getONFTById({ id });
  if (!oNFT) {
    throw new ApiError(httpStatus.NOT_FOUND, "Origin NFT not found");
  }
  await oNFT.remove();
  return oNFT;
};

module.exports = {
  importOriginNFT,
  getONFTById,
  getONFTByTokenInfo,
  getAllONFTByContractAddress,
  updateOriginNFTById,
  deleteOriginNFTById,
  getAllONFT,
};
